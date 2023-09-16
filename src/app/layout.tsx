import { Inter } from 'next/font/google'
import '@/styles/reset.css'
import '@/styles/global.css'
import "leaflet/dist/leaflet.css"
import Header from '@/components/header'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className='container'>
        <Header />
        {children}
      </body>
    </html>
  )
}
