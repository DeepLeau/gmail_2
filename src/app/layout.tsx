import type { Metadata } from 'next'
import { Manrope, Plus_Jakarta_Sans, Agbalumo } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

const agbalumo = Agbalumo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-agbalumo',
})

export const metadata: Metadata = {
  title: 'MailMind — Votre boîte mail transformée en assistant',
  description: 'Pose une question en français. Obtiens une réponse tirée de tes vrais échanges, en secondes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${manrope.variable} ${plusJakartaSans.variable} ${agbalumo.variable}`}>
      <body className="antialiased selection:bg-blue-500 selection:text-white relative bg-[#050505] text-white overflow-x-hidden scroll-smooth font-[family-name:var(--font-manrope),sans-serif]">
        {children}
        
        {/* Unicorn Studio */}
        <div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)' }}>
          <div data-us-project="1bY8o6HVTI1oxJxuCJEG" className="absolute w-full h-full left-0 top-0 -z-10" />
        </div>
        
        {/* Unicorn Studio Loader */}
        <Script
          id="unicorn-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}}();`
          }}
        />
        
        {/* Intersection Observer for scroll animations */}
        <Script id="scroll-animations" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            (function () {
              const style = document.createElement("style");
              style.textContent = ".animate-on-scroll { animation-play-state: paused !important; } .animate-on-scroll.animate { animation-play-state: running !important; }";
              document.head.appendChild(style);
              const once = true;
              if (!window.__inViewIO) {
                window.__inViewIO = new IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add("animate");
                      if (once) window.__inViewIO.unobserve(entry.target);
                    }
                  });
                }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
              }
              window.initInViewAnimations = function (selector = ".animate-on-scroll") {
                document.querySelectorAll(selector).forEach((el) => {
                  window.__inViewIO.observe(el);
                });
              };
              document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
            })();
          `
        }} />
      </body>
    </html>
  )
}
