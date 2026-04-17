'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { USE_CASES } from '@/lib/data'

export function UseCases() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white md:text-center"
          style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}
        >
          Fait pour toi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="text-neutral-200 text-sm md:text-lg font-normal md:text-center mb-16"
        >
          Chaque profil. Son cas d'usage.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="group relative rounded-3xl p-8 bg-[#0c0c0c] border border-white/5 hover:border-violet-500/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-violet-500/10 border border-violet-500/20 text-violet-300 mb-4">
                  {useCase.profile}
                </span>
                <h3 className="text-2xl font-medium tracking-tight text-white mb-4" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
                  {useCase.title}
                </h3>
                <ul className="space-y-3">
                  {useCase.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-neutral-200 font-normal">
                      <Check size={16} strokeWidth={1.5} className="text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)] shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
