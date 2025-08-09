import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 p-6 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Pulsar Funhouse — futuristic experiments
    </footer>
  )
}