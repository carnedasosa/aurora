import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Aurora Tesoro Nail | Nail Artist & Educator a Sannicandro di Bari',
  description: 'Trattamenti unghie premium a Sannicandro di Bari. Nail Artist & Educator con esperienza professionale. Semipermanente, gel, ricostruzione e nail art raffinata.',
  keywords: 'nail artist sannicandro di bari, unghie gel sannicandro di bari, semipermanente bari provincia, ricostruzione unghie, nail art',
  openGraph: {
    title: 'Aurora Tesoro Nail | Nail Artist & Educator',
    description: 'Eleganza, tecnica e cura in ogni dettaglio. Trattamenti unghie premium a Sannicandro di Bari.',
    locale: 'it_IT',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
