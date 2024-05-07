// ** Auth routes  and type
type authRoutesType = {
  LOGIN_BY_USER_NAME: string;
};

export const authRoutes: authRoutesType = {
  LOGIN_BY_USER_NAME: "/auth/username",
};

// ** app routes
type appRoutes = {
  HOME_PAGE: string;
  COUNTRY_DETAIL_PAGE: string;
};

export const appRoutes: appRoutes = {
  HOME_PAGE: "/",
  COUNTRY_DETAIL_PAGE: "/country/:countryId",
};
