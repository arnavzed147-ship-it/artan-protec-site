import React from "react";
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
  Globe2,
  CheckCircle2,
  Box,
  PackageSearch,
  Hammer,
  Wand2,
  Link as LinkIcon,
} from "lucide-react";

// ------------------------------------------------------------
// ARTAN PROTEC — Single‑file React site (no framer‑motion)
// TailwindCSS required. Uses lucide-react icons only.
// Drop this file in src/App.jsx of a Vite/CRA project.
// ------------------------------------------------------------

const Section = ({ id, eyebrow, title, lead, children, icon: Icon }) => (
  <section id={id} className="py-20 border-b border-gray-200" aria-label={title}>
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-start gap-4 mb-8">
        {Icon && (
          <div className="shrink-0 rounded-2xl p-3 bg-gray-100">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
        )}
        <div>
          {eyebrow && (
            <p className="text-sm uppercase tracking-widest text-gray-500">{eyebrow}</p>
          )}
          <h2 className="text-2xl md:text-4xl font-bold mt-1">{title}</h2>
          {lead && <p className="text-gray-600 mt-3 max-w-3xl">{lead}</p>}
        </div>
      </div>
      {children}
    </div>
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-sm text-gray-700">
    <CheckCircle2 className="h-4 w-4" /> {children}
  </span>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow p-6 h-full">
    {children}
  </div>
);

const Pill = ({ children }) => (
  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">{children}</span>
);

export default function App() {
  const nav = [
    { href: "#about", label: "About" },
    { href: "#catalog", label: "Catalog" },
    { href: "#coatings", label: "Ecotex" },
    { href: "#filters", label: "Masturlal" },
    { href: "#metal", label: "Green Ekotech" },
    { href: "#artan", label: "Artan Protec" },
    { href: "#markets", label: "Markets" },
    { href: "#contact", label: "Contact" },
  ];

  const masturlalCategories = [
    {
      title: "Dry Filtration (Baghouse)",
      points: [
        "Pulse‑Jet, RABH, Reverse Air",
        "Polyester, PPS, Aramid, P84®, Fiberglass",
        "Cage compatibility: 10–24 wire, Venturi options",
      ],
    },
    {
      title: "High‑Temperature Bags",
      points: [
        "PPS / Aramid / P84® / Fiberglass laminates",
        "Anti‑static, PTFE membrane, ePTFE sewing thread",
        "Thermal, chemical, hydrolysis resistance",
      ],
    },
    {
      title: "Gas Turbine Filters",
      points: [
        "Inlet Air Filters",
        "Panel Pre‑Filters",
        "V‑Type High‑Capacity Stage",
        "EPA‑grade Final Filters",
      ],
    },
    {
      title: "Liquid Filter Bags",
      points: [
        "PP/PE felt, monofilament mesh",
        "Ring types: steel, plastic, snap‑fit",
        "Micron ratings 1–1000 μm",
      ],
    },
    {
      title: "Cartridge Filters",
      points: [
        "Pleated, spun‑bonded, melt‑blown",
        "DOE / SOE end caps, custom lengths",
        "Food/pharma and general industrial",
      ],
    },
    {
      title: "HVAC Filters",
      points: [
        "G1–F9 grades",
        "Panel, pocket, box, V‑bank",
        "Low ΔP media, rigid frames",
      ],
    },
    {
      title: "HEPA/ULPA",
      points: [
        "H13–U16",
        "Gel seal, mini‑pleat",
        "Cleanroom applications",
      ],
    },
    {
      title: "Process & Compressed Air/Gas",
      points: [
        "Coalescers, particulate, oil vapor removal",
        "Aluminum/stainless housings (via Green Ekotech)",
        "ISO 8573 compliance support",
      ],
    },
  ];

  const ecotexVerticals = [
    { title: "Mobility", items: ["Automotive", "Railways", "Aerospace"] },
    { title: "Infrastructure & Energy", items: ["Renewables", "Power", "Switchgear"] },
    { title: "Heavy Industry", items: ["Marine", "Agriculture", "Chemical", "Structural"] },
    { title: "Clean Tech", items: ["HVAC", "Cleanrooms", "Architectural"] },
    { title: "Food Processing Machinery", items: ["OEM & MRO"] },
    { title: "Defense & Fire Safety", items: ["Equipment & Components"] },
  ];

  const metalScope = [
    {
      title: "Filter Housings",
      points: ["Liquid, gas, compressed air", "Multi‑cartridge / bag housings", "Code stamping support"],
    },
    {
      title: "Filter Cages & Venturis",
      points: ["MS (epoxy coated), GI, SS304/316", "10–24 wire, custom collar & venturi", "Per‑kg pricing model available"],
    },
    {
      title: "Custom Metal Assemblies",
      points: ["Laser, bending, welding, finishing", "Jigs/fixtures for filtration systems", "Powder‑coated aluminum panels (construction)"],
    },
  ];

  const artanScope = [
    {
      title: "CoreThread — Aramid Yarn & Thread",
      points: ["Meta & para‑aramid yarns, threads, sewing solutions", "Staple‑based and filament (where applicable)", "Heat/FR, cut & abrasion resistance"],
    },
    {
      title: "ArmorWeave — FRR & PPE Fabrics",
      points: ["FR meta‑aramid and blends", "Dope‑dyed options available", "For coveralls, hoods, gloves, gear"],
    },
    {
      title: "PPE Gear",
      points: ["Industrial protective apparel", "Defense & firefighter jacket programs (phased)", "Compliance and testing guidance"],
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            {/* Replace src with your actual logo file path */}
            <img src="/artan-protec-logo.png" alt="Artan Protec logo" className="h-8 w-auto" />
            <div className="leading-tight">
              <p className="font-bold">Artan Protec</p>
              <p className="text-xs text-gray-500">Advanced Protection | Engineered Performance</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-gray-700">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-4">
              <Sparkles className="h-4 w-4" /> Group Solutions Across Filtration, Coatings & Advanced Textiles
            </div>
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
              Advanced Protection <span className="text-gray-400">|</span> Engineered Performance
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Under the Masturlal umbrella: <strong>Masturlal Fabrichem</strong> (filters), <strong>Green Ekotech</strong> (metal & housings), <strong>Ecotex</strong> (industrial coatings), and <strong>Artan Protec</strong> (aramid yarns, FR textiles & PPE).
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#catalog" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3">
                <PackageSearch className="h-5 w-5" /> Explore Catalog
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border px-5 py-3">
                <Mail className="h-5 w-5" /> Request Quote
              </a>
              <a href="/brochures/artan-protec.pdf" className="inline-flex items-center gap-2 rounded-full border px-5 py-3">
                <Download className="h-5 w-5" /> Download Brochure
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>50+ yrs filtration</Pill>
              <Pill>Export‑ready logistics</Pill>
              <Pill>OEM & End‑user friendly</Pill>
              <Pill>Custom engineering</Pill>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / GROUP STRUCTURE */}
      <Section
        id="about"
        eyebrow="Group Overview"
        title="One umbrella. Four focused brands."
        lead="Streamlined sourcing across filters, metal components, coatings, and aramid‑based protective solutions."
        icon={Layers3}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <div className="flex items-center gap-3"><Filter className="h-6 w-6" /><h3 className="font-semibold">Masturlal Fabrichem</h3></div>
            <p className="text-sm text-gray-600 mt-2">Industrial filter bags, cartridges, HVAC & HEPA/ULPA, gas turbine filtration, and process/compressed air‑gas.</p>
            <a href="https://masturlalfab.com" className="mt-4 inline-flex items-center gap-1 text-sm text-blue-600">Visit site <ArrowRight className="h-4 w-4" /></a>
          </Card>
          <Card>
            <div className="flex items-center gap-3"><Hammer className="h-6 w-6" /><h3 className="font-semibold">Green Ekotech</h3></div>
            <p className="text-sm text-gray-600 mt-2">Filter housings, cages, venturis, custom metal assemblies, and powder‑coated panels.</p>
            <a href="https://greenekotech.com" className="mt-4 inline-flex items-center gap-1 text-sm text-blue-600">Visit site <ArrowRight className="h-4 w-4" /></a>
          </Card>
          <Card>
            <div className="flex items-center gap-3"><Wand2 className="h-6 w-6" /><h3 className="font-semibold">Ecotex (by Green Ekotech)</h3></div>
            <p className="text-sm text-gray-600 mt-2">Industrial coatings across mobility, infrastructure, heavy industry, clean tech, food processing, and defense/fire safety.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3"><ShieldCheck className="h-6 w-6" /><h3 className="font-semibold">Artan Protec</h3></div>
            <p className="text-sm text-gray-600 mt-2">CoreThread aramid yarns & threads, ArmorWeave FRR fabrics, and PPE gear programs.</p>
          </Card>
        </div>
      </Section>

      {/* CATALOG OVERVIEW */}
      <Section id="catalog" eyebrow="Catalog" title="Product families" lead="Browse by brand or application. Download one‑pagers or request tailored specs." icon={PackageSearch}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Ecotex — Industrial Coatings", to: "#coatings", Icon: Flame },
            { name: "Masturlal — Filtration", to: "#filters", Icon: Filter },
            { name: "Green Ekotech — Metal & Housings", to: "#metal", Icon: Factory },
            { name: "Artan Protec — Aramid & PPE", to: "#artan", Icon: ShieldCheck },
          ].map(({ name, to, Icon }) => (
            <Card key={name}>
              <div className="flex items-start gap-3">
                <Icon className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold">{name}</h3>
                  <a href={to} className="mt-2 inline-flex items-center gap-1 text-sm text-blue-600">View details <ArrowRight className="h-4 w-4" /></a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ECOTEX COATINGS */}
      <Section id="coatings" eyebrow="Ecotex" title="Industrial coatings (flexible line: epoxy & beyond)" lead="Application‑driven recommendations and finishing. Outreach focus across six verticals with flexible infrastructure to support multiple chemistries." icon={Flame}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecotexVerticals.map((v) => (
            <Card key={v.title}>
              <h3 className="font-semibold">{v.title}</h3>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
                {v.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Surface prep & QA</Badge>
                <Badge>Corrosion protection</Badge>
                <Badge>High‑adhesion finishes</Badge>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/brochures/ecotex.pdf" className="inline-flex items-center gap-2 rounded-full border px-4 py-2"><Download className="h-4 w-4" /> Download Ecotex brochure</a>
        </div>
      </Section>

      {/* MASTURLAL FILTERS */}
      <Section id="filters" eyebrow="Masturlal Fabrichem" title="Filtration portfolio" lead="End‑to‑end baghouse media, cartridges & elements for HVAC/cleanroom and process/compressed air‑gas systems." icon={Filter}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {masturlalCategories.map((c) => (
            <Card key={c.title}>
              <h3 className="font-semibold">{c.title}</h3>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
                {c.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/brochures/masturlal-dry-filtration.pdf" className="inline-flex items-center gap-2 rounded-full border px-4 py-2"><Download className="h-4 w-4" /> Dry Filtration (PDF)</a>
          <a href="/brochures/masturlal-gas-turbine.pdf" className="inline-flex items-center gap-2 rounded-full border px-4 py-2"><Download className="h-4 w-4" /> Gas Turbine (PDF)</a>
          <a href="/brochures/masturlal-hepa-hvac.pdf" className="inline-flex items-center gap-2 rounded-full border px-4 py-2"><Download className="h-4 w-4" /> HVAC & HEPA (PDF)</a>
        </div>
      </Section>

      {/* GREEN EKOTECH METAL */}
      <Section id="metal" eyebrow="Green Ekotech" title="Metal components & housings for filtration" lead="Fabrication + finishing with per‑kg pricing models for cages (MS epoxy, GI, SS304/316) and engineered housings." icon={Factory}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metalScope.map((m) => (
            <Card key={m.title}>
              <h3 className="font-semibold">{m.title}</h3>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
                {m.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/brochures/green-ekotech.pdf" className="inline-flex items-center gap-2 rounded-full border px-4 py-2"><Download className="h-4 w-4" /> Green Ekotech (PDF)</a>
        </div>
      </Section>

      {/* ARTAN PROTEC */}
      <Section id="artan" eyebrow="Artan Protec" title="Aramid yarn & thread, FRR fabrics, PPE" lead="Start with CoreThread (yarns/threads), expand via ArmorWeave (FRR fabrics) and PPE programs." icon={ShieldCheck}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artanScope.map((a) => (
            <Card key={a.title}>
              <h3 className="font-semibold">{a.title}</h3>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
                {a.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Spec‑driven sourcing</Badge>
                <Badge>Low‑CAPEX phase‑in</Badge>
                <Badge>Export‑ready</Badge>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/brochures/artan-corethread.pdf" className="inline-flex items-center gap-2 rounded-full border px-4 py-2"><Download className="h-4 w-4" /> CoreThread (PDF)</a>
          <a href="/brochures/artan-armorweave.pdf" className="inline-flex items-center gap-2 rounded-full border px-4 py-2"><Download className="h-4 w-4" /> ArmorWeave (PDF)</a>
          <a href="/brochures/artan-ppe.pdf" className="inline-flex items-center gap-2 rounded-full border px-4 py-2"><Download className="h-4 w-4" /> PPE Gear (PDF)</a>
        </div>
      </Section>

      {/* MARKETS */}
      <Section id="markets" eyebrow="Markets" title="Geographies & focus" lead="Domestic (India & UAE) for CoreThread initial outreach; export focus on USA first for filter bags & cages. Additional target countries: Canada, UK, France, Germany, Italy, Spain, Russia, Japan, South Korea, Australia, South Africa, Mexico." icon={Globe2}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-semibold">Filtration exports</h3>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
              <li>USA priority (OEMs & end‑user plants)</li>
              <li>Regional brochures with translated versions</li>
              <li>Consistent Masturlal brand palette</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold">Ecotex industrial coatings</h3>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
              <li>India‑wide outreach; Gujarat priority completed</li>
              <li>Six vertical program with flexible chemistries</li>
              <li>Metal integration via Green Ekotech</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold">Artan Protec – Aramid</h3>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
              <li>Tier‑1 importers/processors & Tier‑2 users</li>
              <li>Start meta‑/para‑aramid yarns & threads</li>
              <li>Scale to fabrics & PPE based on demand</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Talk to our team" lead="Tell us your specs or share drawings—we’ll revert with the right media, coating stack, or assembly." icon={Mail}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold flex items-center gap-2"><Mail className="h-5 w-5" /> Emails</h3>
            <ul className="mt-2 text-sm text-gray-700 space-y-2">
              <li><strong>Artan Protec</strong>: <a className="text-blue-600" href="mailto:artanprotec@gmail.com">artanprotec@gmail.com</a></li>
              <li><strong>Masturlal Fabrichem</strong>: <a className="text-blue-600" href="mailto:arnav@masturlalfab.com">arnav@masturlalfab.com</a></li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Vendor registration support</Badge>
              <Badge>Sample program available</Badge>
            </div>
          </Card>
          <Card>
            <h3 className="font-semibold flex items-center gap-2"><Phone className="h-5 w-5" /> Phone</h3>
            <p className="mt-2 text-sm text-gray-700">USA: +1 470 445 0578</p>
            <div className="mt-4">
              <a href="/brand-assets.zip" className="inline-flex items-center gap-2 rounded-full border px-4 py-2"><Download className="h-4 w-4" /> Download brand assets</a>
            </div>
          </Card>
        </div>
        <div className="mt-8">
          <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll get back to you shortly."); }} className="grid md:grid-cols-3 gap-4">
            <input required placeholder="Name" className="rounded-xl border px-4 py-3" />
            <input required type="email" placeholder="Email" className="rounded-xl border px-4 py-3" />
            <input placeholder="Company" className="rounded-xl border px-4 py-3" />
            <textarea required placeholder="Project / Specs" className="md:col-span-3 rounded-xl border px-4 py-3 min-h-[120px]" />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-5 py-3"><Mail className="h-5 w-5" /> Submit</button>
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/artan-protec-logo-mark.png" alt="Artan mark" className="h-8 w-8" />
              <div>
                <p className="font-semibold">Artan Protec</p>
                <p className="text-xs text-gray-500">Advanced Protection | Engineered Performance</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <div className="flex items-center gap-3 flex-wrap">
                <a className="inline-flex items-center gap-1" href="https://masturlalfab.com"><LinkIcon className="h-4 w-4"/> masturlalfab.com</a>
                <a className="inline-flex items-center gap-1" href="https://greenekotech.com"><LinkIcon className="h-4 w-4"/> greenekotech.com</a>
                <a className="inline-flex items-center gap-1" href="#"><LinkIcon className="h-4 w-4"/> Ecotex</a>
                <a className="inline-flex items-center gap-1" href="#"><LinkIcon className="h-4 w-4"/> Artan Protec</a>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6">© {new Date().getFullYear()} Masturlal Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


