-- Create photos storage bucket (public so images can be displayed)
INSERT INTO storage.buckets (id, name, public)
VALUES ('photos', 'photos', true);

-- Allow anyone to view photos
CREATE POLICY "Photos are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'photos');

-- Allow anyone to upload photos
CREATE POLICY "Anyone can upload photos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'photos');

-- Allow anyone to delete photos
CREATE POLICY "Anyone can delete photos"
ON storage.objects FOR DELETE
USING (bucket_id = 'photos');

-- Create photos metadata table
CREATE TABLE public.photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_url TEXT NOT NULL,
  category TEXT DEFAULT 'uncategorized',
  tags TEXT[] DEFAULT '{}',
  alt_text TEXT DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.photos ENABLE ROW LEVEL SECURITY;

-- Open access policies (no auth required)
CREATE POLICY "Anyone can view photos"
ON public.photos FOR SELECT USING (true);

CREATE POLICY "Anyone can insert photos"
ON public.photos FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update photos"
ON public.photos FOR UPDATE USING (true);

CREATE POLICY "Anyone can delete photos"
ON public.photos FOR DELETE USING (true);