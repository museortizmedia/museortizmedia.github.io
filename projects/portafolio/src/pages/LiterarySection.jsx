import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BookOpen, ExternalLink, Loader2, BookText, Star, Clock, ChevronLeft, Eye } from 'lucide-react';

const API = "https://script.google.com/macros/s/AKfycbwlmaGa6sFiZrUm1Z-vWj6OvOi-tim46I1yaat-XaH8bN07Zu4QJpuVJfgMkj-VTlmA/exec";

const ReaderView = ({ doc, onClose }) => {
    const [structure, setStructure] = useState([]);
    const [chapterIdx, setChapterIdx] = useState(0);
    const [chunk, setChunk] = useState(0);
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    const observerTarget = useRef(null);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        if (chunk === 0) {
            setContent([]);
            setLoading(true);
        }

        fetch(`${API}?action=structure&id=${doc.id}`)
            .then(res => res.json())
            .then(data => { setStructure(data); setLoading(false); });
    }, [doc.id]);

    useEffect(() => {
        if (structure.length === 0) return;
        setLoading(true);
        fetch(`${API}?action=get&id=${doc.id}&chapter=${chapterIdx}&chunk=${chunk}`)
            .then(res => res.json())
            .then(data => {
                setContent(prev => chunk === 0 ? data.content : [...prev, ...data.content]);
                setHasMore(data.hasMore);
                setLoading(false);
            });
    }, [chapterIdx, chunk, structure]);

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo(0, 0);
        }
    }, [chapterIdx]);

    const observerCallback = useCallback((entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
            setChunk(c => c + 1);
        }
    }, [loading, hasMore]);

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, { threshold: 1.0 });
        if (observerTarget.current) observer.observe(observerTarget.current);
        return () => observer.disconnect();
    }, [observerCallback]);

    return (
        <div ref={scrollContainerRef} className="fixed inset-0 bg-stone-50 text-stone-900 z-50 overflow-y-auto font-serif">
            <div className="sticky top-0 z-40 w-full backdrop-blur-md">
                <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
                    <button onClick={onClose} className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-all">
                        <ChevronLeft size={20} /> <span className="uppercase text-xs tracking-widest">Cerrar</span>
                    </button>
                    <span className="text-stone-400 text-xs italic tracking-widest truncate max-w-[200px]">{doc.nombre}</span>
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-6 py-12">
                <header className="mb-20">
                    <h2 className="text-stone-400 uppercase text-xs tracking-[0.2em] mb-4">Lectura</h2>
                    <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-950 mb-2">{doc.nombre}</h1>
                    <p className="text-xl text-stone-600 italic">{structure[chapterIdx]?.capitulo}</p>
                </header>

                <div className={`space-y-8 text-lg leading-relaxed transition-opacity duration-500 ${loading && chunk === 0 ? 'opacity-0' : 'opacity-100'}`}>
                    {content.map((p, i) => <p key={i}>{p}</p>)}
                </div>

                {loading && (
                    <div className="space-y-4 py-8 animate-pulse">
                        <div className="h-4 bg-stone-200 rounded w-full" />
                        <div className="h-4 bg-stone-200 rounded w-4/5" />
                    </div>
                )}

                <div ref={observerTarget} className="h-10" />

                {!hasMore && chapterIdx < structure.length - 1 && (
                    <div className="w-full gap-2 flex flex-row">
                    <button
                        onClick={() => { setChapterIdx(c => c - 1); setChunk(0); window.scrollTo(0, 0); }}
                        className="mt-12 w-full py-4 border border-stone-300 hover:bg-stone-200 transition-all uppercase text-xs tracking-widest disabled:bg-stone-200"
                        disabled={chapterIdx === 0}
                    >
                        Capítulo Anterior
                    </button>
                    <button
                        onClick={() => { setChapterIdx(c => c + 1); setChunk(0); window.scrollTo(0, 0); }}
                        className="mt-12 w-full py-4 border border-stone-300 hover:bg-stone-200 transition-all uppercase text-xs tracking-widest disabled:bg-stone-200"
                        disabled={chapterIdx === structure.length - 1}
                    >
                        Siguiente Capítulo
                    </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const LiterarySection = () => {
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favs') || '[]'));
    const [activeDoc, setActiveDoc] = useState(null);

    useEffect(() => {
        fetch(`${API}?action=list`, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                setDocs(data);
                setLoading(false);
            })
            .catch(err => console.error("Error CORS o Red:", err));
    }, []);

    const toggleFavorite = (id) => {
        const newFavs = favorites.includes(id) ? favorites.filter(f => f !== id) : [...favorites, id];
        setFavorites(newFavs);
        localStorage.setItem('favs', JSON.stringify(newFavs));
    };

    if (activeDoc) return <ReaderView doc={activeDoc} onClose={() => setActiveDoc(null)} />;

    const sortedDocs = [...docs].sort((a, b) => new Date(b.ultimaModificacion) - new Date(a.ultimaModificacion));
    const favDocs = sortedDocs.filter(d => favorites.includes(d.id));
    const otherDocs = sortedDocs.filter(d => !favorites.includes(d.id));

    return (
        <div className="min-h-screen mt-4 w-full bg-stone-950 text-stone-100 p-4 sm:p-8 md:p-20 font-serif box-border overflow-x-hidden">
            <div className="max-w-4xl mx-auto w-full">
                <header className="mb-12">
                    <h1 className="text-4xl font-light tracking-tighter mb-4 text-white">Narrativas</h1>
                    <p className="text-stone-400 italic">Un archivo de notas, historias, pensamientos y microtextos.</p>
                </header>

                {loading ? (
                    <div className="flex items-center gap-2 text-stone-500"><Loader2 className="animate-spin" /> Cargando archivos...</div>
                ) : (
                    <div className="w-full space-y-8">
                        {favorites.length > 0 && (
                            <section>
                                <h2 className="text-sm uppercase tracking-widest text-stone-500 mb-4 flex items-center gap-2"><Star size={14} /> Favoritos</h2>
                                <div className="space-y-3">
                                    {favDocs.map(doc => <DocRow key={doc.id} doc={doc} onRead={() => setActiveDoc(doc)} isFav onFav={() => toggleFavorite(doc.id)} />)}
                                </div>
                            </section>
                        )}

                        <section>
                            <h2 className="text-sm uppercase tracking-widest text-stone-500 mb-4">Archivo</h2>
                            <div className="space-y-3">
                                {otherDocs.map(doc => <DocRow key={doc.id} doc={doc} onRead={() => setActiveDoc(doc)} isFav={false} onFav={() => toggleFavorite(doc.id)} />)}
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
};

const DocRow = ({ doc, onRead, isFav, onFav }) => (
    <div 
        onClick={onRead}
        className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 px-3 sm:px-4 rounded-xl border border-stone-800/80 bg-stone-900/20 hover:bg-stone-900/60 hover:border-stone-700 transition-all cursor-pointer gap-4 w-full box-border"
    >
        {/* Izquierda: Icono + Título Multilínea y Fecha */}
        <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0 w-full">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                <BookText
                    className={`absolute transition-opacity duration-300 ${isFav ? "text-yellow-500" : "text-stone-600"} group-hover:opacity-0`}
                />
                <BookOpen
                    className={`absolute transition-opacity duration-300 ${isFav ? "text-yellow-500" : "text-stone-600"} opacity-0 group-hover:opacity-100`}
                />
            </div>

            <div className="min-w-0 flex-1 pr-0 sm:pr-4">
                {/* TÍTULO MULTILÍNEA: Quitamos truncate y permitimos hasta 2-3 líneas con wrap */}
                <h3 className="text-lg md:text-xl font-medium text-stone-200 group-hover:text-white transition-colors leading-snug break-words line-clamp-3">
                    {doc.nombre}
                </h3>
                <div className="text-xs mt-1.5 text-stone-500 flex items-center gap-1">
                    <Clock size={10} /> Actualizado el {new Date(doc.ultimaModificacion).toLocaleDateString()}
                </div>
            </div>
        </div>

        {/* Derecha: Botones de Acción (Diseñados para comodidad del pulgar y seguridad) */}
        <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-800/60">
            {/* Botón Favorito */}
            <button
                type="button"
                onClick={(e) => { e.stopPropagation(); onFav(); }}
                className="p-2 text-stone-500 hover:text-yellow-500 transition-colors rounded-lg hover:bg-stone-800/40"
                title="Marcar favorito"
            >
                <Star size={18} fill={isFav ? "currentColor" : "none"} />
            </button>

            <div className="flex items-center gap-2">
                {/* REPUETO DRIVE (A la izquierda del botón de abrir para evitar toques accidentales) */}
                <a
                    href={doc.urlPublica}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 px-3 py-2 text-xs font-sans font-medium text-stone-400 bg-stone-900/90 hover:text-stone-200 hover:bg-stone-800 border border-stone-800 rounded-lg transition-all"
                    title="Abrir archivo original en Google Drive"
                >
                    <span>Drive</span>
                    <ExternalLink size={12} className="opacity-70" />
                </a>

                {/* BOTÓN PRINCIPAL ABRIR (A la extrema derecha, óptimo para el pulgar) */}
                <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); onRead(); }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-sans font-medium text-purple-200 bg-purple-950/60 hover:bg-purple-900/80 border border-purple-800/80 rounded-lg transition-all shadow-sm"
                    title="Abrir en el visor de texto web"
                >
                    <Eye size={13} />
                    <span>Abrir</span>
                </button>
            </div>
        </div>
    </div>
);

export default LiterarySection;