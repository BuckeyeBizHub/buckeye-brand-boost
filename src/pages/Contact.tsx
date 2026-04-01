import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Send, CheckCircle, Clock, ShieldCheck, BadgeCheck, ThumbsUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import pricingHero from "@/assets/pricing-hero.jpg";
import { usePageTitle } from "@/hooks/usePageTitle";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100),
  business: z.string().trim().min(1, "Business name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  otherService: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Please describe your project").max(2000),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  referral: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const serviceOptions = [
  "Vehicle Wraps & Fleet Branding",
  "Branded Apparel & Promo Products",
  "Signage & Yard Signs",
  "Business Printing & Brochures",
  "Full Rebrand Kit",
  "Other (please describe)",
];

const budgetOptions = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $3,000",
  "$3,000 – $5,000",
  "$5,000+",
  "Not sure yet (we'll help you figure it out)",
];

const timelineOptions = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 30 days",
  "Within 60 days",
  "Flexible",
];

const referralOptions = [
  "Google",
  "Referral",
  "Instagram",
  "Facebook",
  "Previous customer",
  "Other",
];

const heroBadges = [
  { icon: ShieldCheck, label: "No Hidden Fees" },
  { icon: BadgeCheck, label: "No Setup Fees on Most Orders" },
  { icon: ThumbsUp, label: "100% Satisfaction Guaranteed" },
];

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [form, setForm] = useState<ContactForm>({
    name: "",
    business: "",
    email: "",
    phone: "",
    services: [],
    otherService: "",
    message: "",
    budget: "",
    timeline: "",
    referral: "",
  });

  const update = (field: keyof ContactForm, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const toggleService = (service: string) => {
    setForm((f) => {
      const services = f.services.includes(service)
        ? f.services.filter((s) => s !== service)
        : [...f.services, service];
      return { ...f, services };
    });
    if (errors.services) setErrors((e) => ({ ...e, services: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    setSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: form.name,
          business: form.business,
          email: form.email,
          phone: form.phone,
          services: form.services,
          otherService: form.otherService,
          message: form.message,
          budget: form.budget,
          timeline: form.timeline,
          referral: form.referral,
        },
      });

      if (error) throw error;

      setSubmitted(true);
      toast({ title: "Quote request sent!", description: "We'll get back to you within 24 hours." });
    } catch (err) {
      console.error("Submit error:", err);
      toast({ title: "Something went wrong", description: "Please try again or call us at (614) 561-3358.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

    usePageTitle("Contact Us - Get Your Free 24-Hour Quote");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero — matching pricing page style */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pricingHero}
            alt="Branded Ohio vehicles, apparel, signage and promotional products"
            className="w-full h-full object-cover"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ohio-navy/80 via-[hsl(220,55%,12%,0.75)] to-[hsl(220,25%,5%,0.92)]" />
        </div>

        <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="bg-ohio-navy/40 backdrop-blur-md border border-primary-foreground/10 rounded-3xl px-8 py-12 md:px-14 md:py-16 max-w-4xl mx-auto shadow-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-primary-foreground mb-8 leading-[0.9]"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6), 0 0 60px rgba(0,0,0,0.3)" }}
            >
              Let's Bring Your Ohio Business to{" "}
              <span className="text-primary">Life</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-lg md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-10 font-semibold tracking-wide"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
            >
              24-Hour Quotes • Full Pricing Transparency Up Front • All Fees Known at Quote • Nothing Ever Hidden
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {heroBadges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground"
                >
                  <b.icon className="w-4 h-4 text-primary" />
                  {b.label}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <a href="#quote-form">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl px-12 py-8 rounded-2xl shadow-[0_0_50px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.6)] group uppercase tracking-wider transition-all duration-300"
                >
                  Tell Us About Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expanded Quote Form */}
      <section id="quote-form" className="py-20 lg:py-28 bg-ohio-cream relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[170px]" />

        <div className="container relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">24-Hour Response Guarantee</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Tell Us About Your Project
            </h2>
            <p className="text-muted-foreground text-lg mt-3 max-w-2xl mx-auto">
              We'll reply with a custom quote in 24 hours — no obligation, no pressure.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-background rounded-3xl border-2 border-primary/15 p-14 lg:p-20 text-center shadow-xl"
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4">Quote Request Sent!</h3>
              <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8 leading-relaxed">
                Thanks for reaching out. We'll review your project details and get back to you within <span className="font-bold text-primary">24 hours</span>.
              </p>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", business: "", email: "", phone: "", services: [], otherService: "", message: "", budget: "", timeline: "", referral: "" });
                }}
                variant="outline"
                size="lg"
                className="font-bold text-lg px-10 py-7 rounded-xl border-primary/30 hover:border-primary hover:text-primary"
              >
                Submit Another Request
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onSubmit={handleSubmit}
              className="bg-background rounded-3xl border border-border p-8 md:p-12 shadow-xl space-y-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-ohio-red-light to-primary" />

              {/* Name + Business */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">Full Name *</label>
                  <Input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your full name"
                    className={`h-13 text-base rounded-xl border-2 bg-background focus:border-primary transition-all ${errors.name ? "border-destructive" : "border-border"}`}
                  />
                  {errors.name && <p className="text-destructive text-xs font-bold">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">Business / Company Name *</label>
                  <Input
                    value={form.business}
                    onChange={(e) => update("business", e.target.value)}
                    placeholder="Your business name"
                    className={`h-13 text-base rounded-xl border-2 bg-background focus:border-primary transition-all ${errors.business ? "border-destructive" : "border-border"}`}
                  />
                  {errors.business && <p className="text-destructive text-xs font-bold">{errors.business}</p>}
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">Email Address *</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@business.com"
                    className={`h-13 text-base rounded-xl border-2 bg-background focus:border-primary transition-all ${errors.email ? "border-destructive" : "border-border"}`}
                  />
                  {errors.email && <p className="text-destructive text-xs font-bold">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">Phone Number *</label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="(614) 555-0000"
                    className={`h-13 text-base rounded-xl border-2 bg-background focus:border-primary transition-all ${errors.phone ? "border-destructive" : "border-border"}`}
                  />
                  {errors.phone && <p className="text-destructive text-xs font-bold">{errors.phone}</p>}
                </div>
              </div>

              {/* Services Checkboxes */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">Services Interested In *</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {serviceOptions.map((service) => (
                    <label
                      key={service}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        form.services.includes(service)
                          ? "border-primary bg-primary/5"
                          : "border-border bg-background hover:border-primary/30"
                      }`}
                    >
                      <Checkbox
                        checked={form.services.includes(service)}
                        onCheckedChange={() => toggleService(service)}
                        className="border-2"
                      />
                      <span className="text-sm font-medium text-foreground">{service}</span>
                    </label>
                  ))}
                </div>
                {errors.services && <p className="text-destructive text-xs font-bold">{errors.services}</p>}
              </div>

              {/* Other service description */}
              {form.services.includes("Other (please describe)") && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">Describe Other Service</label>
                  <Input
                    value={form.otherService}
                    onChange={(e) => update("otherService", e.target.value)}
                    placeholder="Tell us what you need..."
                    className="h-13 text-base rounded-xl border-2 border-border bg-background focus:border-primary transition-all"
                  />
                </div>
              )}

              {/* Project Description */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">Project Description / Needs *</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us about your project — quantities, design ideas, specific needs, etc. The more detail, the faster and more accurate your quote will be."
                  rows={5}
                  className={`text-base rounded-xl border-2 bg-background focus:border-primary transition-all resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                />
                {errors.message && <p className="text-destructive text-xs font-bold">{errors.message}</p>}
              </div>

              {/* Budget + Timeline */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">Approximate Budget *</label>
                  <Select value={form.budget} onValueChange={(v) => update("budget", v)}>
                    <SelectTrigger className={`h-13 text-base rounded-xl border-2 bg-background transition-all ${errors.budget ? "border-destructive" : "border-border"}`}>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.budget && <p className="text-destructive text-xs font-bold">{errors.budget}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">Desired Timeline *</label>
                  <Select value={form.timeline} onValueChange={(v) => update("timeline", v)}>
                    <SelectTrigger className={`h-13 text-base rounded-xl border-2 bg-background transition-all ${errors.timeline ? "border-destructive" : "border-border"}`}>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelineOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.timeline && <p className="text-destructive text-xs font-bold">{errors.timeline}</p>}
                </div>
              </div>

              {/* Referral (optional) */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">How Did You Hear About Us? <span className="text-muted-foreground">(optional)</span></label>
                <Select value={form.referral} onValueChange={(v) => update("referral", v)}>
                  <SelectTrigger className="h-13 text-base rounded-xl border-2 border-border bg-background transition-all">
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent>
                    {referralOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-lg sm:text-xl py-8 rounded-2xl shadow-[0_0_40px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_70px_hsl(0_80%_42%/0.6)] transition-all duration-300 group uppercase tracking-wider disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Get My 24-Hour Custom Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <p className="text-center text-muted-foreground text-sm font-medium pt-2">
                Your information is safe with us • We reply to every inquiry within 24 hours • Ohio-owned & operated
              </p>
            </motion.form>
          )}
        </div>
      </section>

      {/* Prefer to Call or Email */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-8">
              Prefer to Call or Email Instead?
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="tel:6145613358"
                className="group flex items-center justify-center gap-4 bg-ohio-cream border-2 border-border hover:border-primary/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Call Us</p>
                  <p className="text-xl font-black text-foreground group-hover:text-primary transition-colors">614-561-3358</p>
                </div>
              </a>
              <a
                href="mailto:david@buckeyebizhub.com"
                className="group flex items-center justify-center gap-4 bg-ohio-cream border-2 border-border hover:border-primary/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                  <p className="text-lg font-black text-foreground group-hover:text-primary transition-colors">david@buckeyebizhub.com</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-ohio-navy">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-primary-foreground/60 text-sm font-medium">
            {[
              "35+ Ohio Companies Helped",
              "$1.3 Million+ Saved",
              "100% Satisfaction Guaranteed",
              "Columbus, Ohio",
            ].map((item, idx) => (
              <span key={item} className="flex items-center gap-2">
                {idx > 0 && <span className="hidden sm:inline text-primary-foreground/20">•</span>}
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
