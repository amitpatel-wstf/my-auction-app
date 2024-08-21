"use client";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = ({
  state,
  setState,
}: {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}) => {
  const router = useRouter();
  return (
    <header>
      <nav className="border-gray-200 bg-white px-4 py-2.5 lg:px-6 dark:bg-gray-800">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Admin
            </span>
          </a>

          <div
            className=" w-full items-center justify-end order-1 flex w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex font-medium mt-0  lg:space-x-8">
              <li>
                <div
                  className={`bg-primary-700 lg:hover:text-primary-700 block rounded py-2 pl-3 pr-4 text-white lg:bg-transparent lg:p-0 dark:text-white ${
                    state === "user" ? "text-primary-700" : "text-gray-700"
                  } `}
                  aria-current="page"
                  onClick={() => setState("user")}
                >
                  Users
                </div>
              </li>
              <li>
                <div
                  className={`bg-primary-700 lg:hover:text-primary-700 block rounded py-2 pl-3 pr-4 text-white lg:bg-transparent lg:p-0 dark:text-white ${
                    state === "user" ? "text-primary-700" : "text-gray-200"
                  } `}
                  onClick={() => setState("auction")}
                >
                  Auctions
                </div>
              </li>

              <li>
                <div
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  onClick={() => {
                    localStorage.removeItem("token");
                    router.push("/");
                  }}
                >
                  LogOut
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
