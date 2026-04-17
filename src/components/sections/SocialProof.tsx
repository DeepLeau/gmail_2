import { SOCIAL_PROOF_COMPANIES } from '@/lib/data'
import type { SocialProofCompany } from '@/types'

export function SocialProof() {
  return (
    <section className="py-12 border-y border-white/5 bg-black/40 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex flex-wrap justify-center gap-16 md:gap-24 items-center px-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-700 max-w-7xl mx-auto">
        {SOCIAL_PROOF_COMPANIES.map((company: SocialProofCompany, i: number) => (
          <span
            key={i}
            className={`text-xl tracking-tight ${
              company.style === 'serif' ? 'font-serif' :
              company.style === 'mono' ? 'font-mono' :
              company.style === 'italic' ? 'italic' : 'font-semibold'
            } text-neutral-200 ${i >= 5 ? 'hidden sm:block' : ''}`}
          >
            {company.name}
          </span>
        ))}
      </div>
    </section>
  )
}
