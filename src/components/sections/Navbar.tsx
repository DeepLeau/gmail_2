import { Inbox, ArrowRight, PlayCircle, User, Settings, Search } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center py-6">
      <div className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] rounded-full px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <span className="text-2xl tracking-tight text-white" style={{ fontFamily: 'var(--font-agbalumo), system-ui', paddingBottom: '2px' }}>M</span>
          </div>
          <span className="font-semibold text-lg tracking-tight hidden sm:block text-white">MailMind</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-200">
          <a href="#features" className="hover:text-white transition-colors duration-300">Fonctionnalités</a>
          <a href="#pricing" className="hover:text-white transition-colors duration-300">Tarifs</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-neutral-200 hover:text-white transition-colors">Connexion</button>
          <button className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">
            Commencer gratuit
          </button>
        </div>
      </div>
    </nav>
  )
}
