import { Navbar } from '../../components/Navbar'
import './globals.css'
import Footer from '../../components/Footer'
import Head from 'next/head'


export const metadata = {
  title: 'Portfolio',
  description: 'Hebbs portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Head>
      <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
        <Navbar/>
        {children} 
        <Footer/>
        </body>
    </html>
  )
}
