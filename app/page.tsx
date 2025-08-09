'use client'
import React from 'react'
import { motion } from 'framer-motion'
// Ensure the GameCard component exists at ../components/GameCard.tsx or update the path below if needed
import GameCard from '../src/components/GameCard'
import { GAMES } from '../src/data/games'

export default function Home(){
  return (
    <div>
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Pulsar Funhouse</h1>
          <p className="text-gray-300 mt-2 max-w-xl">A collection of playful mini games with a neon futuristic sheen. Hover and scroll for micro-interactions.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink font-semibold shadow-lg hover:brightness-110 active:scale-95 transition">Play</button>
          <button className="px-5 py-3 rounded-full glass border-neon text-white/90">Explore</button>
        </div>
      </section>

      <section>
        <motion.div initial="hidden" animate="show" variants={{ show:{ transition:{ staggerChildren:0.06 }}}} className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((g)=> (
            <GameCard key={g.id} game={g} />
          ))}
        </motion.div>
      </section>
    </div>
  )
}