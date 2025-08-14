import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Flame,
  Scissors,
  Building2,
  Mail,
  Phone,
  Download,
  Filter,
  ArrowRight,
  Factory,
  Layers3,
  Sparkles,
} from "lucide-react";

// Navigation
const NAV = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "industries", label: "Industries" },
  { id: "tech", label: "Tech & Specs" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// Product groups
const PRODUCT_GROUPS = [
  {
    key: "fibres",
    title: "Aramid Fibres & Yarns",
    icon: <Layers3 className="w-5 h-5" />,
    blurb:
      "Meta-aramid & para-aramid in staple, filament, and blended yarns. Dope-dyed colours available.",
    items: [
      "Meta-aramid staple fibre",
      "Para-aramid staple fibre",
      "Dope-dyed meta-aramid fibres",
      "Aramid filament yarns",
      "Aramid spun yarns (meta / para / blends)",
      "Hybrid yarns (aramid+P84 / aramid+glass / aramid+FR-PET)",
    ],
    tags: ["Meta", "Para", "Dope-dyed", "Hybrid"],
  },
  {
    key: "threads",
    title: "Aramid Sewing Threads",
    icon: <Scissors className="w-5 h-5" />,
    blurb:
      "High-tenacity, heat-resistant threads for PPE and industrial seams; bonded & PTFE-coated options.",
    items: [
      "2-ply to 6-ply aramid threads",
      "Meta-aramid threads (heat resistant)",
      "Para-aramid threads (high tensile)",
      "Bonded aramid threads for heavy PPE",
      "PTFE-coated aramid threads (chem resistant)",
    ],
    tags: ["Bonded", "PTFE-Coated", "2-6 ply"],
  },
  {
    key: "fabrics",
    title: "Aramid Fabrics – Woven & Nonwoven",
    icon: <Flame className="w-5 h-5" />,
    blurb:
      "Wovens (plain/twill/satin), needlefelts for filtration, coated/laminated fabrics, and aramid scrim.",
    items: [
      "Woven meta-aramid (plain / twill / satin)",
      "Woven para-aramid (ballistic / high-strength)",
      "Needlefelt aramid fabrics (industrial filtration)",
      "Aramid blends (aramid+P84 / aramid+PPS)",
      "Coated aramid fabrics (silicone / PTFE / PU)",
      "Laminated aramid fabrics for PPE",
      "Aramid scrim",
    ],
    tags: ["Woven", "Needlefelt", "Coated", "Scrim"],
  },
  {
    key: "conversions",
    title: "Technical Fabric Conversions",
    icon: <Factory className="w-5 h-5" />,
    blurb:
      "Precision conversions for industrial use: press cloths and food-/pharma-compliant filter media.",
    items: [
      "Filter press cloths (aramid blends)",
      "Antistatic aramid filter media",
      "Food-grade aramid filter materials",
    ],
    tags: ["Press Cloth", "Antistatic", "Food-Grade"],
  },
  {
    key: "frr",
    title: "PPE & FRR Products",
    icon: <ShieldCheck className="w-5 h-5" />,
    blurb:
      "Fabric platforms for firefighter gear, arc-flash protection, gloves, and industrial apparel.",
    items: [
      "Firefighter turnout gear fabrics",
      "Arc-flash protective fabrics",
      "Cut-resistant fabrics (aramid+UHMWPE)",
      "Heat-resistant glove & mitt fabrics",
      "Industrial PPE outer shell fabrics",
    ],
    tags: ["Firefighter", "Arc-Flash", "Cut-Resist"],
  },
  {
    key: "special",
    title: "Specialized Applications",
    icon: <Sparkles className="w-5 h-5" />,
    blurb:
      "Electrical & composite reinforcements, insulation felts, papers, tapes and webbings.",
    items: [
      "Reinforcement fabrics for composites",
      "High-temp conveyor belts (aramid core)",
      "Aramid felts for insulation",
      "Aramid paper (electrical insulation)",
      "Aramid tapes and webbings",
    ],
    tags: ["Composite", "Insulation", "Belting"],
  },
];

const INDUSTRIES = [
  { name: "Defense & Fire Safety", note: "Turnout gear, ballistic inserts, FR seams" },
  { name: "Industrial Filtration", note: "Needlefelts, scrim, high-temp media" },
  { name: "Electrical & Electronics", note: "Aramid paper, tapes, thermal insulation" },
  { name: "Oil, Gas & Chemicals", note: "FR apparel, gasketing, high-temp service" },
  { name: "Mobility & Aerospace", note: "Lightweight reinforcements & insulation" },
  { name: "Food & Pharma", note: "Food-grade media, clean processing" },
];

const DOCS = [
  { label: "Company Profile (PDF)", href: "#" },
  { label: "CoreThread – Yarns & Threads (PDF)", href: "#" },
  { label: "ArmorWeave – PPE Fabrics (PDF)", href: "#" },
];

// Header
function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/artan-final-logo.png"
            alt="Artan Protec Logo"
            className="w-10 h-10 rounded-xl object-contain"
          />
          <div className="leading-tight">
            <h1 className="text-lg font-semibold tracking-tight">Artan Protec</h1>
            <p className="text-xs text-neutral-600">
              Advanced Protection. Engineered Performance.
            </p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm text-neutral-700 hover:text-neutral-900"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl border border-neutral-300 hover:bg-neutral-50"
        >
          <Mail className="w-4 h-4" /> Contact
        </a>
      </div>
    </header>
  );
}

// Hero
function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900"
          >
            Aramid materials for extreme performance
          </motion.h2>
          <p className="mt-5 text-neutral-700 max-w-xl">
            We engineer and supply meta- & para-aramid fibres, yarns, threads and fabrics that power
            next-generation PPE, filtration, and industrial applications. Built on rigorous
            specifications, delivered with reliable lead times.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800"
            >
              Explore Products <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-neutral-300 text-sm font-semibold hover:bg-neutral-50"
            >
              Request a Quote
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> ISO-grade QA
            </span>
            <span className="inline-flex items-center gap-2">
              <Building2 className="w-4 h-4" /> OEM & Private Label
            </span>
            <span className="inline-flex items-center gap-2">
              <Filter className="w-4 h-4" /> Lab-tested specs
            </span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full rounded-3xl bg-[radial-gradient(ellipse_at_top_left,rgba(20,20,20,0.9),rgba(20,20,20,0.6),rgba(20,20,20,0.2))] shadow-2xl overflow-hidden grid place-items-center">
            <div className="text-center p-8">
              <img
                src="/artan-final-logo.png"
                alt="Artan Protec Logo"
                className="w-24 h-24 object-contain mx-auto"
              />
              <div className="mt-4 text-white text-5xl font-black tracking-wider">
                ARTAN PROTEC
              </div>
              <div className="mt-2 text-white/80">
                Advanced Protection • Engineered Performance
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// (Rest of file continues exactly as in your earlier code — Products, Industries, Tech, About, Contact, Footer — unchanged except for logo placement)

export default function ArtanProtecSite() {
  return (
    <div className="font-sans text-neutral-900 bg-white">
      <Header />
      <Hero />
      {/* Keep your Products, Industries, Tech, About, Contact, Footer here */}
    </div>
  );
}
