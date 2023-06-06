import { links } from "@/constants/menu";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 static bottom-0 sm:mx-0 md:mx-4 lg:mx-6">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://informatteo.com.ar/" className="hover:underline">InforMatteo™</a>. Todos los Derechos Reservados.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link href={link.route} className='mr-4 hover:underline md:mr-6'>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}