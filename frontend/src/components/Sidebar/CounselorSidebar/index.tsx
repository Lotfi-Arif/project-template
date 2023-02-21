import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NotificationDropdown from "src/components/Dropdowns/NotificationsDropdown";
import UserDropdown from "src/components/Dropdowns/Userdropdown";
import { BackspaceIcon, LoginIcon, TemplateIcon, TicketIcon, UserCircleIcon, UserIcon, UsersIcon } from "@heroicons/react/outline";
import { useCookies } from "react-cookie";

export default function CounselorSidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const [cookie] = useCookies(["user"])
  const router = useRouter();

  return (
    <>

      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-[#18344D] flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="cib-next-js"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              Counselor Dashboard
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      Counselor Dashboard
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-gray-200 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Counselor Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/pages/counselor/">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/pages/counselor") !== -1
                        ? "text-white hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-500")
                    }
                  >
                    <TemplateIcon className="items-center inline-flex h-5 w-5 m-2" />
                    Overview
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/pages/counselor/myschedule">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/pages/counselor/approveusers") !== -1
                        ? "text-white hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-500")
                    }
                  >
                    <UsersIcon className="items-center inline-flex h-5 w-5 m-2" />
                    My Schedule
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Auth Pages
            </h6>
            {/* Navigation */}

            {
              cookie.user ?
                <div> </div> :
                <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                  <li className="items-center">
                    <Link href="/login">
                      <a
                        href="#pablo"
                        className="text-white hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                      >
                        <LoginIcon className="items-center inline-flex h-5 w-5 m-2" />
                        Login
                      </a>
                    </Link>
                  </li>

                  <li className="items-center">
                    <Link href="/register">
                      <a
                        href="#pablo"
                        className="text-white hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                      >
                        <UserIcon className="items-center inline-flex h-5 w-5 m-2" />
                        Register
                      </a>
                    </Link>
                  </li>
                </ul>}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/">
                  <a
                    href="#pablo"
                    className="text-white hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <BackspaceIcon className="items-center inline-flex h-5 w-5 m-2" />
                    Return to Landing Page
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
