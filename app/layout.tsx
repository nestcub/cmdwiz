import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CmdWiz: CLI Learning Mobile Web App',
  description: 'Master command-line tools through interactive learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}