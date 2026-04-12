import { useState, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload, Trash2, Copy, ImagePlus, Filter, Search, X, Check } from "lucide-react";
import { motion } from "framer-motion";
import { usePageSEO } from "@/hooks/usePageTitle";

const CATEGORIES = [
  "Apparel",
  "Bar & Restaurant",
  "Drinkware",
  "Outdoor",
  "Signage",
  "Vehicle",
  "Print",
  "Logo",
  "Other",
];

const AdminPhotos = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [uploading, setUploading] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Other");
  const [altText, setAltText] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Fetch photos
  const { data: photos = [], isLoading } = useQuery({
    queryKey: ["admin-photos", filterCategory, searchTerm],
    queryFn: async () => {
      let query = supabase.from("photos").select("*").order("created_at", { ascending: false });
      if (filterCategory !== "all") {
        query = query.eq("category", filterCategory);
      }
      if (searchTerm) {
        query = query.ilike("file_name", `%${searchTerm}%`);
      }
      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  // Delete photo
  const deleteMutation = useMutation({
    mutationFn: async (photo: { id: string; file_path: string }) => {
      const { error: storageError } = await supabase.storage.from("photos").remove([photo.file_path]);
      if (storageError) throw storageError;
      const { error: dbError } = await supabase.from("photos").delete().eq("id", photo.id);
      if (dbError) throw dbError;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-photos"] });
      toast({ title: "Photo deleted" });
    },
    onError: (err: Error) => {
      toast({ title: "Delete failed", description: err.message, variant: "destructive" });
    },
  });

  // Upload handler
  const handleUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files || files.length === 0) return;
      setUploading(true);

      try {
        for (const file of Array.from(files)) {
          const ext = file.name.split(".").pop();
          const filePath = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

          const { error: uploadError } = await supabase.storage.from("photos").upload(filePath, file);
          if (uploadError) throw uploadError;

          const { data: urlData } = supabase.storage.from("photos").getPublicUrl(filePath);

          const { error: dbError } = await supabase.from("photos").insert({
            file_name: file.name,
            file_path: filePath,
            file_url: urlData.publicUrl,
            category: selectedCategory,
            alt_text: altText || file.name,
          });
          if (dbError) throw dbError;
        }

        queryClient.invalidateQueries({ queryKey: ["admin-photos"] });
        toast({ title: "Photos uploaded successfully!" });
        setAltText("");
      } catch (err: any) {
        toast({ title: "Upload failed", description: err.message, variant: "destructive" });
      } finally {
        setUploading(false);
        e.target.value = "";
      }
    },
    [selectedCategory, altText, queryClient, toast]
  );

  const copyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    toast({ title: "URL copied to clipboard!" });
    setTimeout(() => setCopiedId(null), 2000);
  };

    usePageSEO({ title: "Admin Photos" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-foreground via-foreground/95 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-4 bg-primary/10 border border-primary/20 px-5 py-2 rounded-full">
              <ImagePlus className="w-4 h-4" />
              Photo Manager
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black text-primary-foreground leading-tight">
              Photo <span className="text-primary">Library</span>
            </h1>
            <p className="text-primary-foreground/60 mt-3 text-lg max-w-xl mx-auto">
              Upload, organize, and manage all your product and brand photos in one place.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container py-12">
        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border-2 border-border rounded-3xl p-8 mb-10 shadow-xl"
        >
          <h2 className="font-display text-2xl font-black text-card-foreground mb-6 flex items-center gap-3">
            <Upload className="w-6 h-6 text-primary" />
            Upload Photos
          </h2>
          <div className="grid md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="text-sm font-bold text-muted-foreground mb-1.5 block">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="rounded-xl border-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-bold text-muted-foreground mb-1.5 block">Alt Text (optional)</label>
              <Input
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                placeholder="Describe the image"
                className="rounded-xl border-2"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-bold text-muted-foreground mb-1.5 block">Select Files</label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleUpload}
                  disabled={uploading}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <Button
                  disabled={uploading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-xl py-6 text-base shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  {uploading ? "Uploading..." : "Choose & Upload Photos"}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-8 items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-primary" />
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-44 rounded-xl border-2">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by filename..."
              className="pl-10 rounded-xl border-2"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>
          <span className="text-sm font-bold text-muted-foreground ml-auto">
            {photos.length} photo{photos.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Photo Grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square bg-muted rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : photos.length === 0 ? (
          <div className="text-center py-20">
            <ImagePlus className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-xl font-bold text-muted-foreground">No photos yet</p>
            <p className="text-sm text-muted-foreground/60 mt-1">Upload your first photo above to get started.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="group relative bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.file_url}
                    alt={photo.alt_text || photo.file_name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[0.6rem] font-black text-primary-foreground tracking-wider uppercase bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    {photo.category}
                  </span>
                </div>
                {/* Actions overlay */}
                <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => copyUrl(photo.file_url, photo.id)}
                    className="w-8 h-8 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    title="Copy URL"
                  >
                    {copiedId === photo.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => deleteMutation.mutate({ id: photo.id, file_path: photo.file_path })}
                    className="w-8 h-8 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all"
                    title="Delete"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                {/* Info */}
                <div className="p-4">
                  <p className="text-sm font-bold text-card-foreground truncate">{photo.file_name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {new Date(photo.created_at).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AdminPhotos;
