import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Sparkles, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  business: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional(),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().trim().min(1, "Please describe your project").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [form, setForm] = useState<ContactForm>({
    name: "",
    business: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const update = (field: keyof ContactForm, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast({ title: "Quote request sent!", description: "We'll get back to you within 24 hours." });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(0,50%,7%)] to-[hsl(220,30%,2%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1100px] h-[1100px] rounded-full bg-primary/[0.15] blur-[200px]" />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[400px] rounded-full bg-ohio-red-glow/[0.1] blur-[120px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_hsl(0_80%_42%/0.5)]" />

        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30 shadow-[0_0_30px_hsl(0_80%_42%/0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Get in Touch
            <Sparkles className="w-3.5 h-3.5" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] font-black text-primary-foreground leading-[0.9] mb-8"
            style={{ textShadow: '0 0 60px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.8)' }}
          >
            Let's Build Your{" "}
            <br className="hidden md:block" />
            Brand{" "}
            <span className="text-primary text-glow-red">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-primary-foreground/50 max-w-3xl mx-auto font-semibold italic font-display"
          >
            Rooted in Ohio. Built to Grow Your Business.
          </motion.p>

          {/* Contact info strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-6 sm:gap-12"
          >
            <a href="mailto:david@buckeyebizhub.com" className="inline-flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/[0.12] group-hover:bg-primary/[0.2] flex items-center justify-center transition-all shadow-[0_0_0_hsl(0_80%_42%/0)] group-hover:shadow-[0_0_25px_hsl(0_80%_42%/0.2)]">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary-foreground/35">Email</div>
                <div className="font-bold text-sm">david@buckeyebizhub.com</div>
              </div>
            </a>
            <a href="tel:6145613358" className="inline-flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/[0.12] group-hover:bg-primary/[0.2] flex items-center justify-center transition-all shadow-[0_0_0_hsl(0_80%_42%/0)] group-hover:shadow-[0_0_25px_hsl(0_80%_42%/0.2)]">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary-foreground/35">Phone</div>
                <div className="font-bold text-sm">614-561-3358</div>
              </div>
            </a>
            <div className="inline-flex items-center gap-3 text-primary-foreground/70">
              <div className="w-12 h-12 rounded-xl bg-primary/[0.12] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary-foreground/35">Location</div>
                <div className="font-bold text-sm">Columbus, Ohio</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 lg:py-36 bg-ohio-grey-light relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[150px]" />

        <div className="container relative max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4 bg-primary/[0.08] px-4 py-1.5 rounded-full">
              Free Quote
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              Get Your{" "}
              <span className="text-primary relative">
                Free Quote
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-full" />
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mt-5 max-w-xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours with a custom quote.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-3xl border border-border p-14 lg:p-20 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/[0.1] flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4">Quote Request Sent!</h3>
              <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
                Thanks for reaching out. We'll review your project details and get back to you within 24 hours.
              </p>
              <Button
                onClick={() => { setSubmitted(false); setForm({ name: "", business: "", email: "", phone: "", projectType: "", message: "" }); }}
                variant="outline"
                className="font-bold border-primary/30 hover:border-primary hover:text-primary"
              >
                Submit Another Request
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl border border-border p-8 md:p-12 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.08)] space-y-7"
            >
              {/* Name + Business */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/70">Name *</label>
                  <Input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your full name"
                    className={`h-13 text-base rounded-xl border-2 bg-background focus:border-primary transition-colors ${errors.name ? "border-destructive" : "border-border"}`}
                  />
                  {errors.name && <p className="text-destructive text-xs font-bold">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/70">Business Name</label>
                  <Input
                    value={form.business}
                    onChange={(e) => update("business", e.target.value)}
                    placeholder="Your business name"
                    className="h-13 text-base rounded-xl border-2 border-border bg-background focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/70">Email *</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@business.com"
                    className={`h-13 text-base rounded-xl border-2 bg-background focus:border-primary transition-colors ${errors.email ? "border-destructive" : "border-border"}`}
                  />
                  {errors.email && <p className="text-destructive text-xs font-bold">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/70">Phone</label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="(614) 555-0000"
                    className="h-13 text-base rounded-xl border-2 border-border bg-background focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/70">Project Type *</label>
                <Select value={form.projectType} onValueChange={(v) => update("projectType", v)}>
                  <SelectTrigger className={`h-13 text-base rounded-xl border-2 bg-background focus:border-primary transition-colors ${errors.projectType ? "border-destructive" : "border-border"}`}>
                    <SelectValue placeholder="What do you need?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="business-printing">Business Printing</SelectItem>
                    <SelectItem value="promotional-products">Promotional Products</SelectItem>
                    <SelectItem value="vehicle-branding">Vehicle Branding</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.projectType && <p className="text-destructive text-xs font-bold">{errors.projectType}</p>}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/70">Message / Project Details *</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us about your project — quantities, timeline, design ideas, etc."
                  rows={5}
                  className={`text-base rounded-xl border-2 bg-background focus:border-primary transition-colors resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                />
                {errors.message && <p className="text-destructive text-xs font-bold">{errors.message}</p>}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg py-7 rounded-xl shadow-[0_0_30px_hsl(0_80%_42%/0.35)] hover:shadow-[0_0_55px_hsl(0_80%_42%/0.55)] transition-all duration-300 group uppercase tracking-wider"
              >
                <Send className="w-5 h-5" />
                Submit Quote Request
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Button>

              <p className="text-center text-muted-foreground text-sm">
                We respond to every quote request within <span className="font-bold text-primary">24 hours</span>.
              </p>
            </motion.form>
          )}
        </div>
      </section>

      {/* Location strip */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,5%)] via-[hsl(0,30%,6%)] to-[hsl(220,25%,5%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[150px]" />
        </div>

        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <MapPin className="w-10 h-10 text-primary mx-auto" />
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground" style={{ textShadow: '0 0 30px rgba(255,255,255,0.1)' }}>
              Proudly Serving Ohio
            </h3>
            <p className="text-primary-foreground/45 text-lg max-w-xl mx-auto font-medium">
              Based in Columbus, Ohio — we serve businesses across the entire Buckeye State with premium printing, promotional products, and vehicle branding.
            </p>
            <div className="w-20 h-[4px] rounded-full bg-gradient-to-r from-primary via-ohio-red-glow to-ohio-red-light mx-auto shadow-[0_0_15px_hsl(0_80%_42%/0.3)]" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
