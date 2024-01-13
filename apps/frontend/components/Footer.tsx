import Link from 'next/link';
import React from 'react';
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMapPinLine,
  RiMessage2Line,
  RiPhoneLine,
  RiShoppingBasket2Fill,
  RiTwitterFill,
} from 'react-icons/ri';

function Footer() {
  return (
    <footer className="bg-white border-t border-t-gray-300 mt-20">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-secondary sm:justify-start">
              <Link
                href={'/'}
                className="flex items-center gap-2 text-secondary text-xl font-semibold"
              >
                <RiShoppingBasket2Fill fontSize={30} />
                <span className="pt-0.5">Basket</span>
              </Link>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <Link href="#">
                  <RiFacebookCircleFill
                    fontSize={26}
                    className="text-secondary transition hover:text-secondary/75"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <RiInstagramLine
                    fontSize={26}
                    className="text-secondary transition hover:text-secondary/75"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <RiLinkedinFill
                    fontSize={26}
                    className="text-secondary transition hover:text-secondary/75"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <RiTwitterFill
                    fontSize={26}
                    className="text-secondary transition hover:text-secondary/75"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">About Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Find Store
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Locations
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Blogs & News
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Affiliate Service
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Informations</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Help Center
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Refund Queries
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Shipping QnA
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Support</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <RiMessage2Line fontSize={18} />

                    <span className="flex-1 text-gray-700">john@doe.com</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <RiPhoneLine fontSize={18} />

                    <span className="flex-1 text-gray-700">0123456789</span>
                  </Link>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <RiMapPinLine fontSize={18} />

                  <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                    213 Lane, London, United Kingdom
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <div className="text-sm text-gray-500 flex items-center gap-3">
              <Link
                className="inline-block text-secondary transition hover:text-secondary/75"
                href="/"
              >
                Terms & Conditions
              </Link>
              <Link
                className="inline-block text-secondary transition hover:text-secondary/75"
                href="/"
              >
                Privacy Policy
              </Link>
            </div>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2023 Basket
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
