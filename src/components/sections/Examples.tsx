'use client'
import { motion } from 'framer-motion'
import { MessageCircle, Search, Brain, FileText, TrendingUp, Target, Mail } from 'lucide-react'
import { EXAMPLE_QUESTIONS } from '@/lib/data'
import type { ExampleQuestion } from '@/types'

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  'users': MessageCircle,
  'brain': Brain,
  'file-text': FileText,
  'trending-up': TrendingUp,
  'target': Target,
  'mail': Mail
}

export function Examples() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white"
            style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}
          >
            Ce que tu peux demander
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="text-neutral-200 text-sm md:text-lg font-normal"
          >
            Des questions concrètes. Des réponses réelles.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXAMPLE_QUESTIONS.map((q: ExampleQuestion, i: number) => {
            const IconComponent = iconMap[q.icon] || MessageCircle
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="group relative rounded-2xl p-5 bg-black/40 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <IconComponent size={18} strokeWidth={1.5} className="text-blue-400 mb-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  <p className="text-sm text-neutral-100 leading-relaxed">{q.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
