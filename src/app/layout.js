import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kehinde',
  description: 'Created by Kehinde',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <link rel="icon" type="image/svg+xml" href="/logo3.png" />
       </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
