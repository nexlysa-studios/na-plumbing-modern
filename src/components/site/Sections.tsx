import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Plus,
  Minus,
  Star,
  Wrench,
  Droplets,
  ShowerHead,
  Flame,
  Bath,
  ChefHat,
  Waves,
  ShieldCheck,
  Check,
} from "lucide-react";
import { Reveal, Stagger, staggerItem } from "./Reveal";
import { Counter } from "./Counter";
import { MagneticButton } from "./MagneticButton";
import { whatsappUrl, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "./whatsapp";
import heroImg from "@/assets/hero-plumbing.jpg";
import aboutImg from "@/assets/about-plumbing.jpg";

/* ---------------- Hero ---------------- */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40"
    >
      <FloatingShapes />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-32">
        <motion.div style={{ y, opacity }} className="lg:col-span-7">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-white/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
              </span>
              Available 24/7 across Cape Town
            </div>
          </Reveal>

          <h1 className="text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[5.25rem]">
            <TextReveal text="Cape Town's" />
            <TextReveal text="modern plumbing" delay={0.1} />
            <TextReveal text="experts." delay={0.2} />
          </h1>

          <Reveal delay={0.4}>
            <p className="mt-8 max-w-xl text-pretty text-lg text-muted-foreground sm:text-xl">
              Fast. Reliable. Honest plumbing for homes and businesses — from
              emergency call-outs to full installations.
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <MagneticButton href="#quote" variant="primary">
                Get a free quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
              <MagneticButton
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4" /> Licensed professionals
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4" /> Same-day call-outs
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4" /> Transparent pricing
              </span>
            </div>
          </Reveal>
        </motion.div>

        <motion.div
          style={{ y: yImg }}
          className="relative lg:col-span-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-square overflow-hidden rounded-[2rem] border border-hairline bg-secondary"
          >
            <img
              src={heroImg}
              alt="Premium chrome plumbing fixtures"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-hairline bg-white px-4 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-black text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <div className="font-semibold leading-tight">Fully licensed</div>
                <div className="text-muted-foreground">Guaranteed workmanship</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TextReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
        className="block"
      >
        {text}
      </motion.span>
    </span>
  );
}

function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-black/[0.03] blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-black/[0.025] blur-3xl"
      />
    </div>
  );
}

/* ---------------- Trust ---------------- */
const stats = [
  { value: 24, suffix: "/7", label: "Emergency support" },
  { value: 100, suffix: "+", label: "Happy clients" },
  { value: 15, suffix: "min", label: "Average response" },
  { value: 100, suffix: "%", label: "Licensed pros" },
];

export function Trust() {
  return (
    <section className="border-y border-hairline bg-secondary/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center lg:text-left">
            <div className="text-5xl font-semibold tracking-tight sm:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-muted-foreground sm:text-base">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
const services = [
  { icon: Flame, title: "Emergency Plumbing", desc: "Burst, blocked or flooding? We're on our way — day or night." },
  { icon: Droplets, title: "Leak Detection", desc: "Pinpoint hidden leaks without tearing your home apart." },
  { icon: Waves, title: "Blocked Drains", desc: "Fast, clean unblocking that keeps things flowing." },
  { icon: Wrench, title: "Burst Pipes", desc: "Emergency repairs and permanent fixes that hold." },
  { icon: Bath, title: "Bathroom Installations", desc: "New builds, renovations and fittings done properly." },
  { icon: ChefHat, title: "Kitchen Plumbing", desc: "Sinks, dishwashers and everything in between." },
  { icon: ShowerHead, title: "Geyser Repairs", desc: "Repairs, replacements and installations for every geyser." },
  { icon: ShieldCheck, title: "Maintenance", desc: "Scheduled check-ups that prevent tomorrow's problems." },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <Reveal>
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Services
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Everything plumbing.
              <br />
              <span className="text-muted-foreground">Handled properly.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <MagneticButton href="#quote" variant="secondary">
            Request a service
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
        </Reveal>
      </div>

      <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <motion.a
            key={s.title}
            href="#quote"
            variants={staggerItem}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-hairline bg-white p-6 transition-shadow hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)] sm:p-7"
          >
            <div>
              <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-secondary transition-colors group-hover:bg-black group-hover:text-white">
                <s.icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
            <div className="mt-8 flex items-center justify-between text-sm font-medium">
              <span>Get a quote</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </motion.a>
        ))}
      </Stagger>
    </section>
  );
}

/* ---------------- Why Choose Us ---------------- */
const reasons = [
  { n: "01", t: "Fast response times", d: "Same-day call-outs across the Cape Peninsula." },
  { n: "02", t: "Affordable pricing", d: "Honest quotes, no surprise fees, no fluff." },
  { n: "03", t: "Quality workmanship", d: "Done right the first time — guaranteed." },
  { n: "04", t: "Reliable communication", d: "We show up when we say we will." },
  { n: "05", t: "Clean & professional", d: "We leave your space tidier than we found it." },
  { n: "06", t: "Fully equipped", d: "Modern tools and vans stocked for the job." },
];

export function WhyChooseUs() {
  return (
    <section className="border-y border-hairline bg-secondary/50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Why choose us
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Plumbers you'd actually recommend.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              We treat every job — big or small — like it matters. Because it
              does.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Stagger className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {reasons.map((r) => (
              <motion.div
                key={r.n}
                variants={staggerItem}
                className="border-t border-hairline py-6"
              >
                <div className="text-xs font-medium text-muted-foreground">{r.n}</div>
                <div className="mt-2 text-xl font-semibold tracking-tight">{r.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
const steps = [
  { n: "01", t: "Contact us", d: "Call, WhatsApp or send us the details." },
  { n: "02", t: "Receive a quote", d: "Clear, honest pricing — often within the hour." },
  { n: "03", t: "Schedule a visit", d: "Pick a time that works. We'll be there." },
  { n: "04", t: "Problem solved", d: "Done cleanly, done properly, done right." },
];

export function Process() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="mb-16 max-w-2xl">
        <Reveal>
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            How it works
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Simple, from start to finish.
          </h2>
        </Reveal>
      </div>

      <Stagger className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <motion.div
            key={s.n}
            variants={staggerItem}
            className="relative bg-white p-8 sm:p-10"
          >
            <div className="text-sm font-medium text-muted-foreground">{s.n}</div>
            <div className="mt-10 text-2xl font-semibold tracking-tight sm:text-3xl">
              {s.t}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}

/* ---------------- Emergency CTA ---------------- */
export function EmergencyCTA() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-5 py-24 sm:px-8 sm:py-32 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="max-w-3xl">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            Emergency
          </div>
          <h2 className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            Need a plumber today?
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            We're standing by. Call or message us now and we'll be on the way.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-medium text-black transition-colors hover:bg-white/90"
            >
              <Phone className="h-4 w-4" />
              Call now
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-[15px] font-medium transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const testimonials = [
  { q: "Fixed a burst pipe on a Sunday night within an hour. Absolute legends.", n: "Kirsty M.", r: "Sea Point" },
  { q: "Cleanest, most professional plumbers we've ever hired. Fair pricing too.", n: "Daniel R.", r: "Claremont" },
  { q: "They tracked down a leak two others missed. Total peace of mind.", n: "Aisha P.", r: "Woodstock" },
  { q: "Installed a new geyser same day and left the space spotless.", n: "Marco S.", r: "Observatory" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  return (
    <section className="border-y border-hairline bg-secondary/50">
      <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Loved by Cape Town
          </div>
        </Reveal>
        <div className="relative min-h-[220px]">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-black text-black" />
              ))}
            </div>
            <blockquote className="mx-auto mt-8 max-w-3xl text-balance text-3xl font-medium leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              <span className="text-muted-foreground/40">“</span>
              {testimonials[i].q}
              <span className="text-muted-foreground/40">”</span>
            </blockquote>
            <div className="mt-8 text-sm text-muted-foreground">
              {testimonials[i].n} — {testimonials[i].r}
            </div>
          </motion.div>
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, k) => (
            <button
              key={k}
              aria-label={`Show testimonial ${k + 1}`}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${
                k === i ? "w-8 bg-black" : "w-1.5 bg-hairline"
              }`}
            />
          ))}
        </div>
        <AutoRotate onTick={() => setI((v) => (v + 1) % testimonials.length)} />
      </div>
    </section>
  );
}

function AutoRotate({ onTick }: { onTick: () => void }) {
  const ref = useRef(onTick);
  ref.current = onTick;
  useIntervalOnce(() => ref.current(), 5000);
  return null;
}

function useIntervalOnce(fn: () => void, ms: number) {
  const set = useRef<number | undefined>(undefined);
  if (typeof window !== "undefined" && set.current === undefined) {
    set.current = window.setInterval(fn, ms) as unknown as number;
  }
}

/* ---------------- FAQ ---------------- */
const faqs = [
  { q: "Do you offer emergency call-outs?", a: "Yes — we're available 24/7 across Cape Town for burst pipes, blocked drains, geyser failures and anything urgent." },
  { q: "What areas do you cover?", a: "The entire Cape Peninsula, from the CBD and Atlantic Seaboard to the Southern Suburbs and beyond." },
  { q: "How quickly can someone arrive?", a: "Most emergency call-outs are on-site within 30 to 60 minutes." },
  { q: "Do you provide free quotations?", a: "Absolutely. Send us the details and we'll come back with an honest, upfront quote." },
  { q: "Are you licensed and insured?", a: "Yes — every job is handled by licensed professionals and backed by our workmanship guarantee." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="mb-14 text-center">
        <Reveal>
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Questions
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Good to know.
          </h2>
        </Reveal>
      </div>
      <div className="divide-y divide-hairline border-y border-hairline">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-lg font-medium tracking-tight sm:text-xl">
                  {f.q}
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairline">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-6 pr-16 text-muted-foreground">{f.a}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
export function About() {
  return (
    <section id="about" className="border-y border-hairline bg-secondary/50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-6">
          <div className="overflow-hidden rounded-[2rem] border border-hairline">
            <img
              src={aboutImg}
              alt="NA Plumbing at work"
              width={1280}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <div className="lg:col-span-6">
          <Reveal>
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              A new kind of plumbing company.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground">
              NA Plumbing was built for people who are tired of guesswork,
              missed appointments and vague invoices. We move fast, communicate
              clearly and take pride in the work we leave behind.
            </p>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-2 gap-6">
            {[
              "Reliable service",
              "Attention to detail",
              "Customer-first",
              "Professional workmanship",
            ].map((v) => (
              <motion.div
                key={v}
                variants={staggerItem}
                className="flex items-center gap-3"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{v}</span>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Quote form ---------------- */
export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    problem: "",
    date: "",
  });

  const onChange = (k: keyof typeof state, v: string) =>
    setState((s) => ({ ...s, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi NA Plumbing,\nI'd like to request a plumbing quote.\n\nName: ${state.name}\nPhone: ${state.phone}\nEmail: ${state.email}\nAddress: ${state.address}\nService: ${state.service}\nPreferred date: ${state.date}\n\nProblem:\n${state.problem}`;
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="quote" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="mb-14 max-w-2xl">
        <Reveal>
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Get a quote
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Tell us what's going on.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground">
            We'll come back with an honest quote — usually within the hour.
          </p>
        </Reveal>
      </div>

      {sent ? (
        <SuccessCard onReset={() => setSent(false)} />
      ) : (
        <Reveal delay={0.3}>
          <form
            onSubmit={onSubmit}
            className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2"
          >
            <Field label="Name" required value={state.name} onChange={(v) => onChange("name", v)} />
            <Field label="Phone number" required type="tel" value={state.phone} onChange={(v) => onChange("phone", v)} />
            <Field label="Email" type="email" value={state.email} onChange={(v) => onChange("email", v)} />
            <Field label="Address" value={state.address} onChange={(v) => onChange("address", v)} />
            <SelectField
              label="Service needed"
              required
              value={state.service}
              onChange={(v) => onChange("service", v)}
              options={services.map((s) => s.title)}
            />
            <Field label="Preferred date" type="date" value={state.date} onChange={(v) => onChange("date", v)} />
            <div className="sm:col-span-2">
              <TextareaField
                label="Describe the problem"
                value={state.problem}
                onChange={(v) => onChange("problem", v)}
              />
            </div>
            <div className="mt-6 sm:col-span-2">
              <MagneticButton
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit(e as unknown as React.FormEvent);
                }}
                variant="primary"
                className="w-full sm:w-auto"
              >
                Request my quote
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      )}
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="group block border-b border-hairline py-4 focus-within:border-black">
      <span className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-black">*</span>}
      </span>
      <input
        required={required}
        type={type}
        value={value}
        maxLength={200}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-transparent text-lg outline-none placeholder:text-muted-foreground/50"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="group block border-b border-hairline py-4 focus-within:border-black">
      <span className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-black">*</span>}
      </span>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-transparent text-lg outline-none"
      >
        <option value="">Select a service…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="group block border-b border-hairline py-4 focus-within:border-black">
      <span className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
      <textarea
        rows={4}
        maxLength={1000}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full resize-none bg-transparent text-lg outline-none placeholder:text-muted-foreground/50"
      />
    </label>
  );
}

function SuccessCard({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-xl rounded-3xl border border-hairline bg-white p-10 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
        className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-black text-white"
      >
        <Check className="h-8 w-8" />
      </motion.div>
      <h3 className="mt-6 text-3xl font-semibold tracking-tight">Request sent.</h3>
      <p className="mt-3 text-muted-foreground">
        We've opened WhatsApp with your details. We'll be in touch shortly.
      </p>
      <button
        onClick={onReset}
        className="mt-8 text-sm font-medium underline underline-offset-4"
      >
        Send another request
      </button>
    </motion.div>
  );
}

/* ---------------- Contact ---------------- */
export function Contact() {
  return (
    <section id="contact" className="border-t border-hairline bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                Contact
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                Let's fix it.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-lg text-white/70">
                Reach us however's easiest — we reply fast.
              </p>
            </Reveal>

            <Stagger className="mt-12 space-y-6">
              <ContactRow icon={Phone} label="Phone" value={PHONE_DISPLAY} href={`tel:${PHONE_TEL}`} />
              <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactRow icon={Clock} label="Hours" value="24/7 — Emergency support always on" />
              <ContactRow icon={MapPin} label="Service areas" value="Cape Town & surrounds" />
            </Stagger>

            <Reveal delay={0.4}>
              <div className="mt-12 flex flex-wrap gap-3">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-colors hover:bg-white/90"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp now
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white/10"
                >
                  Get a quote
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <iframe
                title="Cape Town map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211895.66!2d18.42!3d-33.9249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCape%20Town!5e0!3m2!1sen!2sza!4v1700000000000"
                width="100%"
                height="520"
                loading="lazy"
                style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.9)" }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-[0.15em] text-white/50">
          {label}
        </div>
        <div className="mt-1 text-lg font-medium">{value}</div>
      </div>
    </div>
  );
  return (
    <motion.div variants={staggerItem}>
      {href ? (
        <a href={href} className="block transition-opacity hover:opacity-70">
          {inner}
        </a>
      ) : (
        inner
      )}
    </motion.div>
  );
}

/* ---------------- Footer ---------------- */
import logoAsset from "@/assets/logo.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          <a href="#home" className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="NA Plumbing Services"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </a>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#quote" className="hover:text-foreground">Get quote</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-foreground">Email</a>
            <a href={`tel:${PHONE_TEL}`} className="hover:text-foreground">Phone</a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} NA Plumbing Services. All rights reserved.</div>
          <div>Cape Town, South Africa</div>
        </div>
      </div>
    </footer>
  );
}