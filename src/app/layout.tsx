import Navegacion from '@/components/shared/Navbar';
import './globals.css'
import { Roboto  } from 'next/font/google'
import 'animate.css'
import Footer from '@/components/shared/Footer';
import {Providers} from './providers';


const roboto = Roboto({
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
      <head></head>
      <body className={`${roboto.className} bg-slate-100 dark:bg-slate-900 scrollbar-thin scrollbar-thumb-red-600 scrollbar-rounded mx-24`} >
        <Providers>
          <Navegacion />
          <main className="flex mx-7 dark:text-white flex-col items-center justify-between">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
