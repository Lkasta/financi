export type AcronymStates =
  | "AK"
  | "AL"
  | "AR"
  | "AZ"
  | "CA"
  | "CO"
  | "CT"
  | "DC"
  | "DE"
  | "FL"
  | "GA"
  | "HI"
  | "IA"
  | "ID"
  | "IL"
  | "IN"
  | "KS"
  | "KY"
  | "LA"
  | "MA"
  | "MD"
  | "ME"
  | "MI"
  | "MN"
  | "MO"
  | "MS"
  | "MT"
  | "NC"
  | "ND"
  | "NE"
  | "NH"
  | "NJ"
  | "NM"
  | "NV"
  | "NY"
  | "OH"
  | "OK"
  | "OR"
  | "PA"
  | "RI"
  | "SC"
  | "SD"
  | "TN"
  | "TX"
  | "UT"
  | "VA"
  | "VT"
  | "WA"
  | "WI"
  | "WV"
  | "WY";

const fipsToAcronym: Record<number, AcronymStates> = {
  1: "AL",
  2: "AK",
  4: "AZ",
  5: "AR",
  6: "CA",
  8: "CO",
  9: "CT",
  10: "DE",
  11: "DC",
  12: "FL",
  13: "GA",
  15: "HI",
  16: "ID",
  17: "IL",
  18: "IN",
  19: "IA",
  20: "KS",
  21: "KY",
  22: "LA",
  23: "ME",
  24: "MD",
  25: "MA",
  26: "MI",
  27: "MN",
  28: "MS",
  29: "MO",
  30: "MT",
  31: "NE",
  32: "NV",
  33: "NH",
  34: "NJ",
  35: "NM",
  36: "NY",
  37: "NC",
  38: "ND",
  39: "OH",
  40: "OK",
  41: "OR",
  42: "PA",
  44: "RI",
  45: "SC",
  46: "SD",
  47: "TN",
  48: "TX",
  49: "UT",
  50: "VT",
  51: "VA",
  53: "WA",
  54: "WV",
  55: "WI",
  56: "WY",
};

const statesEUA: Record<
  AcronymStates,
  { id: number; name: string; flag: string }
> = {
  AK: { id: 2, name: "Alasca", flag: "/SatesFlagsUSA/ak.webp" },
  AL: { id: 1, name: "Alabama", flag: "/SatesFlagsUSA/al.webp" },
  AR: { id: 5, name: "Arkansas", flag: "/SatesFlagsUSA/ar.webp" },
  AZ: { id: 4, name: "Arizona", flag: "/SatesFlagsUSA/az.webp" },
  CA: { id: 6, name: "Califórnia", flag: "/SatesFlagsUSA/ca.webp" },
  CO: { id: 8, name: "Colorado", flag: "/SatesFlagsUSA/co.webp" },
  CT: { id: 9, name: "Connecticut", flag: "/SatesFlagsUSA/ct.webp" },
  DE: { id: 10, name: "Delaware", flag: "/SatesFlagsUSA/de.webp" },
  DC: { id: 11, name: "Washington, D.C.", flag: "" },
  FL: { id: 12, name: "Flórida", flag: "/SatesFlagsUSA/fl.webp" },
  GA: { id: 13, name: "Geórgia", flag: "/SatesFlagsUSA/ga.webp" },
  HI: { id: 15, name: "Havaí", flag: "/SatesFlagsUSA/hi.webp" },
  IA: { id: 19, name: "Iowa", flag: "/SatesFlagsUSA/ia.webp" },
  ID: { id: 16, name: "Idaho", flag: "/SatesFlagsUSA/id.webp" },
  IL: { id: 17, name: "Illinois", flag: "/SatesFlagsUSA/il.webp" },
  IN: { id: 18, name: "Indiana", flag: "/SatesFlagsUSA/in.webp" },
  KS: { id: 20, name: "Kansas", flag: "/SatesFlagsUSA/ks.webp" },
  KY: { id: 21, name: "Kentucky", flag: "/SatesFlagsUSA/ky.webp" },
  LA: { id: 22, name: "Luisiana", flag: "/SatesFlagsUSA/la.webp" },
  MA: { id: 25, name: "Massachusetts", flag: "/SatesFlagsUSA/ma.webp" },
  MD: { id: 24, name: "Maryland", flag: "/SatesFlagsUSA/md.webp" },
  ME: { id: 23, name: "Maine", flag: "/SatesFlagsUSA/me.webp" },
  MI: { id: 26, name: "Michigan", flag: "/SatesFlagsUSA/mi.webp" },
  MN: { id: 27, name: "Minnesota", flag: "/SatesFlagsUSA/mn.webp" },
  MO: { id: 29, name: "Missouri", flag: "/SatesFlagsUSA/mo.webp" },
  MS: { id: 28, name: "Mississippi", flag: "/SatesFlagsUSA/ms.webp" },
  MT: { id: 30, name: "Montana", flag: "/SatesFlagsUSA/mt.webp" },
  NC: { id: 37, name: "Carolina do Norte", flag: "/SatesFlagsUSA/nc.webp" },
  ND: { id: 38, name: "Dakota do Norte", flag: "/SatesFlagsUSA/nd.webp" },
  NE: { id: 31, name: "Nebraska", flag: "/SatesFlagsUSA/ne.webp" },
  NH: { id: 33, name: "New Hampshire", flag: "/SatesFlagsUSA/nh.webp" },
  NJ: { id: 34, name: "Nova Jersey", flag: "/SatesFlagsUSA/nj.webp" },
  NM: { id: 35, name: "Novo México", flag: "/SatesFlagsUSA/nm.webp" },
  NV: { id: 32, name: "Nevada", flag: "/SatesFlagsUSA/nv.webp" },
  NY: { id: 36, name: "Nova Iorque", flag: "/SatesFlagsUSA/ny.webp" },
  OH: { id: 39, name: "Ohio", flag: "/SatesFlagsUSA/oh.webp" },
  OK: { id: 40, name: "Oklahoma", flag: "/SatesFlagsUSA/ok.webp" },
  OR: { id: 41, name: "Oregon", flag: "/SatesFlagsUSA/or.webp" },
  PA: { id: 42, name: "Pensilvânia", flag: "/SatesFlagsUSA/pa.webp" },
  RI: { id: 44, name: "Rhode Island", flag: "/SatesFlagsUSA/ri.webp" },
  SC: { id: 45, name: "Carolina do Sul", flag: "/SatesFlagsUSA/sc.webp" },
  SD: { id: 46, name: "Dakota do Sul", flag: "/SatesFlagsUSA/sd.webp" },
  TN: { id: 47, name: "Tennessee", flag: "/SatesFlagsUSA/tn.webp" },
  TX: { id: 48, name: "Texas", flag: "/SatesFlagsUSA/tx.webp" },
  UT: { id: 49, name: "Utah", flag: "/SatesFlagsUSA/ut.webp" },
  VA: { id: 51, name: "Virgínia", flag: "/SatesFlagsUSA/va.webp" },
  VT: { id: 50, name: "Vermont", flag: "/SatesFlagsUSA/vt.webp" },
  WA: { id: 53, name: "Washington", flag: "/SatesFlagsUSA/wa.webp" },
  WI: { id: 55, name: "Wisconsin", flag: "/SatesFlagsUSA/wi.webp" },
  WV: { id: 54, name: "Virgínia Ocidental", flag: "/SatesFlagsUSA/wv.webp" },
  WY: { id: 56, name: "Wyoming", flag: "/SatesFlagsUSA/wy.webp" },
};

export function getStateData(state: AcronymStates | number): {
  id: number;
  name: string;
  flag: string;
} {
  let acronym: AcronymStates | undefined;

  if (typeof state === "number") {
    acronym = fipsToAcronym[state];
  } else {
    acronym = state;
  }

  return statesEUA[acronym] || "";
}
