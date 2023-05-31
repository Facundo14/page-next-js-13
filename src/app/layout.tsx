import Navegacion from '@/components/shared/Navbar';
import './globals.css'
import { Roboto  } from 'next/font/google'

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
      <body className={`${roboto.className} bg-slate-100 dark:bg-slate-900 scrollbar-thin scrollbar-thumb-red-600 scrollbar-rounded `} >
        <Navegacion />
        <main className="flex h-full border-cyan-300 border-2 dark:text-white flex-col items-center justify-between mx-24">
          {children}
        </main>
      </body>
    </html>
  )
}
