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


export default function NavBar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [navbar, setNavbar] = useState(false);

  const active = `bg-red-600 text-white rounded-md px-3 py-2 text-sm font-bold block text-center`;
  const inactive = `text-black dark:text-white hover:bg-red-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium block text-center`;

  return (
    <nav className="bg-slate-100 dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="https://informatteo.com.ar/" className="flex items-center">
              <Image width={75} height={75} src="/logo/logo.png" alt="InforMatteo Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Infor<span className="text-red-600">Matteo</span>
              </span>
            </a>
            <div className="md:hidden flex items-center justify-center space-x-5">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <div className='flex items-center justify-center space-x-5'>
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
              </div>
              {links.map((link, index) => (
              <li key={index}>
                <Link onClick={() => setNavbar(!navbar)} href={link.route} className={pathname === link.route ? active : inactive}>
                  {link.label}
                </Link>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}