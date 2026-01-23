import { headerData } from '../data/headerData';
import {
    Zap,
    Menu,
    X,
    Terminal,
    Cpu,
    Download
} from 'lucide-react';
import { useState } from 'react';
import Button from '../componentes/Button';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo with Tagline - STATIC Version */}
                <div className="flex items-center gap-4 cursor-pointer relative" onClick={() => window.location.href = "#home"}>
                    <div className="flex flex-col relative">
                        <span className="font-display font-bold text-2xl tracking-tighter text-white flex items-center gap-1 group-hover:text-[var(--primary)] transition-colors">
                            {headerData.logo}
                        </span>

                        <span className="text-[10px] text-[var(--primary)] tracking-widest uppercase font-mono mt-0.5 opacity-80">
                            {headerData.tagline}
                        </span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {headerData.navigation.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className="text-[11px] font-bold text-slate-400 hover:text-white uppercase tracking-[0.2em] relative group"
                        >
                            {item.label}
                            {/* Static Underline */}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--primary)] group-hover:w-full transition-all"></span>
                        </a>
                    ))}

                    <Button
                        variant="solid"
                        icon={<Download size={14} />}
                        className="px-6 py-2"
                        href="/DiegoOrtiz-HV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        EXECUTE /CV
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-[var(--primary)]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Sidebar (Simple) */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-[var(--primary)]/20 py-8 px-6 shadow-2xl">
                    <div className="flex flex-col gap-6">
                        {headerData.navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                className="text-xs font-bold text-slate-400 hover:text-[var(--primary)] uppercase tracking-widest"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <Button variant="solid" icon={<Zap size={14} />} className="w-full">
                            EXECUTE
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
