import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Layout } from "./utilities/context/Layouts";
import GlobalLoader from "./components/loaders/GlobalLoader";
import { BrowserRouter } from "react-router-dom";

// // toast container
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./layouts/ErrorBoundary";

const LazyApp = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<GlobalLoader />}>
          <Layout>
            <ToastContainer />
            <LazyApp />
          </Layout>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>
);
