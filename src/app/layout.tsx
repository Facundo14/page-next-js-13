import Navbar from '@/components/shared/Navbar';
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
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
