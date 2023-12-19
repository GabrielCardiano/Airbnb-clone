// Layout component is by default a server component

import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'
 import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'
 

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb clone app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser =  await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
