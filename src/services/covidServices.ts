import { GetCountryCovidInfoT } from "@/typing/covid";
import * as urls from "@/assets/data/urlConfig";

import axiosApiInstance from "./axiosInterceptor";

export const getCountryCovidInfoAsync = async (data: GetCountryCovidInfoT) => {
  return await axiosApiInstance.get(urls.getCountryCovidInfoUrl, {
    params: {
      country: data.countryId,
    },
  });
};
