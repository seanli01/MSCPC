import React from "react";
import {
  IconBrandFacebookFilled,
  IconBrandLinkedinFilled,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-16">
        <div className="lg:flex lg:justify-between">
          <div className="mb-12 lg:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/logo.png"
                alt="ms chughtai logo"
                sizes="100%"
                width={200}
                height={60}
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 lg:gap-20">
            <div>
              <h2 className="mb-6 text-md md:text-lg font-medium text-gray-700 uppercase">
                Services
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Tax Planning
                  </Link>
                </li>

                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Payroll
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md md:text-lg font-medium text-gray-700 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500">
                <li>
                  <a href="#" className="hover:underline">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md md:text-lg font-medium text-gray-700 uppercase">
                About
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-200 sm:mx-auto lg:mb-12 lg:mt-32" />
        <div className="sm:flex sm:items-center sm:justify-between lg:max-w-3xl lg:mx-auto">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2025{" "}
            <Link href="/" className="hover:underline">
              MS Chughtai Professional Corporation
            </Link>
            . All Rights Reserved
          </span>
          <div className="flex sm:justify-center gap-x-6 mt-8 sm:mt-0">
            <a href="#" target="_blank" className="text-gray-400 hover:primary">
              <IconBrandLinkedinFilled className="w-6 h-6 md:w-7 md:h-7" />
              <span className="sr-only">LinkedIn page</span>
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:primary">
              <IconBrandFacebookFilled className="w-6 h-6 md:w-7 md:h-7" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:primary">
              <IconBrandTwitterFilled className="w-6 h-6 md:w-7 md:h-7" />
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
