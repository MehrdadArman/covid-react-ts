import React, { FC, Suspense, lazy, useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { ContextLayout } from "../utilities/context/Layouts";

// ** routes list
import { appRoutes, authRoutes } from "./routesList";

//** Redux */
import { connect } from "react-redux";
import Spinner from "../components/loaders/Spinner";

// ** users list
const HomePage = lazy(() => import("../views/homePage/HomePage"));

//** Country Detail page */
const CountryDetail = lazy(
  () => import("../views/countryDetail/CountryDetail")
);

const Page404 = lazy(() => import("../views/page404/page404"));

//** Main Config */
type AppRouteConfigPropsType = {
  component: React.ElementType;
  fullLayout: Boolean;
};

const AppRouteConfig: React.FC<AppRouteConfigPropsType> = ({
  component: Component,
  fullLayout,
  ...rest
}) => {
  const context = useContext(ContextLayout);
  let LayoutTag = context.verticalLayout;

  return (
    <LayoutTag {...rest}>
      <Suspense fallback={<Spinner />}>
        {/* localStorage.getItem("token") */}
        {true ? (
          <Component {...rest} />
        ) : (
          <Navigate replace={true} to={authRoutes.LOGIN_BY_USER_NAME} />
        )}
      </Suspense>
    </LayoutTag>
  );
};

// //**Auth Route */

// type AuthConfigProps = {
//   component: React.ElementType;
// };
// const AuthRouteConfig: React.FC<AuthConfigProps> = ({
//   component: Component,
//   ...rest
// }) => {
//   const context = useContext(ContextLayout);
//   let LayoutTag = context?.verticalLayout;

//   return (
//     <LayoutTag>
//       <Suspense fallback={<Spinner />}>
//         {/* localStorage.getItem("token") */}
//         {true ? (
//           <Navigate replace={true} to={appRoutes.HOME_PAGE} />
//         ) : (
//           <Component {...rest} />
//         )}
//       </Suspense>
//     </LayoutTag>
//   );
// };

const mapStateToProps = () => {
  return {};
};

// const AuthRoute = connect(mapStateToProps, null)(AuthRouteConfig);
const AppRoute = connect(mapStateToProps, null)(AppRouteConfig);

const routes: {
  path: string;
  element: JSX.Element;
}[] = [
  //**  Home Page */
  {
    path: appRoutes.HOME_PAGE,
    element: <AppRoute component={HomePage} fullLayout={false} />,
  },

  //** Country Detail Page */
  {
    path: appRoutes.COUNTRY_DETAIL_PAGE,
    element: <AppRoute component={CountryDetail} fullLayout={false} />,
  },

  //** 404 page */
  { path: "*", element: <Page404 /> }, // Catch-all route for 404 Not Found
];

const AppRouter: FC = () => {
  const routesList = useRoutes(routes);
  return routesList;
};

export default AppRouter;
