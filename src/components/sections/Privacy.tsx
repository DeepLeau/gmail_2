'use client'
import { motion } from 'framer-motion'
import { Eye, ShieldCheck, Power } from 'lucide-react'
import { PRIVACY_POINTS } from '@/lib/data'

const icons = [Eye, ShieldCheck, Power]

export function Privacy() {
  return (
    <section className="py-24 px-6 relative" style={{ backgroundColor: '#111118' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl md:text-5xl font-medium tracking-tight mb-16 text-white md:text-center flex items-center justify-center gap-4"
          style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}
        >
          <ShieldCheck size={32} strokeWidth={1.5} className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
          Tes emails restent les tiens.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRIVACY_POINTS.map((point, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="bg-[#111118] border border-white/5 rounded-2xl p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-6">
                  <Icon size={24} strokeWidth={1.5} className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
                </div>
                <h3 className="text-xl font-medium tracking-tight text-white mb-3" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
                  {point.title}
                </h3>
                <p className="text-neutral-300 font-normal text-sm">
                  {point.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
