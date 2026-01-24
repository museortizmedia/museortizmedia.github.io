import { useState } from 'react';
import { projectCards } from '../data/projectsData';
import {
    Filter,
    ExternalLink,
    Layers,
    Gamepad2,
    Boxes,
    Hash,
    Tag
} from 'lucide-react';

export default function ProjectsGrid() {
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [activeTag, setActiveTag] = useState('ALL');
    const [showLegacy, setShowLegacy] = useState(false);

    const categories = ['ALL', 'SOLUCIONES_WEB', 'VIDEOJUEGOS'];

    const categoryIcons = {
        ALL: Layers,
        SOLUCIONES_WEB: Boxes,
        VIDEOJUEGOS: Gamepad2
    };

    const categoryLabels = {
        ALL: 'TODO',
        SOLUCIONES_WEB: 'SOLUCIONES_WEB',
        VIDEOJUEGOS: 'VIDEOJUEGOS'
    };

    // Calculate available tags based on current category and legacy status
    const availableTags = ['ALL', ...new Set(
        projectCards
            .filter(project => (activeFilter === 'ALL' || project.category === activeFilter) && (showLegacy || !project.isLegacy))
            .flatMap(project => project.tags)
    )].sort();

    const filteredProjects = projectCards.filter(project => {
        const matchesCategory = activeFilter === 'ALL' || project.category === activeFilter;
        const matchesTag = activeTag === 'ALL' || project.tags.includes(activeTag);
        const matchesLegacy = showLegacy || !project.isLegacy;

        return matchesCategory && matchesTag && matchesLegacy;
    });

    const getSizeClasses = (size) => {
        switch (size) {
            case 'large':
                return 'md:col-span-2 md:row-span-2';
            case 'medium':
                return 'md:col-span-1 md:row-span-2';
            case 'small':
                return 'md:col-span-1 md:row-span-1';
            default:
                return 'md:col-span-1 md:row-span-1';
        }
    };

    return (
        <section id="projects" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header with Filter */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Portfolio {new Date().getFullYear()}</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase flex items-center gap-4">
                            Archivo_Proyectos
                        </h2>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex flex-wrap gap-2 bg-black/40 p-1.5 rounded-2xl border border-white/5">
                            {categories.map((category) => {
                                const Icon = categoryIcons[category] || Filter;
                                return (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setActiveFilter(category);
                                            setActiveTag('ALL'); // Reset tag when category changes
                                        }}
                                        className={`px-6 py-2 rounded-xl text-[10px] font-black tracking-[0.2em] transition-all flex items-center gap-2 ${activeFilter === category
                                            ? 'bg-[var(--primary)] text-white shadow-[0_0_20px_rgba(110,18,203,0.3)]'
                                            : 'bg-transparent text-slate-500 hover:text-white'
                                            }`}
                                    >
                                        <Icon size={12} />
                                        {categoryLabels[category]}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Tag Selector - Minimalist */}
                        <div className="flex items-center gap-3 bg-black/40 p-[0.8em] rounded-2xl border border-white/5 group hover:border-primary/30 transition-all">
                            <Tag size={14} className="text-primary" />
                            <select
                                value={activeTag}
                                onChange={(e) => setActiveTag(e.target.value)}
                                className="bg-transparent text-slate-400 text-[10px] font-black tracking-widest uppercase focus:outline-none transition-all cursor-pointer hover:text-white"
                            >
                                <option value="ALL">TAG_SEARCH</option>
                                {availableTags.filter(t => t !== 'ALL').map(tag => (
                                    <option key={tag} value={tag} className="bg-black text-white">{tag}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => project.link && window.open(project.link, '_blank')}
                            className={`group relative overflow-hidden rounded-2xl bg-[#070707] border border-white/5 hover:border-primary/50 transition-all duration-500 cursor-pointer ${getSizeClasses(project.size)}`}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-20 transition-all duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${project.imageUrl})` }}
                            >
                                {/* Image Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-100"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-row gap-2">
                                        <div className="bg-purple-950/70 backdrop-blur-md border border-[var(--primary-background)] px-3 py-1 rounded text-[9px] font-black tracking-[0.2em] text-[var(--primary)] uppercase w-fit">
                                            {project.category.replace('_', ' ')}

                                        </div>
                                        {project.isLegacy && (
                                            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 px-3 py-1 rounded text-[8px] font-black tracking-[0.2em] text-slate-500 uppercase w-fit">
                                                ARCHIVED_DATA
                                            </div>
                                        )}

                                    </div>
                                    {project.link && (

                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all shadow-2xl group-hover:shadow-[0_0_20px_rgba(110,18,203,0.5)]">
                                            <ExternalLink size={16} className="text-white" />
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:translate-x-1 transition-transform">
                                        {project.title}
                                    </h3>
                                    <div className="h-[1px] w-full bg-white/10 mb-4 group-hover:bg-primary/50 transition-colors origin-left"></div>
                                    <p className="text-slate-400 text-sm line-clamp-6 mb-4 group-hover:text-slate-300 transition-colors">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] uppercase tracking-widest text-slate-500 font-bold flex items-center gap-1 group-hover:border-primary/30 group-hover:text-slate-300 transition-all"
                                            >
                                                <Hash size={8} className="text-primary/50" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More / Archive Toggle */}
                <div className="mt-16 flex justify-center">
                    <button
                        onClick={() => setShowLegacy(!showLegacy)}
                        className="group relative px-12 py-4 bg-transparent border border-white/10 rounded-full overflow-hidden transition-all hover:border-primary/50 shadow-xl"
                    >
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"></div>
                        <span className="relative z-10 text-xs font-black tracking-[0.3em] text-slate-400 group-hover:text-white uppercase transition-colors">
                            {showLegacy ? 'OCULTAR_ARCHIVOS' : 'EXPLORAR_TODO_EL_ARCHIVO'}
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
