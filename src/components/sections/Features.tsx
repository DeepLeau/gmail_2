'use client'
import { motion } from 'framer-motion'
import { Search, Brain, TrendingUp, Network, Database, Layers, MessageSquare, Zap } from 'lucide-react'
import { FEATURES } from '@/lib/data'
import type { Feature } from '@/types'

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  'search': Search,
  'brain': Brain,
  'trending-up': TrendingUp,
  'network': Network,
  'database': Database,
  'layers': Layers,
  'message-square': MessageSquare,
  'zap': Zap
}

export function Features() {
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
            Ce que MailMind fait pour toi.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="text-neutral-200 text-sm md:text-lg font-normal"
          >
            Pas besoin de savoir ce que tu cherches. Pose la question.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature: Feature, i: number) => {
            const IconComponent = iconMap[feature.icon] || Search
            const isLarge = feature.span === 2
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className={`group relative rounded-3xl p-8 bg-black/40 border border-white/5 hover:border-blue-500/20 transition-all duration-500 overflow-hidden ${isLarge ? 'md:col-span-2' : ''} ${i === 3 ? 'md:col-span-2' : ''}`}
                style={{ minHeight: isLarge ? '400px' : 'auto' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-white group-hover:bg-blue-900/50 group-hover:text-blue-400 transition-colors">
                      <IconComponent size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight text-white mb-3" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
                      {feature.title}
                    </h3>
                    <p className="text-neutral-200 font-normal text-sm max-w-md">
                      {feature.description}
                    </p>
                  </div>

                  {/* Visual placeholder based on feature type */}
                  {feature.icon === 'search' && (
                    <div className="mt-10 relative">
                      <div className="flex gap-3 overflow-hidden" style={{ maskImage: 'linear-gradient(to right, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)' }}>
                        <div className="bg-neutral-800/80 rounded-lg p-4 w-64 border border-white/5 backdrop-blur-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
                            <div>
                              <div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
                              <div className="h-2 w-12 bg-white/10 rounded"></div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-xs font-normal text-neutral-300 flex justify-between">
                              <span>Pertinence</span>
                              <span className="text-blue-400 font-medium">98%</span>
                            </div>
                            <div className="h-1 w-full bg-neutral-700 rounded-full overflow-hidden">
                              <div className="h-full w-[98%] bg-blue-400 shadow-[0_0_10px_#3b82f6]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-neutral-800/80 rounded-lg p-4 w-64 border border-white/5 backdrop-blur-sm opacity-60">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-cyan-500/20"></div>
                            <div>
                              <div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
                              <div className="h-2 w-12 bg-white/10 rounded"></div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-xs font-normal text-neutral-300 flex justify-between">
                              <span>Pertinence</span>
                              <span className="text-cyan-400 font-medium">94%</span>
                            </div>
                            <div className="h-1 w-full bg-neutral-700 rounded-full overflow-hidden">
                              <div className="h-full w-[94%] bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.icon === 'brain' && (
                    <div className="mt-10 flex items-center justify-center h-32">
                      <div className="relative w-32 h-32">
                        {/* Central node */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                          <Brain size={18} strokeWidth={1.5} />
                        </div>
                        {/* Connection nodes */}
                        <div className="absolute w-4 h-4 rounded-full bg-neutral-700 border border-white/20 left-0 top-1/2 -translate-y-1/2"></div>
                        <div className="absolute w-4 h-4 rounded-full bg-neutral-700 border border-white/20 right-0 top-1/2 -translate-y-1/2"></div>
                        <div className="absolute w-4 h-4 rounded-full bg-neutral-700 border border-white/20 left-1/2 top-0 -translate-x-1/2"></div>
                        <div className="absolute w-4 h-4 rounded-full bg-neutral-700 border border-white/20 left-1/2 bottom-0 -translate-x-1/2"></div>
                        {/* Lines */}
                        <div className="absolute left-1/2 top-1/2 w-full h-px bg-neutral-700 -translate-y-1/2"></div>
                        <div className="absolute left-0 top-1/2 w-full h-px bg-neutral-700 -translate-y-1/2"></div>
                      </div>
                    </div>
                  )}

                  {feature.icon === 'trending-up' && (
                    <div className="mt-10 flex items-end gap-2 h-24 px-4">
                      <div className="w-full bg-neutral-800 rounded-t-sm h-[30%] group-hover:h-[40%] transition-all duration-700"></div>
                      <div className="w-full bg-neutral-800 rounded-t-sm h-[50%] group-hover:h-[65%] transition-all duration-700"></div>
                      <div className="w-full bg-neutral-800 rounded-t-sm h-[40%] group-hover:h-[45%] transition-all duration-700"></div>
                      <div className="w-full bg-neutral-800 rounded-t-sm h-[70%] group-hover:h-[80%] transition-all duration-700"></div>
                      <div className="w-full bg-blue-500 rounded-t-sm h-[55%] group-hover:h-[90%] transition-all duration-700 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                    </div>
                  )}

                  {feature.icon === 'network' && (
                    <div className="mt-10 relative h-32 w-full">
                      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      </svg>
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                      <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-neutral-700 border border-white/20"></div>
                      <div className="absolute left-3/4 top-1/4 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-neutral-700 border border-white/20"></div>
                      <div className="absolute left-1/4 top-3/4 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-neutral-700 border border-white/20"></div>
                      <div className="absolute left-3/4 top-3/4 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-neutral-700 border border-white/20"></div>
                      <div className="absolute left-1/2 top-[15%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-neutral-700 border border-white/20"></div>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
