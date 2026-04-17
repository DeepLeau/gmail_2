'use client'
import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, Search, Inbox, Users, Settings, MessageSquare } from 'lucide-react'
import { CHAT_MESSAGES } from '@/lib/data'
import type { ChatMessage } from '@/types'

function ChatMessageComponent({ question, answer, delay }: { question: string; answer: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ delay: delay * 0.8, duration: 0.5, ease: 'easeOut' }}
      className="space-y-4"
    >
      {/* Question (user) */}
      <div className="flex justify-end">
        <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-br-md bg-blue-600/20 border border-blue-500/30">
          <p className="text-sm text-blue-100">{question}</p>
        </div>
      </div>
      {/* Answer (assistant) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay * 0.8 + 0.3, duration: 0.3 }}
        className="flex justify-start"
      >
        <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-bl-md bg-[#111] border border-white/10">
          <p className="text-sm text-neutral-200 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <header className="min-h-screen flex flex-col overflow-hidden pt-32 pr-6 pb-20 pl-6 relative items-center justify-center">
      {/* Noise Texture */}
      <div className="fixed inset-0 z-50 opacity-40 mix-blend-overlay" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
        pointerEvents: 'none'
      }} />

      <div className="max-w-4xl mx-auto text-center z-10 transition-all duration-1000 transform translate-y-0 opacity-100">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 mb-8 shadow-[0_0_10px_rgba(37,99,235,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 shadow-[0_0_8px_#2563eb]"></span>
          </span>
          Votre boîte mail. transformée en assistant.
        </motion.div>
        
        {/* H1 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[0.95] bg-gradient-to-br from-white to-neutral-200 bg-clip-text text-transparent"
          style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}
        >
          Vos emails. <br />
          <span className="text-white/60 italic font-serif tracking-tight">parlent enfin.</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-200 font-normal max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Pose une question en français. Obtiens une réponse tirée de tes vrais échanges, en secondes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-sm transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Connecter ma boîte mail <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button className="px-8 py-4 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-full text-neutral-100 font-medium text-sm hover:text-white flex items-center gap-2 group">
            <PlayCircle size={16} strokeWidth={1.5} className="text-neutral-300 group-hover:text-blue-400 transition-colors" />
            Voir une démo
          </button>
        </motion.div>
      </div>

      {/* Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        className="w-full max-w-6xl mt-24 relative"
      >
        {/* Energy Drop */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-blue-700/40 overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-transparent to-blue-600 drop-animation"></div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent shadow-[0_0_8px_rgba(37,99,235,0.4)] z-20"></div>

        <div className="-top-20 -translate-x-1/2 blur-[100px] -z-10 bg-blue-600/5 w-[80%] h-[200px] rounded-full absolute left-1/2"></div>
        
        <div className="backdrop-blur-[12px] border-white/[0.08] border rounded-2xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative z-10">
          <div className="overflow-hidden flex flex-col bg-[#050505] border-white/10 border rounded-xl" style={{ height: '550px' }}>
            
            {/* Top App Bar */}
            <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-[#080808] shrink-0">
              <div className="flex items-center gap-2 w-1/4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50 border border-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50 border border-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50 border border-green-500/20"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-sm text-neutral-300 font-normal flex-1">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-300 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
                  MailMind
                </div>
                <span className="text-neutral-500">/</span>
                <span>assistant</span>
              </div>

              <div className="flex items-center justify-end gap-5 text-neutral-300 w-1/4">
                <Search size={16} strokeWidth={1.5} className="hover:text-white transition-colors cursor-pointer" />
                <Settings size={16} strokeWidth={1.5} className="hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Main App Area */}
            <div className="flex flex-1 overflow-hidden">
              
              {/* Left Sidebar */}
              <div className="w-64 border-r border-white/5 bg-[#080808] flex flex-col shrink-0 relative z-20">
                <div className="p-5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    <Inbox size={16} strokeWidth={2} />
                  </div>
                  <span className="text-white font-semibold text-sm tracking-tight">MailMind</span>
                </div>

                <div className="px-4 mb-6">
                  <div className="bg-[#111] border border-white/5 rounded-md px-3 py-2 flex items-center gap-2 text-neutral-300">
                    <Search size={14} strokeWidth={1.5} />
                    <span className="text-xs font-normal">Rechercher...</span>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-3 space-y-6">
                  <div className="">
                    <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2 px-2">Navigation</div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 px-2 py-1.5 rounded-md text-white bg-white/5 border-l-2 border-blue-500 transition-colors cursor-pointer text-sm font-semibold">
                        <Inbox size={16} strokeWidth={1.5} className="text-blue-400" />
                        Ma boîte
                      </div>
                      <div className="flex items-center gap-3 px-2 py-1.5 rounded-md text-neutral-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer text-sm font-normal">
                        <Search size={16} strokeWidth={1.5} />
                        Recherche
                      </div>
                      <div className="flex items-center gap-3 px-2 py-1.5 rounded-md text-neutral-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer text-sm font-normal">
                        <Users size={16} strokeWidth={1.5} />
                        Contacts
                      </div>
                      <div className="flex items-center gap-3 px-2 py-1.5 rounded-md text-neutral-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer text-sm font-normal">
                        <Settings size={16} strokeWidth={1.5} />
                        Paramètres
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Profile */}
                <div className="p-4 border-t border-white/5 mt-auto flex items-center gap-3 cursor-pointer hover:bg-white/5 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xs text-white font-semibold">JD</div>
                  <div className="flex-1">
                    <div className="text-sm text-white font-semibold tracking-tight">Jean Dupont</div>
                    <div className="text-xs text-neutral-300 font-normal">jean@acme.com</div>
                  </div>
                </div>
              </div>

              {/* Center Chat Area */}
              <div className="flex-1 bg-[#030303] relative overflow-hidden flex flex-col z-10">
                {/* Dot Grid */}
                <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                
                {/* Chat Header */}
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-30 pointer-events-none">
                  <div className="flex items-center gap-2 text-sm text-neutral-200 font-normal pointer-events-auto">
                    <MessageSquare size={16} strokeWidth={1.5} />
                    <span className="text-white font-semibold">Assistant MailMind</span>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="relative w-full h-full overflow-x-auto overflow-y-hidden pt-16 pb-12 px-6">
                  <div className="w-full space-y-6">
                    {CHAT_MESSAGES.map((msg: ChatMessage, i: number) => (
                      <ChatMessageComponent key={i} question={msg.question} answer={msg.answer} delay={i} />
                    ))}
                  </div>
                </div>

                {/* Input Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-14 border-t border-white/5 bg-[#080808]/80 backdrop-blur-md flex items-center px-4 z-20">
                  <div className="flex-1 bg-[#111] border border-white/10 rounded-full px-4 py-2 flex items-center gap-2">
                    <span className="text-sm text-neutral-400">Pose ta question ici...</span>
                  </div>
                </div>
              </div>

              {/* Right Sidebar (Stats) */}
              <div className="w-80 border-l border-white/5 bg-[#080808] flex flex-col shrink-0 relative z-20 overflow-y-auto">
                <div className="p-6 border-b border-white/5">
                  <h2 className="text-base text-white font-semibold tracking-tight mb-1">Stats MailMind</h2>
                  <p className="text-xs text-neutral-300 font-normal flex items-center gap-1.5">
                    Depuis le dernier indexing
                  </p>
                </div>

                <div className="p-5 flex-1 space-y-6">
                  <div className="bg-[#0c0c0c] border border-white/5 rounded-xl p-4">
                    <div className="text-xs text-neutral-300 uppercase tracking-widest font-semibold mb-3">Emails indexés</div>
                    <div className="text-3xl font-semibold text-white tracking-tight">12,847</div>
                  </div>

                  <div className="bg-[#0c0c0c] border border-white/5 rounded-xl p-4">
                    <div className="text-xs text-neutral-300 uppercase tracking-widest font-semibold mb-3">Contacts découverts</div>
                    <div className="text-3xl font-semibold text-white tracking-tight">342</div>
                  </div>

                  <div className="bg-[#0c0c0c] border border-white/5 rounded-xl p-4">
                    <div className="text-xs text-neutral-300 uppercase tracking-widest font-semibold mb-3">Questions ce mois</div>
                    <div className="text-3xl font-semibold text-blue-400 tracking-tight">47</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
