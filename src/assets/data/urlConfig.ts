//** Envoirment var */
type EnvoirmentT = "develop" | "production";
export const envoirment: EnvoirmentT =
  import.meta.env.VITE_ENVIRONMENT || "develop";

export const baseUrl: string =
  envoirment === "production"
    ? "https://api.collectapi.com/corona"
    : "https://api.collectapi.com/corona";

//  covid entity urls
export const getCountryCovidInfoUrl = `${baseUrl}/countriesData`;

export const mapStyleUrl =
  "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json";
