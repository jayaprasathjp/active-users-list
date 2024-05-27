import React from "react";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <div
        className="bg-indigo-50"
        
      >
        <div className="px-6 pt-6 lg:px-8">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:flex-1"></div>

            <div className="flex  justify-end">
              <Link
                to="/UserLogin"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
              
            </div>
          </nav>
        </div>
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <div className="hero-section">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Active User List
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    "Meet some of our active users who are already enjoying the
                    benefits. Join them and start your journey today!"
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    to="/register"
                    className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Landing;
