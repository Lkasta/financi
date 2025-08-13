export type AcronymStates =
  | "AK"
  | "AL"
  | "AR"
  | "AZ"
  | "CA"
  | "CO"
  | "CT"
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

const statesEUA: Record<AcronymStates, { name: string; flag: string }> = {
  AK: { name: "Alasca", flag: "/SatesFlagsUSA/ak.webp" },
  AL: { name: "Alabama", flag: "/SatesFlagsUSA/al.webp" },
  AR: { name: "Arkansas", flag: "/SatesFlagsUSA/ar.webp" },
  AZ: { name: "Arizona", flag: "/SatesFlagsUSA/az.webp" },
  CA: { name: "Califórnia", flag: "/SatesFlagsUSA/ca.webp" },
  CO: { name: "Colorado", flag: "/SatesFlagsUSA/co.webp" },
  CT: { name: "Connecticut", flag: "/SatesFlagsUSA/ct.webp" },
  DE: { name: "Delaware", flag: "/SatesFlagsUSA/de.webp" },
  FL: { name: "Flórida", flag: "/SatesFlagsUSA/fl.webp" },
  GA: { name: "Geórgia", flag: "/SatesFlagsUSA/ga.webp" },
  HI: { name: "Havaí", flag: "/SatesFlagsUSA/hi.webp" },
  IA: { name: "Iowa", flag: "/SatesFlagsUSA/ia.webp" },
  ID: { name: "Idaho", flag: "/SatesFlagsUSA/id.webp" },
  IL: { name: "Illinois", flag: "/SatesFlagsUSA/il.webp" },
  IN: { name: "Indiana", flag: "/SatesFlagsUSA/in.webp" },
  KS: { name: "Kansas", flag: "/SatesFlagsUSA/ks.webp" },
  KY: { name: "Kentucky", flag: "/SatesFlagsUSA/ky.webp" },
  LA: { name: "Luisiana", flag: "/SatesFlagsUSA/la.webp" },
  MA: { name: "Massachusetts", flag: "/SatesFlagsUSA/ma.webp" },
  MD: { name: "Maryland", flag: "/SatesFlagsUSA/md.webp" },
  ME: { name: "Maine", flag: "/SatesFlagsUSA/me.webp" },
  MI: { name: "Michigan", flag: "/SatesFlagsUSA/mi.webp" },
  MN: { name: "Minnesota", flag: "/SatesFlagsUSA/mn.webp" },
  MO: { name: "Missouri", flag: "/SatesFlagsUSA/mo.webp" },
  MS: { name: "Mississippi", flag: "/SatesFlagsUSA/ms.webp" },
  MT: { name: "Montana", flag: "/SatesFlagsUSA/mt.webp" },
  NC: { name: "Carolina do Norte", flag: "/SatesFlagsUSA/nc.webp" },
  ND: { name: "Dakota do Norte", flag: "/SatesFlagsUSA/nd.webp" },
  NE: { name: "Nebraska", flag: "/SatesFlagsUSA/ne.webp" },
  NH: { name: "New Hampshire", flag: "/SatesFlagsUSA/nh.webp" },
  NJ: { name: "Nova Jersey", flag: "/SatesFlagsUSA/nj.webp" },
  NM: { name: "Novo México", flag: "/SatesFlagsUSA/nm.webp" },
  NV: { name: "Nevada", flag: "/SatesFlagsUSA/nv.webp" },
  NY: { name: "Nova Iorque", flag: "/SatesFlagsUSA/ny.webp" },
  OH: { name: "Ohio", flag: "/SatesFlagsUSA/oh.webp" },
  OK: { name: "Oklahoma", flag: "/SatesFlagsUSA/ok.webp" },
  OR: { name: "Oregon", flag: "/SatesFlagsUSA/or.webp" },
  PA: { name: "Pensilvânia", flag: "/SatesFlagsUSA/pa.webp" },
  RI: { name: "Rhode Island", flag: "/SatesFlagsUSA/ri.webp" },
  SC: { name: "Carolina do Sul", flag: "/SatesFlagsUSA/sc.webp" },
  SD: { name: "Dakota do Sul", flag: "/SatesFlagsUSA/sd.webp" },
  TN: { name: "Tennessee", flag: "/SatesFlagsUSA/tn.webp" },
  TX: { name: "Texas", flag: "/SatesFlagsUSA/tx.webp" },
  UT: { name: "Utah", flag: "/SatesFlagsUSA/ut.webp" },
  VA: { name: "Virgínia", flag: "/SatesFlagsUSA/va.webp" },
  VT: { name: "Vermont", flag: "/SatesFlagsUSA/vt.webp" },
  WA: { name: "Washington", flag: "/SatesFlagsUSA/wa.webp" },
  WI: { name: "Wisconsin", flag: "/SatesFlagsUSA/wi.webp" },
  WV: { name: "Virgínia Ocidental", flag: "/SatesFlagsUSA/wv.webp" },
  WY: { name: "Wyoming", flag: "/SatesFlagsUSA/wy.webp" },
};

export function getStateData(sigla: AcronymStates) {
  return statesEUA[sigla] || "";
}
