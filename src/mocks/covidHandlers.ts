import { getCountryCovidInfoUrl } from "@/assets/data/urlConfig";
import { http, HttpResponse } from "msw";

const covidHandlers = [
  http.get(getCountryCovidInfoUrl, async ({ request }) => {
    const url = new URL(request.url);
    const countryId = url.searchParams.get("countryId");

    const mockCountryCovidInfo = {
      country: countryId,
      totalCases: "mock 12",
      newCases: "mock 12",
      totalDeaths: "mock 12",
      newDeaths: "mock 12",
      activeCases: "mock 43",
      totalRecovered: "mock 12",
    };

    if (countryId === "Niger") {
      return HttpResponse.json(mockCountryCovidInfo, {
        status: 200,
      });
    } else {
      return HttpResponse.json(null, {
        status: 404,
      });
    }
  }),
];

export { covidHandlers };
