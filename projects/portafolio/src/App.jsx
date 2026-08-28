import Header from './pages/Header'
import Hero from './pages/Hero'
import ProjectsGrid from './pages/ProjectsGrid'
import Timeline from './pages/Timeline'
import Button from './componentes/Button'
import { File, SendHorizonalIcon, SendIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import Footer from './componentes/Footer'
import LiterarySection from './pages/LiterarySection'
import LinkTreeSection from './pages/LinkTreeSection'

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Wrappers
  const LiteraryPage = () => (
    <div className="min-h-screen bg-[var(--background)] text-white">
      <Header />
      <LiterarySection />
      <Footer />
    </div>
  )

  const externalPages = [
    { hash: '#literary', component: LiteraryPage },
    { hash: '#links', component:  LinkTreeSection },
  ];

  const activePage = externalPages.find(page => page.hash === currentHash);

  if (activePage) {
    const ComponentToRender = activePage.component;
    return <ComponentToRender />;
  }

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
      {/* FooterBanner */}
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
              <Button variant="solid" icon={<SendHorizonalIcon />} href="https://wa.me/573197293775" target="_blank">
                WHATSAPP_ME
              </Button>
              <Button variant="outline" icon={<SendIcon />} href="mailto:museortiz@gmail.com">
                EMAIL_DIRECT
              </Button>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
