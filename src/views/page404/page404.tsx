import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../../router/routesList";

const page404: React.FC = () => {
  return (
    <main className="flex-1 flex flex-col justify-center items-center h-screen w-screen place-items-center bg-white dark:bg-black-russian ">
      <div className="text-center">
        <p className="text-base font-semibold text-primary text-18">404</p>
        <h1 className="mt-4 text-3 font-bold tracking-tight text-gray-900 dark:text-white  text-32">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={appRoutes.HOME_PAGE}
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 dark:text-gray-400"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default page404;
