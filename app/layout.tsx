import '../styles/globals.css'
import React from 'react'
import Navbar from '../src/components/Navbar'

export const metadata = {
  title: 'Pulsar Funhouse',
  description: 'Neon futuristic mini games'
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body className="min-h-screen bg-[radial-gradient(800px_400px_at_10%_10%,rgba(124,58,237,0.06),transparent_10%),radial-gradient(600px_300px_at_90%_90%,rgba(34,211,238,0.04),transparent_12%),linear-gradient(180deg,#04020a_0%,#070318_100%)]">
        <Navbar />
        <main className="max-w-7xl mx-auto p-6">{children}</main>
        <footer className="mt-12 p-6 text-center text-sm text-gray-400">Built with ❤️ — Pulsar Funhouse</footer>
      </body>
    </html>
  )
}