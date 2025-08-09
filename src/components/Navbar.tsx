import React from 'react'
import Link from 'next/link'

export default function Navbar(){
  return (
    <header className="p-4 max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl border-neon">
          <div className="h-full w-full flex items-center justify-center bg-[#070318] rounded-xl">
            <span className="font-bold text-lg">PF</span>
          </div>
        </div>
        <div>
          <Link href="/" className="text-xl font-semibold">Pulsar Funhouse</Link>
          <div className="text-sm text-gray-400">neon mini-games</div>
        </div>
      </div>

      <nav className="flex items-center gap-3">
        <a className="text-gray-300 hover:text-white" href="#">Games</a>
        <a className="text-gray-300 hover:text-white" href="#">Lab</a>
        <a className="text-gray-300 hover:text-white" href="#">About</a>
      </nav>
    </header>
  )
}