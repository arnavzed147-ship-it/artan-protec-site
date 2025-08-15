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

// ────────────────────────────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────────────────────────────
const NAV = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "industries", label: "Industries" },
  { id: "tech", label: "Tech & Specs" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

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

// ────────────────────────────────────────────────────────────────────────────────
// Components
// ────────────────────────────────────────────────────────────────────────────────
function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/artan-final-logo.png"
            alt="Artan Protec Logo"
            className="h-9 w-auto"
            onError={(e) => (e.currentTarget.style.display = "none")}
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
          <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/artan-final-logo.png"
              alt="Artan Protec Branding"
              className="w-full h-full object-contain bg-neutral-900 p-10"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ group }) {
  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white grid place-items-center">
          {group.icon}
        </div>
        <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-700">{group.blurb}</p>
      <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
        {group.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.tags.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs border border-neutral-200"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Products() {
  return (
    <section id="products" className="bg-neutral-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Products</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_GROUPS.map((g) => (
            <ProductCard key={g.key} group={g} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Industries We Serve</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((i) => (
            <div key={i.name} className="rounded-2xl border border-neutral-200 p-5 bg-white">
              <div className="text-base font-semibold">{i.name}</div>
              <div className="text-sm text-neutral-600 mt-1">{i.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tech() {
  return (
    <section id="tech" className="bg-neutral-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Tech & Specs</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Performance Standards</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 space-y-2">
              <li>Yarn & thread tensile per internal spec sheet; heat resistance verified by TG/DSC.</li>
              <li>Fabric LOI and char length benchmarks for FRR applications.</li>
              <li>Needlefelt basis weight, air permeability, and burst strength for filtration media.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Custom Development</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 space-y-2">
              <li>Private‑label colourways (dope‑dyed meta‑aramid).</li>
              <li>Hybrid constructions (aramid+P84 / aramid+glass) for niche performance.</li>
              <li>Coatings & laminations (PTFE / silicone / PU) for chemical and thermal duty.</li>
            </ul>
          </div>
        </div>
        <div id="docs" className="mt-8">
          <h3 className="text-lg font-semibold">Downloads</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {DOCS.map((d) => (
              <a
                key={d.label}
                href={d.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 text-sm"
              >
                <Download className="w-4 h-4" /> {d.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-900 text-white p-8">
          <div className="text-white/80 text-sm">Brand Story</div>
          <div className="text-3xl font-extrabold mt-2">Purpose‑built aramid platforms</div>
          <p className="mt-3 text-white/80">
            Artan Protec is a focused materials brand delivering advanced aramid solutions to critical
            industries. From fibre to finished fabric platforms, we obsess over performance, reliability, and
            supply assurance.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Why Artan Protec</h3>
          <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 space-y-2">
            <li>Integrated value chain: fibres → yarns → threads → fabrics.</li>
            <li>Flexible manufacturing partners + in‑house finishing windows.</li>
            <li>Application engineering support for PPE and filtration programs.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-neutral-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Contact</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <form className="rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="Name"
                className="px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
              <input
                placeholder="Company"
                className="px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 sm:col-span-2"
              />
              <select className="px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900">
                <option>General Inquiry</option>
                <option>Request a Quote</option>
                <option>Private Label</option>
                <option>Technical Support</option>
              </select>
              <textarea
                rows={4}
                placeholder="Message"
                className="px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 sm:col-span-2"
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800"
            >
              Send Message <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-3 text-xs text-neutral-500">
              By submitting, you agree to our terms and privacy.
            </p>
          </form>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="text-sm text-neutral-600">Reach us directly</div>
            <div className="mt-2 text-lg font-semibold">artanprotec@gmail.com</div>
            <div className="mt-1 inline-flex items-center gap-2 text-neutral-700">
              <Phone className="w-4 h-4" /> +1 470 445 0578
            </div>
            <div className="mt-6 text-sm text-neutral-600">HQ</div>
            <div className="text-neutral-800">Mumbai, India</div>
            <div className="mt-6 text-sm text-neutral-600">Business Hours</div>
            <div className="text-neutral-800">Mon–Fri, 9:00–18:00 IST</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src="/artan-final-logo.png"
            alt="Artan Protec Logo"
            className="h-9 w-auto"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div>
            <div className="font-semibold">Artan Protec</div>
            <div className="text-xs text-neutral-600">
              Advanced Protection. Engineered Performance.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-1 text-neutral-600">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#industries">Industries</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Products</div>
            <ul className="mt-2 space-y-1 text-neutral-600">
              {PRODUCT_GROUPS.slice(0, 4).map((g) => (
                <li key={g.key}>
                  <a href="#products">{g.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold">Resources</div>
            <ul className="mt-2 space-y-1 text-neutral-600">
              {DOCS.map((d) => (
                <li key={d.label}>
                  <a href="#docs">{d.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 space-y-1 text-neutral-600">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-neutral-500">
          © {new Date().getFullYear()} Artan Protec. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// App (Default Export)
// ────────────────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="font-sans text-neutral-900 bg-white">
      <Header />
      <Hero />
      <Products />
      <Industries />
      <Tech />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

