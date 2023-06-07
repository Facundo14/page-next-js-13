'use client'

import { usePathname } from 'next/navigation';
import Image from "next/image";
import { MoonIcon } from '../icons/MoonIcon';
import { SunIcon } from '../icons/SunIcon';
import Link from 'next/link';
import { links } from '@/constants/menu';
import FacebookIcon from '../icons/FacebookIcon';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navegacion() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const active = `bg-red-600 text-white rounded-md px-3 py-2 text-sm font-bold ${
    navbarOpen ? "block my-4 text-center" : ""
  }`;
  const inactive = `text-black dark:text-white hover:bg-red-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
    navbarOpen ? "block my-4 text-center" : ""
  }`;

  return (
    <nav className="bg-slate-100 dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://informatteo.com.ar/" className="flex items-center">
          <Image width={75} height={75} src="/logo/logo.png" alt="InforMatteo Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Infor<span className="text-red-600">Matteo</span>
          </span>
        </a>

        <div className="flex md:order-2 items-center justify-center space-x-5">
          <Link href="https://www.instagram.com/informatteosistemas/" target="_blank">
            <Image width={30} height={30} src="/icons/instagram-color-icon.svg" alt="InstagramLogo" />
          </Link>
          <FacebookIcon fill="#1877F2" />
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-black dark:text-white hover:bg-red-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`w-full justify-center md:w-auto md:flex md:flex-grow ${
            navbarOpen ? "flex" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 ${
              navbarOpen ? "block w-full" : "hidden"
            } md:p-0 mt-4 font-medium border rounded-lg bg-gray-50 sm:flex-row md:flex-bl md:mt-0 md:border-0 md:bg-slate-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 lg:flex lg:flex-row`}
          >
            {links.map((link, index) => (
              <li key={index}>
                <Link onClick={() => setNavbarOpen(false)} href={link.route} className={pathname === link.route ? active : inactive}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
