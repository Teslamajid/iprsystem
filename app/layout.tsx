import './globals.css'
import { Inter } from 'next/font/google'
import { IPRProvider } from './context/IPRContext'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sierra Leone IPR Registration',
  description: 'Register and manage Intellectual Property Rights in Sierra Leone',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <IPRProvider>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </IPRProvider>
      </body>
    </html>
  )
}

