import type { Metadata } from 'next'
import './globals.css'

import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import React from 'react'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Monte Vista Primary School',
  description: ' by create next app'Generated,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}