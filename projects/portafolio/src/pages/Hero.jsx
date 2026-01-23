import { heroData } from '../data/heroData';
import Button from '../componentes/Button';
import {
    Zap,
    Send,
    Monitor,
    Code2,
    Box,
    Terminal,
    Activity
} from 'lucide-react';

export default function Hero() {
    // Map icons from data to Lucide components
    const iconMap = {
        monitor: Monitor,
        code: Code2,
        box: Box,
        terminal: Terminal
    };

    return (
        <section id="home" className="pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Message */}
                    <div className="space-y-8 relative z-10">
                        {/* Status Badge - Static */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-background)] border border-[var(--primary)] text-[var(--primary)] text-xs font-black uppercase tracking-widest shadow-[0_0_15px_rgba(110,18,203,0.3)]">
                            <Activity size={12} />
                            STUDIO // MUSE_ORTIZ_MEDIA
                        </div>

                        {/* Name - Static*/}
                        <div className="space-y-4">
                            <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tighter text-white uppercase transform ml-1 retro-3d">
                                {heroData.message.name.split(' ')[0]}<br />
                                <span className="text-white">
                                    {heroData.message.name.split(' ').slice(1).join(' ')}
                                </span>
                            </h1>
                            <div className="h-1 w-24 bg-[var(--primary)] rounded-full"></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] tracking-tight uppercase">
                                {heroData.message.title}
                            </h2>
                        </div>

                        <p className="text-slate-400 text-lg leading-relaxed max-w-lg font-light border-l-2 border-[var(--primary)]/30 pl-6">
                            {heroData.message.description}
                        </p>

                        <div className="flex items-center gap-6 pt-4">
                            {/* Profile Image Circular */}
                            <div className="relative w-20 h-20 shrink-0">
                                <div className="absolute inset-x-0 -bottom-2 h-4 bg-[var(--primary)] blur-xl opacity-30 rounded-full"></div>
                                <div className="w-full h-full rounded-full border-2 border-[var(--primary)] overflow-hidden relative z-10 p-1 bg-black">
                                    <img
                                        src={heroData.message.profileImage}
                                        alt={heroData.message.name}
                                        className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* Social Media Slug */}
                            <div className="flex flex-col justify-center">
                                <h3 className="text-white font-black text-xl leading-none uppercase tracking-tighter mb-2">
                                    Diego<span className="text-[var(--primary)]">_</span>Ortiz
                                </h3>
                                <div className="flex flex-wrap gap-x-4 gap-y-1">
                                    {heroData.message.socialLinks.map(link => (
                                        <a
                                            key={link.id}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[10px] text-slate-500 hover:text-white font-mono uppercase tracking-[0.2em] transition-all flex items-center gap-1 group"
                                        >
                                            <span className="text-[var(--primary)] group-hover:scale-125 transition-transform">@</span>
                                            {link.handle.replace('@', '')}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: HUD Statistics Panel */}
                    <div className="grid grid-cols-2 gap-6 relative">
                        {heroData.statistics.map((stat) => {
                            return (
                                <div
                                    key={stat.id}
                                    className="group relative bg-[var(--primary-background)] border border-[var(--primary)] p-6 rounded-xl flex flex-col items-center justify-center text-center overflow-hidden drop-shadow-md shadow-[0_0_10px_rgba(127,19,236,0.2)]"
                                >
                                    {/* HUD Ring SVG (Static) */}
                                    <div className="relative w-28 h-28 mb-4 flex items-center justify-center">
                                        <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                                            {/* Background Circle */}
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="#7f13ec30" strokeWidth="1.5" />
                                            {/* Progress Arc - Dynamic */}
                                            <circle
                                                cx="50" cy="50" r="45"
                                                fill="none"
                                                stroke="var(--primary)"
                                                strokeWidth="4"
                                                strokeDasharray="282.7"
                                                strokeDashoffset={282.7 - (282.7 * stat.value) / 100}
                                                strokeLinecap="round"
                                                className="transition-all duration-1000 ease-out"
                                            />
                                        </svg>
                                        <div className="flex flex-col items-center z-10">
                                            <span className="text-2xl font-black text-[var(--primary)] tracking-tighter">{stat.value}%</span>
                                        </div>
                                    </div>

                                    <h3 className="font-black text-md tracking-widest uppercase mb-1 text-white">
                                        {stat.label}
                                    </h3>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-mono px-2 py-1 rounded">
                                        {stat.icon}
                                    </p>

                                    {/* Decorative Corners */}
                                    <div className="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t border-white/20"></div>
                                    <div className="absolute top-0 right-0 w-1.5 h-1.5 border-r border-t border-white/20"></div>
                                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-l border-b border-white/20"></div>
                                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-r border-b border-white/20"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
