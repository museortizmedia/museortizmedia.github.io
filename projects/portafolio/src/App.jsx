import Header from './pages/Header'
import Hero from './pages/Hero'
import ProjectsGrid from './pages/ProjectsGrid'
import Timeline from './pages/Timeline'
import Button from './componentes/Button'
import { File, SendHorizonalIcon, SendIcon } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-white">
      {/* Header Menu */}
      <Header />

      {/* Hero Section: Message + Statistics */}
      <Hero />

      {/* Projects Grid: Masonry Layout with Filters */}
      <ProjectsGrid />

      {/* Dual Timeline: Work Experience + Education */}
      <Timeline />

      {/* Footer / Contact */}
      <div id="contact" className="mt-20 mb-12 px-6">
        <div className="max-w-7xl mx-auto text-center relative overflow-hidden p-16 rounded-3xl bg-[radial-gradient(circle_at_center,_var(--primary-background)_0%,_transparent_120%)] border border-[var(--primary-background)]">
          <div className="relative z-10">
            <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase text-white">
              Initiate Collaboration?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed text-lg">
              Disponible para proyectos freelance, consultoría técnica u oportunidades full-time.
              Construyamos algo increíble juntos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="solid" icon={<SendHorizonalIcon />} href="#contact">
                PING_ME
              </Button>
              <Button variant="outline" icon={<File />} href="#experience">
                VIEW_RESUME
              </Button>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
      </div>

      <footer id="contact" className="mt-20 mb-12 px-6 border-t border-[var(--primary-background)]">

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-xs font-bold tracking-widest mt-12">
          <div className="flex gap-8">
            <a className="hover:text-primary transition-colors uppercase" href="#">GitHub</a>
            <a className="hover:text-primary transition-colors uppercase" href="#">LinkedIn</a>
            <a className="hover:text-primary transition-colors uppercase" href="#">Behance</a>
          </div>
          <div className="uppercase">
            © {new Date().getFullYear()} MUSE ORTIZ MEDIA // ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            BUILD_VERSION_1.0.0
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
