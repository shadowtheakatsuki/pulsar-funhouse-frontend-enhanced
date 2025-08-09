import React from 'react'
import { motion } from 'framer-motion'

type Game = {
  id: number
  title: string
  description: string
  color?: string
}

export default function GameCard({ game }: { game: Game }){
  return (
    <motion.article whileHover={{ scale:1.02 }} whileTap={{ scale:0.99 }} className="group glass rounded-2xl overflow-hidden shadow-xl border border-transparent hover:border-white/6 transition">
      <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.45 }} className="p-4">
        <div className="relative h-44 w-full rounded-lg overflow-hidden bg-gradient-to-br from-[#1b0632] to-[#2b082f]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl font-bold text-white/90">{game.title.charAt(0)}</div>
          </div>
          <div className="absolute left-3 top-3 px-3 py-1 rounded-full text-xs text-white/90 bg-black/20 border border-white/6">{game.title}</div>
        </div>

        <h3 className="mt-4 text-xl font-semibold">{game.title}</h3>
        <p className="text-gray-300 mt-1 text-sm">{game.description}</p>

        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white font-semibold shadow hover:scale-105 transition">Play</button>
          <button className="px-3 py-2 rounded-lg bg-white/6 text-sm text-gray-200">Info</button>
        </div>
      </motion.div>
    </motion.article>
  )
}