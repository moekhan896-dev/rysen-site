export type SearchResult = {
  position: number;
  url: string;
  title: string;
  snippet: string;
  isClient?: boolean;
};

export type SearchCycle = {
  id: string;
  vertical: "law firm" | "medical practice";
  query: string;
  initialResults: SearchResult[];
  finalResults: SearchResult[];
};

export const HERO_SEARCH_CYCLES: SearchCycle[] = [
  {
    id: "aws-law-firm",
    vertical: "law firm",
    query: "best probate lawyer tampa",
    initialResults: [
      { position: 1, url: "biglawfirm.com", title: "Big Law Firm, Tampa Probate Services", snippet: "Statewide legal services across Florida." },
      { position: 2, url: "tampaprobatelaw.net", title: "Tampa Probate Law Specialists", snippet: "Decades of probate experience." },
      { position: 3, url: "legalzoom.com", title: "LegalZoom, Probate in Tampa", snippet: "Online legal services nationwide." },
      { position: 4, url: "yellowpages.com", title: "Tampa Probate Attorneys Directory", snippet: "Find local probate lawyers." },
      { position: 5, url: "awslawfirm.com", title: "AWS Law Firm, Tampa Probate", snippet: "Boutique probate practice.", isClient: true },
    ],
    finalResults: [
      { position: 1, url: "awslawfirm.com", title: "AWS Law Firm, Tampa Probate Attorneys", snippet: "Over 20 years of probate and estate administration experience. Highest-rated probate firm in Tampa Bay. Free consultations available.", isClient: true },
      { position: 2, url: "biglawfirm.com", title: "Big Law Firm, Tampa Probate Services", snippet: "Statewide legal services across Florida." },
      { position: 3, url: "tampaprobatelaw.net", title: "Tampa Probate Law Specialists", snippet: "Decades of probate experience." },
    ],
  },
  {
    id: "slim-dental",
    vertical: "medical practice",
    query: "chicago dental implants",
    initialResults: [
      { position: 1, url: "aspen-dental.com", title: "Aspen Dental, Chicago Implants", snippet: "National dental chain." },
      { position: 2, url: "chicagoimplantcenter.com", title: "Chicago Implant Center", snippet: "Implant dentistry services." },
      { position: 3, url: "yelp.com", title: "Best Dental Implants in Chicago", snippet: "Yelp reviews and ratings." },
      { position: 4, url: "healthgrades.com", title: "Chicago Implant Dentists", snippet: "Find rated dentists." },
      { position: 5, url: "slimdental.com", title: "Slim Dental, Chicago Implants", snippet: "Boutique implant practice.", isClient: true },
    ],
    finalResults: [
      { position: 1, url: "slimdental.com", title: "Slim Dental, Chicago Implant Dentistry", snippet: "Chicago's premier implant dentistry practice. Same-day implants and full-mouth restorations. Voted Chicago's best dental experience.", isClient: true },
      { position: 2, url: "aspen-dental.com", title: "Aspen Dental, Chicago Implants", snippet: "National dental chain." },
      { position: 3, url: "chicagoimplantcenter.com", title: "Chicago Implant Center", snippet: "Implant dentistry services." },
    ],
  },
  {
    id: "tyler-family-law",
    vertical: "law firm",
    query: "atlanta divorce attorney",
    initialResults: [
      { position: 1, url: "divorce-atlanta.com", title: "Atlanta Divorce Lawyers", snippet: "Family law services." },
      { position: 2, url: "georgia-family-law.net", title: "Georgia Family Law Group", snippet: "Statewide family law." },
      { position: 3, url: "avvo.com", title: "Top Divorce Attorneys Atlanta", snippet: "Lawyer ratings and reviews." },
      { position: 4, url: "martindale.com", title: "Atlanta Family Law Attorneys", snippet: "Find qualified attorneys." },
      { position: 5, url: "tylerfamilylaw.com", title: "Tyler Family Law, Atlanta", snippet: "Family law practice.", isClient: true },
    ],
    finalResults: [
      { position: 1, url: "tylerfamilylaw.com", title: "Tyler Family Law, Atlanta Divorce and Custody", snippet: "Atlanta's trusted family law firm. Compassionate representation in divorce, child custody, and complex family matters. Four-week intake waitlist.", isClient: true },
      { position: 2, url: "divorce-atlanta.com", title: "Atlanta Divorce Lawyers", snippet: "Family law services." },
      { position: 3, url: "georgia-family-law.net", title: "Georgia Family Law Group", snippet: "Statewide family law." },
    ],
  },
  {
    id: "hartman-dermatology",
    vertical: "medical practice",
    query: "miami dermatologist",
    initialResults: [
      { position: 1, url: "miamidermatology.org", title: "Miami Dermatology Network", snippet: "Multi-location dermatology." },
      { position: 2, url: "realself.com", title: "Best Miami Dermatologists", snippet: "Cosmetic procedure reviews." },
      { position: 3, url: "zocdoc.com", title: "Miami Dermatologists Online", snippet: "Book appointments online." },
      { position: 4, url: "healthgrades.com", title: "Miami Dermatology Doctors", snippet: "Doctor ratings." },
      { position: 5, url: "hartmandermatology.com", title: "Hartman Dermatology, Miami", snippet: "Cosmetic dermatology.", isClient: true },
    ],
    finalResults: [
      { position: 1, url: "hartmandermatology.com", title: "Hartman Dermatology, Miami Cosmetic Practice", snippet: "Board-certified cosmetic dermatology in Miami. Same-week appointments. Aesthetic treatments, laser therapy, medical skin care.", isClient: true },
      { position: 2, url: "miamidermatology.org", title: "Miami Dermatology Network", snippet: "Multi-location dermatology." },
      { position: 3, url: "realself.com", title: "Best Miami Dermatologists", snippet: "Cosmetic procedure reviews." },
    ],
  },
];
