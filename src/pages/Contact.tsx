import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Sparkles, Send, CheckCircle, Zap, Clock, Star } from "lucide-react";
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

      {/* Hero — massive & dramatic */}
      <section className="relative pt-40 pb-28 lg:pt-52 lg:pb-36 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(0,55%,6%)] to-[hsl(220,30%,2%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1200px] h-[1200px] rounded-full bg-primary/[0.18] blur-[220px]" />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[700px] h-[500px] rounded-full bg-ohio-red-glow/[0.12] blur-[140px]" />
        </div>
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.08] blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_40px_hsl(0_80%_42%/0.6)]" />

        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2.5 text-xs font-extrabold text-primary tracking-[0.35em] uppercase mb-10 bg-primary/[0.15] px-7 py-3 rounded-full border border-primary/35 shadow-[0_0_40px_hsl(0_80%_42%/0.2)]"
          >
            <Sparkles className="w-4 h-4" />
            Get Your Free Quote
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-primary-foreground leading-[0.88] mb-10"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.9)' }}
          >
            Let's Build Your{" "}
            <br className="hidden md:block" />
            Brand{" "}
            <span className="text-primary text-glow-red relative">
              Together
              <motion.span
                className="absolute -bottom-3 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-ohio-red-glow to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/50 max-w-3xl mx-auto font-semibold italic font-display"
          >
            Rooted in Ohio. Built to Grow Your Business.
          </motion.p>

          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-16 grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto"
          >
            {[
              { icon: Mail, label: "Email", value: "david@buckeyebizhub.com", href: "mailto:david@buckeyebizhub.com" },
              { icon: Phone, label: "Phone", value: "614-561-3358", href: "tel:6145613358" },
              { icon: MapPin, label: "Location", value: "Columbus, Ohio", href: undefined },
            ].map((item) => {
              const Wrapper = item.href ? "a" : "div";
              return (
                <Wrapper
                  key={item.label}
                  {...(item.href ? { href: item.href } : {})}
                  className="group bg-primary-foreground/[0.04] backdrop-blur-sm border border-primary-foreground/[0.08] hover:border-primary/30 rounded-2xl p-6 text-center transition-all duration-400 hover:bg-primary-foreground/[0.07] hover:shadow-[0_0_35px_hsl(0_80%_42%/0.12)]"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/[0.12] group-hover:bg-primary/[0.2] flex items-center justify-center transition-all duration-400 group-hover:shadow-[0_0_30px_hsl(0_80%_42%/0.25)]">
                    <item.icon className="w-6 h-6 text-primary transition-transform duration-400 group-hover:scale-110" />
                  </div>
                  <div className="text-[0.6rem] font-extrabold uppercase tracking-[0.25em] text-primary-foreground/30 mb-1">{item.label}</div>
                  <div className="font-bold text-sm text-primary-foreground/75 group-hover:text-primary transition-colors">{item.value}</div>
                </Wrapper>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Form Section — two-column layout */}
      <section className="py-28 lg:py-40 bg-ohio-grey-light relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px] bg-primary/[0.05] rounded-full blur-[170px]" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[700px] h-[700px] bg-primary/[0.05] rounded-full blur-[170px]" />

        <div className="container relative">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">
            {/* Left sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-10 lg:sticky lg:top-32"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-5 bg-primary/[0.08] px-5 py-2 rounded-full border border-primary/15">
                  <Star className="w-3.5 h-3.5 fill-primary" />
                  Free Quote
                </span>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[0.92] mb-5">
                  Get Your{" "}
                  <span className="text-primary">Free Quote</span>
                </h2>
                <div className="w-28 h-[5px] rounded-full bg-gradient-to-r from-primary via-ohio-red-glow to-ohio-red-light shadow-[0_0_15px_hsl(0_80%_42%/0.3)] mb-6" />
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Tell us about your project and we'll get back to you with a custom quote — fast.
                </p>
              </div>

              {/* Trust badges */}
              <div className="space-y-5">
                {[
                  { icon: Clock, text: "24-hour quote turnaround" },
                  { icon: Zap, text: "500+ Ohio businesses served" },
                  { icon: Star, text: "Premium quality guaranteed" },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center shrink-0 group-hover:bg-primary/[0.15] transition-colors">
                      <badge.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-bold text-foreground/80 text-sm">{badge.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-3xl border-2 border-primary/15 p-14 lg:p-20 text-center shadow-[0_25px_80px_rgba(0,0,0,0.1)]"
              >
                <div className="w-28 h-28 mx-auto mb-10 rounded-full bg-primary/[0.1] flex items-center justify-center shadow-[0_0_40px_hsl(0_80%_42%/0.15)]">
                  <CheckCircle className="w-14 h-14 text-primary" />
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-black text-foreground mb-5">Quote Request Sent!</h3>
                <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10 leading-relaxed">
                  Thanks for reaching out. We'll review your project details and get back to you within <span className="font-bold text-primary">24 hours</span>.
                </p>
                <Button
                  onClick={() => { setSubmitted(false); setForm({ name: "", business: "", email: "", phone: "", projectType: "", message: "" }); }}
                  variant="outline"
                  size="lg"
                  className="font-bold text-lg px-10 py-7 rounded-xl border-primary/30 hover:border-primary hover:text-primary"
                >
                  Submit Another Request
                </Button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                onSubmit={handleSubmit}
                className="bg-card rounded-3xl border-2 border-border hover:border-primary/15 transition-colors duration-500 p-8 md:p-12 lg:p-14 shadow-[0_25px_80px_rgba(0,0,0,0.1)] space-y-8 relative overflow-hidden"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-primary to-transparent" />

                {/* Name + Business */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-foreground/60">Name *</label>
                    <Input
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your full name"
                      className={`h-14 text-base rounded-xl border-2 bg-background focus:border-primary focus:shadow-[0_0_15px_hsl(0_80%_42%/0.1)] transition-all ${errors.name ? "border-destructive" : "border-border"}`}
                    />
                    {errors.name && <p className="text-destructive text-xs font-bold">{errors.name}</p>}
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-foreground/60">Business Name</label>
                    <Input
                      value={form.business}
                      onChange={(e) => update("business", e.target.value)}
                      placeholder="Your business name"
                      className="h-14 text-base rounded-xl border-2 border-border bg-background focus:border-primary focus:shadow-[0_0_15px_hsl(0_80%_42%/0.1)] transition-all"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-foreground/60">Email *</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@business.com"
                      className={`h-14 text-base rounded-xl border-2 bg-background focus:border-primary focus:shadow-[0_0_15px_hsl(0_80%_42%/0.1)] transition-all ${errors.email ? "border-destructive" : "border-border"}`}
                    />
                    {errors.email && <p className="text-destructive text-xs font-bold">{errors.email}</p>}
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-foreground/60">Phone</label>
                    <Input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="(614) 555-0000"
                      className="h-14 text-base rounded-xl border-2 border-border bg-background focus:border-primary focus:shadow-[0_0_15px_hsl(0_80%_42%/0.1)] transition-all"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-2.5">
                  <label className="text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-foreground/60">Project Type *</label>
                  <Select value={form.projectType} onValueChange={(v) => update("projectType", v)}>
                    <SelectTrigger className={`h-14 text-base rounded-xl border-2 bg-background focus:border-primary transition-all ${errors.projectType ? "border-destructive" : "border-border"}`}>
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
                <div className="space-y-2.5">
                  <label className="text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-foreground/60">Message / Project Details *</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your project — quantities, timeline, design ideas, etc."
                    rows={6}
                    className={`text-base rounded-xl border-2 bg-background focus:border-primary focus:shadow-[0_0_15px_hsl(0_80%_42%/0.1)] transition-all resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                  />
                  {errors.message && <p className="text-destructive text-xs font-bold">{errors.message}</p>}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-xl py-8 rounded-xl shadow-[0_0_35px_hsl(0_80%_42%/0.4)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.6)] transition-all duration-300 group uppercase tracking-widest"
                  style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
                >
                  <Send className="w-6 h-6" />
                  Submit Quote Request
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>

                <p className="text-center text-muted-foreground text-sm font-medium">
                  We respond to every quote request within <span className="font-black text-primary">24 hours</span>.
                </p>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      {/* Location CTA — bold red section */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,92%,33%)] via-primary to-[hsl(0,78%,28%)]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-primary-foreground/[0.1] flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              <MapPin className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary-foreground leading-[0.9]"
              style={{ textShadow: '0 0 60px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.5)' }}
            >
              Proudly Serving{" "}
              <br className="hidden md:block" />
              Ohio
            </h3>
            <p className="text-xl md:text-2xl text-primary-foreground/60 max-w-2xl mx-auto font-medium leading-relaxed">
              Based in Columbus, Ohio — we serve businesses across the entire Buckeye State with premium printing, promotional products, and vehicle branding.
            </p>
            <div className="w-24 h-[4px] rounded-full bg-primary-foreground/20 mx-auto" />
            <p className="text-primary-foreground/40 font-semibold italic font-display text-lg">
              Rooted in Ohio. Built to Grow Your Business.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
