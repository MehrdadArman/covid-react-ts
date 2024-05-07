import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CovidIF, GetCountryCovidInfoT } from "@/typing/covid";

interface CovidStateIF {
  countryCovidInfo: CovidIF | null;

  getCountryCovidInfoLoader: boolean;
}

const initialState: CovidStateIF = {
  countryCovidInfo: {} as CovidIF,

  getCountryCovidInfoLoader: false,
};
const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    // ** get covid user list
    getCountryCovidInfo: (
      state,
      action: PayloadAction<GetCountryCovidInfoT>
    ) => {
      console.log("getCountryCovidInfo", action.payload);

      state.getCountryCovidInfoLoader = true;
      state.countryCovidInfo = null;
    },
    getCountryCovidInfoSuccess: (state, action: PayloadAction<CovidIF>) => {
      state.getCountryCovidInfoLoader = false;
      state.countryCovidInfo = action.payload;
    },
    getCountryCovidInfoFailure: (state) => {
      state.getCountryCovidInfoLoader = false;
      state.countryCovidInfo = null;
    },
  },
});

export const covidActions = covidSlice.actions;

export default covidSlice.reducer;
