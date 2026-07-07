import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BookOpen, ExternalLink, Loader2, BookText, Star, Clock, ChevronLeft } from 'lucide-react';

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

    // Cargar estructura
    useEffect(() => {
        // LIMPIEZA INMEDIATA: Al cambiar de capítulo o chunk, 
        // si el chunk es 0, vaciamos el contenido anterior.
        if (chunk === 0) {
            setContent([]);
            setLoading(true); // Activamos skeleton inmediatamente
        }

        fetch(`${API}?action=structure&id=${doc.id}`)
            .then(res => res.json())
            .then(data => { setStructure(data); setLoading(false); });
    }, [doc.id]);

    // Cargar contenido
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

    // Al cambiar de capítulo, reseteamos el scroll y forzamos el re-enfoque al top
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo(0, 0);
        }
    }, [chapterIdx]);

    // Intersection Observer para scroll infinito
    const observerCallback = useCallback((entries) => {
        // Si estamos cargando o no hay más, ignoramos
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
            {/* Header Sticky con efecto de cristal */}
            <div className="sticky top-0 z-40 w-full backdrop-blur-md ">
                <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
                    <button onClick={onClose} className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-all">
                        <ChevronLeft size={20} /> <span className="uppercase text-xs tracking-widest">Cerrar</span>
                    </button>
                    <span className="text-stone-400 text-xs italic tracking-widest">{doc.nombre}</span>
                </div>

            </div>

            {/* Títulos Grandes */}
            <div className="max-w-2xl mx-auto px-6 py-12">
                <header className="mb-20">
                    <h2 className="text-stone-400 uppercase text-xs tracking-[0.2em] mb-4">Lectura</h2>
                    <h1 className="text-5xl font-light tracking-tight text-stone-950 mb-2">{doc.nombre}</h1>
                    <p className="text-xl text-stone-600 italic">{structure[chapterIdx]?.capitulo}</p>
                </header>

                {/* Contenido */}
                <div className={`space-y-8 text-lg leading-relaxed transition-opacity duration-500 ${loading && chunk === 0 ? 'opacity-0' : 'opacity-100'}`}>
                    {content.map((p, i) => <p key={i}>{p}</p>)}
                </div>

                {/* Skeletons de Carga */}
                {loading && (
                    <div className="space-y-4 py-8 animate-pulse">
                        <div className="h-4 bg-stone-200 rounded w-full" />
                        <div className="h-4 bg-stone-200 rounded w-4/5" />
                    </div>
                )}

                {/* Trigger para Scroll Infinito */}
                <div ref={observerTarget} className="h-10" />

                {/* Navegación manual extra al final */}
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
        <div className="min-h-screen mt-4 w-full bg-stone-950 text-stone-100 p-8 md:p-20 font-serif">
            <header className="mb-16">
                <h1 className="text-4xl font-light tracking-tighter mb-4 text-white">Narrativas</h1>
                <p className="text-stone-400 italic">Un archivo de notas, historias, pensamientos y microtextos.</p>
            </header>

            {loading ? (
                <div className="flex items-center gap-2 text-stone-500"><Loader2 className="animate-spin" /> Cargando archivos...</div>
            ) : (
                <div className="max-w-full space-y-8">
                    {favorites.length > 0 && (
                        <section>
                            <h2 className="text-sm uppercase tracking-widest text-stone-500 mb-4 flex items-center gap-2"><Star size={14} /> Favoritos</h2>
                            {favDocs.map(doc => <DocRow key={doc.id} doc={doc} onRead={() => setActiveDoc(doc)} isFav onFav={() => toggleFavorite(doc.id)} />)}
                        </section>
                    )}

                    <section>
                        <h2 className="text-sm uppercase tracking-widest text-stone-500 mb-4">Archivo</h2>
                        {otherDocs.map(doc => <DocRow key={doc.id} doc={doc} onRead={() => setActiveDoc(doc)} isFav={false} onFav={() => toggleFavorite(doc.id)} />)}
                    </section>
                </div>
            )}
        </div>
    );
};

const DocRow = ({ doc, onRead, isFav, onFav }) => (
    <div className="group flex items-center justify-between py-6 border-b border-stone-800 hover:border-stone-600 transition-all cursor-pointer">
        {/* Contenedor principal de la fila que detecta el hover */}
        <div className="flex items-center gap-4 flex-1" onClick={onRead}>

            {/* Contenedor de iconos */}
            <div className="relative w-12 h-12 flex items-center justify-center">
                <BookText
                    className={`absolute transition-opacity duration-300 ${isFav ? "text-yellow-500" : "text-stone-600"} group-hover:opacity-0`}
                />

                <BookOpen
                    className={`absolute transition-opacity duration-300 ${isFav ? "text-yellow-500" : "text-stone-600"} opacity-0 group-hover:opacity-100`}
                />
            </div>

            <div>
                <div className="text-xl font-medium">{doc.nombre}</div>
                <div className="text-xs mt-2 text-stone-500 flex items-center gap-1">
                    <Clock size={10} /> Actualizado el {new Date(doc.ultimaModificacion).toLocaleDateString()}
                </div>
            </div>
        </div>

        {/* Botones de acción (evitamos que el clic en botones dispare el onRead) */}
        <div className="flex items-center gap-3 z-10">
            <button
                onClick={(e) => { e.stopPropagation(); onFav(); }}
                className="p-2 hover:text-yellow-500 transition-colors"
            >
                <Star size={18} fill={isFav ? "currentColor" : "none"} />
            </button>
            <a
                href={doc.urlPublica}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full text-sm hover:bg-blue-800/50 transition-colors"
            >
                <ExternalLink size={14} /> Drive
            </a>
        </div>
    </div>
);

export default LiterarySection;