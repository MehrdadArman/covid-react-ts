export interface CovidIF {
  country: string;
  totalCases: string;
  newCases: string;
  totalDeaths: string;
  newDeaths: string;
  totalRecovered: string;
  activeCases: string;
}

export type GetCountryCovidInfoT = {
  countryId: string;
};
