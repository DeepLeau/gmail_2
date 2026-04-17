export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#030303] text-neutral-300 text-sm relative">
      {/* Energy Animation End Drop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-700/40 to-transparent overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-transparent to-blue-600 drop-animation" style={{ animationDelay: '1.25s' }}></div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent shadow-[0_0_8px_rgba(37,99,235,0.4)] z-20"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-neutral-800 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold" style={{ fontFamily: 'var(--font-agbalumo), system-ui' }}>M</span>
          </div>
          <span className="font-medium text-white">MailMind</span>
        </div>
        <div className="flex gap-8 font-normal text-sm">
          <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-white transition-colors">CGU</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="font-normal text-sm">
          © 2025 MailMind. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
