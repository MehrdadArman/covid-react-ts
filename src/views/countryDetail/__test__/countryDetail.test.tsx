// CountryDetail.test.tsx
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { test, expect, vi, describe } from "vitest";

import CountryDetail from "../CountryDetail";
import { appRoutes } from "@/router/routesList";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

describe("Country Detail Page", () => {
  test("renders country data correctly", async () => {
    const { findByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/country/Niger"]}>
          <Routes>
            <Route
              path={appRoutes.COUNTRY_DETAIL_PAGE}
              element={<CountryDetail />}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    // Wait for API call to finish and check for rendered country name
    await vi.waitFor(() => {
      expect(findByText(/Niger/i)).toBeTruthy();
      expect(findByText(/Total Cases/i)).toBeTruthy();
    });
  });

  test("renders country data not available if data is not available", async () => {
    const { findByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/country/Nigeraaa"]}>
          <Routes>
            <Route
              path={appRoutes.COUNTRY_DETAIL_PAGE}
              element={<CountryDetail />}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await vi.waitFor(() =>
      expect(findByText(/data not available/i)).toBeTruthy()
    );
  });
});
