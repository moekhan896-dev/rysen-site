export type SearchCycle = {
  id: string;
  vertical: "law firm" | "medical practice";
  category: "LEGAL" | "MEDICAL";
  categoryDetail: string;
  query: string;
  url: string;
  firmName: string;
  snippet: string;
  resultBadgeText: string;
};

export const HERO_SEARCH_CYCLES: SearchCycle[] = [
  {
    id: "aws-law-firm",
    vertical: "law firm",
    category: "LEGAL",
    categoryDetail: "PROBATE · TAMPA",
    query: "best probate lawyer tampa",
    url: "awslawfirm.com",
    firmName: "AWS Law Firm, Tampa Probate Attorneys",
    snippet:
      "Over 20 years of probate and estate administration experience. Highest-rated probate firm in Tampa Bay. Free consultations available.",
    resultBadgeText: "#1",
  },
  {
    id: "slim-dental",
    vertical: "medical practice",
    category: "MEDICAL",
    categoryDetail: "DENTAL · CHICAGO",
    query: "chicago dental implants",
    url: "slimdental.com",
    firmName: "Slim Dental, Chicago Implant Dentistry",
    snippet:
      "Chicago's premier implant dentistry practice. Same-day implants and full-mouth restorations. Voted Chicago's best dental experience.",
    resultBadgeText: "#1",
  },
  {
    id: "tyler-family-law",
    vertical: "law firm",
    category: "LEGAL",
    categoryDetail: "FAMILY LAW · ATLANTA",
    query: "atlanta divorce attorney",
    url: "tylerfamilylaw.com",
    firmName: "Tyler Family Law, Atlanta Divorce and Custody",
    snippet:
      "Atlanta's trusted family law firm. Compassionate representation in divorce, child custody, and complex family matters. Four-week intake waitlist.",
    resultBadgeText: "#1",
  },
  {
    id: "hartman-dermatology",
    vertical: "medical practice",
    category: "MEDICAL",
    categoryDetail: "DERMATOLOGY · MIAMI",
    query: "miami dermatologist consultation",
    url: "hartmandermatology.com",
    firmName: "Hartman Dermatology, Miami Cosmetic Practice",
    snippet:
      "Board-certified cosmetic dermatology in Miami. Same-week appointments. Aesthetic treatments, laser therapy, medical skin care.",
    resultBadgeText: "#1",
  },
];
