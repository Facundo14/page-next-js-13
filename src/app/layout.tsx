import Navegacion from '@/components/shared/Navbar';
import './globals.css'
import { Raleway } from 'next/font/google'
import 'animate.css'
import Footer from '@/components/shared/Footer';
import {Providers} from './providers';


const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </head>
      <body className={`${raleway.className} bg-slate-100 dark:bg-slate-900 scrollbar-thin scrollbar-thumb-red-600 scrollbar-rounded sm:mx-4 md:mx-8 lg:mx-12 xl:mx-24`} >
        <Providers>
          <Navegacion />
          <main className="flex mx-7 dark:text-white flex-col items-center justify-between sm:mx-0 md:mx-4 lg:mx-6 xl:mx-12">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
