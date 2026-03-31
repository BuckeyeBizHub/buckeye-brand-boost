CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  business TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  services TEXT[] NOT NULL DEFAULT '{}',
  other_service TEXT,
  message TEXT NOT NULL,
  budget TEXT NOT NULL,
  timeline TEXT NOT NULL,
  referral TEXT
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert submissions"
  ON public.contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "No public reads"
  ON public.contact_submissions
  FOR SELECT
  TO public
  USING (false);