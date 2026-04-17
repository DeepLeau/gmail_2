'use client'
import { motion } from 'framer-motion'
import { Link, Database, MessageSquare } from 'lucide-react'
import { HOW_IT_WORKS_STEPS } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  'link': Link,
  'database': Database,
  'message-square': MessageSquare
}

export function HowItWorks() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl md:text-5xl font-medium tracking-tight mb-16 text-white md:text-center"
          style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}
        >
          Comment ça marche
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const IconComponent = iconMap[step.icon] || MessageSquare
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="group relative rounded-3xl p-8 bg-black/40 border border-white/5 hover:border-blue-500/20 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl font-bold opacity-20 text-blue-500 mb-4" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
                    0{step.step}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-900/50 transition-colors">
                    <IconComponent size={20} strokeWidth={1.5} className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight text-white mb-3" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-neutral-200 font-normal text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
