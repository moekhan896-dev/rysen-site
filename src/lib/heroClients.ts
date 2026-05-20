export type HeroClient = {
  id: string;
  brandName: string;
  vertical: "Legal" | "Medical" | "Brand-built";
  metro: string;
  query: string;
  yourRow: {
    domain: string;
    title: string;
    snippet: string;
  };
  competitors: Array<{ domain: string; title: string; snippet: string }>;
  metric: { value: string; label: string };
};

export const HERO_CLIENTS: HeroClient[] = [
  {
    id: "aws",
    brandName: "AWS Law Firm",
    vertical: "Legal",
    metro: "Tampa",
    query: "best probate lawyer tampa",
    yourRow: {
      domain: "awslawfirm.com",
      title: "AWS Law Firm, Tampa Probate Attorneys",
      snippet: "Highest-rated probate practice in Tampa Bay. Free consultations. 20+ years of estate administration experience.",
    },
    competitors: [
      { domain: "biglawfirm.com", title: "Big Law Firm, Statewide Florida Services", snippet: "Multi-state legal services across the Southeast." },
      { domain: "tampaprobate.net", title: "Tampa Probate Specialists", snippet: "General probate filings and estate work." },
    ],
    metric: { value: "348", label: "inbound calls · Dec 2025–Mar 2026" },
  },
  {
    id: "slim-dental",
    brandName: "Slim Dental",
    vertical: "Medical",
    metro: "Chicago",
    query: "chicago dental implants",
    yourRow: {
      domain: "slimdental.com",
      title: "Slim Dental, Chicago Implant Dentistry",
      snippet: "Chicago premier implant practice. Same-day implants and full-mouth restorations. Voted best dental experience.",
    },
    competitors: [
      { domain: "aspendental.com", title: "Aspen Dental, Chicago Implants", snippet: "National dental chain." },
      { domain: "chicagoimplants.com", title: "Chicago Implant Center", snippet: "Implant dentistry services." },
    ],
    metric: { value: "+186%", label: "qualified call growth in 6 months" },
  },
  {
    id: "hartman",
    brandName: "Hartman Dermatology",
    vertical: "Medical",
    metro: "Miami",
    query: "miami dermatologist",
    yourRow: {
      domain: "hartmandermatology.com",
      title: "Hartman Dermatology, Miami Cosmetic Practice",
      snippet: "Board-certified cosmetic dermatology in Miami. Same-week appointments. Laser, aesthetic, and medical care.",
    },
    competitors: [
      { domain: "miamidermatology.org", title: "Miami Dermatology Network", snippet: "Multi-location dermatology." },
      { domain: "realself.com", title: "Best Miami Dermatologists", snippet: "Cosmetic procedure reviews." },
    ],
    metric: { value: "38%", label: "AI search citation rate, vertical leader" },
  },
  {
    id: "tyler",
    brandName: "Tyler Family Law",
    vertical: "Legal",
    metro: "Atlanta",
    query: "atlanta divorce attorney",
    yourRow: {
      domain: "tylerfamilylaw.com",
      title: "Tyler Family Law, Atlanta Divorce and Custody",
      snippet: "Atlanta trusted family law firm. Compassionate representation in divorce, child custody, and complex family matters.",
    },
    competitors: [
      { domain: "divorce-atlanta.com", title: "Atlanta Divorce Lawyers", snippet: "Family law services." },
      { domain: "georgiafamilylaw.net", title: "Georgia Family Law Group", snippet: "Statewide family law." },
    ],
    metric: { value: "169", label: "inbound calls · Dec 2025–May 2026" },
  },
  {
    id: "madison",
    brandName: "Madison Clark",
    vertical: "Brand-built",
    metro: "Internal project",
    query: "madison clark ai",
    yourRow: {
      domain: "madisonclark.com",
      title: "Madison Clark, AI persona scaled to 100M views",
      snippet: "AI persona we built and scaled to 100 million views in 60 days with zero ad spend.",
    },
    competitors: [
      { domain: "instagram.com", title: "Madison Clark on Instagram", snippet: "Profile page." },
      { domain: "tiktok.com", title: "Madison Clark on TikTok", snippet: "Creator profile." },
    ],
    metric: { value: "100M", label: "views in 60 days · zero ad spend" },
  },
  {
    id: "quattro",
    brandName: "Quattro Labs",
    vertical: "Brand-built",
    metro: "Internal project",
    query: "quattro labs automotive",
    yourRow: {
      domain: "quattrolabs.com",
      title: "Quattro Labs, Automotive media",
      snippet: "Automotive media brand we built from zero to 150,000+ followers. Active since 2021.",
    },
    competitors: [
      { domain: "instagram.com", title: "@quattrolabs on Instagram", snippet: "Active automotive media profile." },
      { domain: "youtube.com", title: "Quattro Labs on YouTube", snippet: "Car culture videos." },
    ],
    metric: { value: "150K+", label: "followers · active since 2021" },
  },
];
