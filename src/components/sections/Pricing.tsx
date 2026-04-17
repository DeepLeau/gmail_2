'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { PRICING_PLANS } from '@/lib/data'

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 relative overflow-hidden">
      {/* Hook */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-neutral-800"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
            Choisis ton plan
          </h2>
          <p className="text-neutral-200 text-sm md:text-lg font-normal max-w-2xl mx-auto mb-10">
            Commence gratuit. Passe à Pro quand tu veux.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.15 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-blue-950/30 to-black/40 backdrop-blur-[12px] border border-blue-500/20 shadow-[0_0_30px_-10px_rgba(37,99,235,0.2)] md:-mt-8'
                  : 'bg-black/40 backdrop-blur-[12px] border border-white/[0.08] hover:border-white/15'
              } transition-colors`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-600 shadow-[0_0_15px_rgba(124,58,237,0.5)] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wide uppercase">
                  Recommandé
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-medium tracking-tight text-white mb-2" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-medium text-white tracking-tight" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-neutral-400 font-normal">{plan.period}</span>
                  )}
                </div>
                <p className="text-neutral-200 text-sm font-normal mt-4">{plan.description}</p>
              </div>
              
              <div className="h-px w-full bg-white/10 mb-6"></div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-white font-normal">
                    <Check size={16} strokeWidth={1.5} className={plan.highlighted ? 'text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]' : 'text-neutral-400'} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-xl font-medium text-sm transition-colors ${
                plan.highlighted
                  ? 'bg-white text-black hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'bg-neutral-800 text-white hover:bg-neutral-700 border border-white/5'
              }`}>
                {plan.id === 'free' ? 'Commencer gratuit' : 'Choisir Pro'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
