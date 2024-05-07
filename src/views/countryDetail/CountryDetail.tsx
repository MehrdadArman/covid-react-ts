import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// **redux
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { covidActions } from "@/redux/covid/slice";

// ** skeleton components
import CountryDetailSkeleton from "./components/CountryDetailSkeleton";

const CountryDetail = () => {
  let { countryId } = useParams();
  const dispatch = useAppDispatch();

  // ** selectors
  const countryCovidInfo = useAppSelector(
    (state) => state.covid.countryCovidInfo
  );
  const getCountryCovidInfoLoader = useAppSelector(
    (state) => state.covid.getCountryCovidInfoLoader
  );

  useEffect(() => {
    if (countryId)
      dispatch(
        covidActions.getCountryCovidInfo({
          countryId: countryId,
        })
      );
  }, [countryId, dispatch]);

  if (getCountryCovidInfoLoader) return <CountryDetailSkeleton />;

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <div className="bg-gray-200 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">
          Country Name: {countryCovidInfo?.country}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countryCovidInfo ? (
            Object.entries(countryCovidInfo).map(([key, value]) => {
              return (
                <Card key={key} className=" w-full">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {key.toUpperCase()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {value ? value : " N/A"}
                    </div>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <div>data not available :)</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
