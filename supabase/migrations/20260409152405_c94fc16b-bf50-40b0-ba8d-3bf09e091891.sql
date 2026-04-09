-- Drop overly permissive write/delete policies on photos table
DROP POLICY IF EXISTS "Anyone can insert photos" ON public.photos;
DROP POLICY IF EXISTS "Anyone can update photos" ON public.photos;
DROP POLICY IF EXISTS "Anyone can delete photos" ON public.photos;

-- Create restricted policies for authenticated users only
CREATE POLICY "Authenticated users can insert photos"
ON public.photos FOR INSERT TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update photos"
ON public.photos FOR UPDATE TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete photos"
ON public.photos FOR DELETE TO authenticated
USING (true);

-- Drop overly permissive storage policies
DROP POLICY IF EXISTS "Anyone can upload photos" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can delete photos" ON storage.objects;

-- Create restricted storage policies
CREATE POLICY "Authenticated users can upload photos"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'photos');

CREATE POLICY "Authenticated users can delete photos"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'photos');