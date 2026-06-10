export interface City {
  city: string;
  county: string;
  population: string;
  region: string;
}

export const cities: City[] = [
  { city: "Los Angeles", county: "Los Angeles County", population: "3.9M", region: "Southern California" },
  { city: "San Diego", county: "San Diego County", population: "1.4M", region: "Southern California" },
  { city: "San Jose", county: "Santa Clara County", population: "1.0M", region: "Northern California" },
  { city: "San Francisco", county: "San Francisco County", population: "874K", region: "Northern California" },
  { city: "Fresno", county: "Fresno County", population: "542K", region: "Central California" },
  { city: "Sacramento", county: "Sacramento County", population: "524K", region: "Northern California" },
  { city: "Long Beach", county: "Los Angeles County", population: "466K", region: "Southern California" },
  { city: "Oakland", county: "Alameda County", population: "440K", region: "Northern California" },
  { city: "Bakersfield", county: "Kern County", population: "407K", region: "Central California" },
  { city: "Anaheim", county: "Orange County", population: "346K", region: "Southern California" },
  { city: "Santa Ana", county: "Orange County", population: "310K", region: "Southern California" },
  { city: "Riverside", county: "Riverside County", population: "314K", region: "Southern California" },
  { city: "Stockton", county: "San Joaquin County", population: "320K", region: "Central California" },
  { city: "Irvine", county: "Orange County", population: "307K", region: "Southern California" },
  { city: "Chula Vista", county: "San Diego County", population: "275K", region: "Southern California" },
  { city: "Fremont", county: "Alameda County", population: "230K", region: "Northern California" },
  { city: "San Bernardino", county: "San Bernardino County", population: "222K", region: "Southern California" },
  { city: "Modesto", county: "Stanislaus County", population: "218K", region: "Central California" },
  { city: "Fontana", county: "San Bernardino County", population: "214K", region: "Southern California" },
  { city: "Oxnard", county: "Ventura County", population: "202K", region: "Southern California" },
  { city: "Moreno Valley", county: "Riverside County", population: "208K", region: "Southern California" },
  { city: "Glendale", county: "Los Angeles County", population: "196K", region: "Southern California" },
  { city: "Huntington Beach", county: "Orange County", population: "198K", region: "Southern California" },
  { city: "Santa Clarita", county: "Los Angeles County", population: "228K", region: "Southern California" },
  { city: "Garden Grove", county: "Orange County", population: "171K", region: "Southern California" },
  { city: "Oceanside", county: "San Diego County", population: "175K", region: "Southern California" },
  { city: "Rancho Cucamonga", county: "San Bernardino County", population: "177K", region: "Southern California" },
  { city: "Santa Rosa", county: "Sonoma County", population: "178K", region: "Northern California" },
  { city: "Ontario", county: "San Bernardino County", population: "175K", region: "Southern California" },
  { city: "Lancaster", county: "Los Angeles County", population: "157K", region: "Southern California" },
  { city: "Elk Grove", county: "Sacramento County", population: "176K", region: "Northern California" },
  { city: "Palmdale", county: "Los Angeles County", population: "169K", region: "Southern California" },
  { city: "Salinas", county: "Monterey County", population: "163K", region: "Central California" },
  { city: "Hayward", county: "Alameda County", population: "162K", region: "Northern California" },
  { city: "Pomona", county: "Los Angeles County", population: "151K", region: "Southern California" },
  { city: "Corona", county: "Riverside County", population: "157K", region: "Southern California" },
  { city: "Escondido", county: "San Diego County", population: "151K", region: "Southern California" },
  { city: "Sunnyvale", county: "Santa Clara County", population: "155K", region: "Northern California" },
  { city: "Torrance", county: "Los Angeles County", population: "147K", region: "Southern California" },
  { city: "Pasadena", county: "Los Angeles County", population: "138K", region: "Southern California" },
  { city: "Orange", county: "Orange County", population: "139K", region: "Southern California" },
  { city: "Fullerton", county: "Orange County", population: "135K", region: "Southern California" },
  { city: "Visalia", county: "Tulare County", population: "141K", region: "Central California" },
  { city: "Roseville", county: "Placer County", population: "147K", region: "Northern California" },
  { city: "Concord", county: "Contra Costa County", population: "129K", region: "Northern California" },
  { city: "Victorville", county: "San Bernardino County", population: "134K", region: "Southern California" },
  { city: "Santa Clara", county: "Santa Clara County", population: "127K", region: "Northern California" },
  { city: "Thousand Oaks", county: "Ventura County", population: "126K", region: "Southern California" },
  { city: "Simi Valley", county: "Ventura County", population: "126K", region: "Southern California" },
  { city: "Vallejo", county: "Solano County", population: "121K", region: "Northern California" },
];

export function slugify(city: string): string {
  return city.toLowerCase().replace(/\s+/g, "-");
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => slugify(c.city) === slug.replace(/-ca$/, ""));
}
