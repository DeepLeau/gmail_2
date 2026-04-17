'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto text-center relative"
      >
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-white relative z-10" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
          Pose ta première question dans 2 minutes.
        </h2>
        <div className="flex flex-col items-center gap-6 relative z-10">
          <button className="group relative px-10 py-4 bg-white text-black rounded-full font-semibold text-sm transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <span className="relative z-10 flex items-center gap-2">
              Connecter ma boîte mail gratuitement <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <p className="text-xs text-neutral-300 uppercase tracking-widest font-normal">
            Gratuit · Aucune carte requise · Déconnexion en un clic
          </p>
        </div>
      </motion.div>
    </section>
  )
}
