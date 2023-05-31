'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '@/hooks/useTheme';

const links = [
    {
        label:  'Inicio',
        route: '/'
    },
    {
        label:  'Sobre',
        route: '/about'
    },
    {
        label:  'Blog',
        route: '/blog'
    },
    {
        label:  'Contato',
        route: '/contact'
    }
]

export default function Navbar() {
    const pathname = usePathname();    
    const { theme, toggleTheme } = useTheme();

    const active = 'bg-red-600 text-white rounded-md px-3 py-2 text-sm font-medium';
    const inactive = 'text-black dark:text-white hover:bg-red-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium';

    return (
        <nav className="bg-slate-100 dark:bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {/* <!--
                            Icon when menu is closed.

                            Menu open: "hidden", Menu closed: "block"
                        --> */}
                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        {/* <!--
                            Icon when menu is open.

                            Menu open: "block", Menu closed: "hidden"
                        --> */}
                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                            {
                                links.map(({ label, route }) => (
                                    <Link href={route} key={label} className={ pathname === route ? active : inactive }>
                                        {label}
                                    </Link>
                                ))
                            }
                            {/* <Link href="#" className={ pathname === '/' ? active : inactive }>Dashboard</Link>
                            <Link href="#" className={ pathname === '/team' ? active : inactive}>Team</Link>
                            <Link href="#" className={ pathname === '/projects' ? active : inactive }>Projects</Link>
                            <Link href="#" className={ pathname === '/calendar' ? active : inactive }>Calendar</Link> */}
                        </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button onClick={toggleTheme} type="button" className="rounded-full dark:bg-gray-800 p-1 text-gray-400 hover:text-white">
                            {
                                theme === 'light' ? (
                                    <FaSun 
                                        width={25}
                                        height={25}
                                    />
                                )
                                : (
                                    <FaMoon
                                    />
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link href="#" className={ pathname === '/' ? active : inactive }>Dashboard</Link>
                <Link href="#" className={ pathname === '/team' ? active : inactive}>Team</Link>
                <Link href="#" className={ pathname === '/projects' ? active : inactive }>Projects</Link>
                <Link href="#" className={ pathname === '/calendar' ? active : inactive }>Calendar</Link>
                </div>
            </div>
            </nav>

    )
}