"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const languages = [
  { name: 'JavaScript', color: '#f1e05a', percentage: 40 },
  { name: 'Python', color: '#3572A5', percentage: 30 },
  { name: 'TypeScript', color: '#2b7489', percentage: 15 },
  { name: 'HTML', color: '#e34c26', percentage: 10 },
  { name: 'CSS', color: '#563d7c', percentage: 5 },
]

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Top Languages</h2>
      <div className="space-y-4">
        {languages.map((lang, index) => (
          <motion.div
            key={lang.name}
            initial={{ width: 0, opacity: 0 }}
            animate={isVisible ? { width: `${lang.percentage}%`, opacity: 1 } : {}}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="relative h-8 bg-gray-700 rounded-full overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 flex items-center"
              style={{ backgroundColor: lang.color }}
              initial={{ x: '-100%' }}
              animate={isVisible ? { x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.5, ease: 'easeOut' }}
            >
              <span className="text-xs font-semibold text-white px-2">
                {lang.name} ({lang.percentage}%)
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-4 text-center text-white text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: languages.length * 0.2 + 1 }}
      >
        Based on GitHub stats for username
      </motion.div>
    </div>
  )
}
