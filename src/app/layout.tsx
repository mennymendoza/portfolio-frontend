import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juan Mendoza',
  description: 'Portfolio App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
