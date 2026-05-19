export type SearchResult = {
  position: number;
  domain: string;
  title: string;
  snippet: string;
  isClient?: boolean;
};

export type HeroCycle = {
  id: string;
  vertical: "law firm" | "medical practice";
  query: string;
  initial: SearchResult[];
  final: SearchResult[];
};

export const HERO_CYCLES: HeroCycle[] = [
  {
    id: "aws",
    vertical: "law firm",
    query: "best probate lawyer tampa",
    initial: [
      { position: 1, domain: "biglawfirm.com", title: "Big Law Firm, Statewide Florida", snippet: "Multi-state legal services across the Southeast." },
      { position: 2, domain: "tampaprobate.net", title: "Tampa Probate Specialists", snippet: "General probate filings." },
      { position: 3, domain: "legalzoom.com", title: "LegalZoom, Probate Online", snippet: "Self-service legal forms nationwide." },
      { position: 4, domain: "yellowpages.com", title: "Tampa Probate Attorneys Directory", snippet: "Find local probate lawyers." },
      { position: 5, domain: "awslawfirm.com", title: "AWS Law Firm", snippet: "Boutique probate practice.", isClient: true },
    ],
    final: [
      { position: 1, domain: "awslawfirm.com", title: "AWS Law Firm, Tampa Probate Attorneys", snippet: "Highest-rated probate practice in Tampa Bay. Free consultations. 20+ years estate administration experience.", isClient: true },
      { position: 2, domain: "biglawfirm.com", title: "Big Law Firm, Statewide Florida", snippet: "Multi-state legal services across the Southeast." },
      { position: 3, domain: "tampaprobate.net", title: "Tampa Probate Specialists", snippet: "General probate filings." },
    ],
  },
  {
    id: "slim",
    vertical: "medical practice",
    query: "chicago dental implants",
    initial: [
      { position: 1, domain: "aspendental.com", title: "Aspen Dental, Chicago Implants", snippet: "National dental chain." },
      { position: 2, domain: "chicagoimplants.com", title: "Chicago Implant Center", snippet: "Implant dentistry services." },
      { position: 3, domain: "yelp.com", title: "Best Dental Implants in Chicago", snippet: "Yelp reviews and ratings." },
      { position: 4, domain: "healthgrades.com", title: "Chicago Implant Dentists", snippet: "Find rated dentists." },
      { position: 5, domain: "slimdental.com", title: "Slim Dental, Chicago", snippet: "Boutique implant practice.", isClient: true },
    ],
    final: [
      { position: 1, domain: "slimdental.com", title: "Slim Dental, Chicago Implant Dentistry", snippet: "Chicago premier implant practice. Same-day implants and full-mouth restorations. Voted best dental experience.", isClient: true },
      { position: 2, domain: "aspendental.com", title: "Aspen Dental, Chicago Implants", snippet: "National dental chain." },
      { position: 3, domain: "chicagoimplants.com", title: "Chicago Implant Center", snippet: "Implant dentistry services." },
    ],
  },
  {
    id: "tyler",
    vertical: "law firm",
    query: "atlanta divorce attorney",
    initial: [
      { position: 1, domain: "divorce-atlanta.com", title: "Atlanta Divorce Lawyers", snippet: "Family law services." },
      { position: 2, domain: "georgiafamilylaw.net", title: "Georgia Family Law Group", snippet: "Statewide family law." },
      { position: 3, domain: "avvo.com", title: "Top Divorce Attorneys Atlanta", snippet: "Lawyer ratings and reviews." },
      { position: 4, domain: "martindale.com", title: "Atlanta Family Law Attorneys", snippet: "Find qualified attorneys." },
      { position: 5, domain: "tylerfamilylaw.com", title: "Tyler Family Law, Atlanta", snippet: "Family law practice.", isClient: true },
    ],
    final: [
      { position: 1, domain: "tylerfamilylaw.com", title: "Tyler Family Law, Atlanta Divorce and Custody", snippet: "Atlanta trusted family law firm. Compassionate representation in divorce, child custody, and complex family matters.", isClient: true },
      { position: 2, domain: "divorce-atlanta.com", title: "Atlanta Divorce Lawyers", snippet: "Family law services." },
      { position: 3, domain: "georgiafamilylaw.net", title: "Georgia Family Law Group", snippet: "Statewide family law." },
    ],
  },
  {
    id: "hartman",
    vertical: "medical practice",
    query: "miami dermatologist",
    initial: [
      { position: 1, domain: "miamidermatology.org", title: "Miami Dermatology Network", snippet: "Multi-location dermatology." },
      { position: 2, domain: "realself.com", title: "Best Miami Dermatologists", snippet: "Cosmetic procedure reviews." },
      { position: 3, domain: "zocdoc.com", title: "Miami Dermatologists Online", snippet: "Book appointments online." },
      { position: 4, domain: "healthgrades.com", title: "Miami Dermatology Doctors", snippet: "Doctor ratings." },
      { position: 5, domain: "hartmandermatology.com", title: "Hartman Dermatology", snippet: "Cosmetic dermatology.", isClient: true },
    ],
    final: [
      { position: 1, domain: "hartmandermatology.com", title: "Hartman Dermatology, Miami Cosmetic Practice", snippet: "Board-certified cosmetic dermatology in Miami. Same-week appointments. Aesthetic treatments, laser therapy.", isClient: true },
      { position: 2, domain: "miamidermatology.org", title: "Miami Dermatology Network", snippet: "Multi-location dermatology." },
      { position: 3, domain: "realself.com", title: "Best Miami Dermatologists", snippet: "Cosmetic procedure reviews." },
    ],
  },
];
