import React, { useState } from 'react';
import { 
    Globe, 
    ExternalLink, 
    Instagram, 
    Twitter, 
    Github, 
    Linkedin, 
    Youtube, 
    Facebook, 
    Twitch, 
    Send, 
    Mail 
} from 'lucide-react';

// ==========================================
// 1. CONFIGURACIÓN DE REDES SOCIALES
// ==========================================
const SOCIAL_LINKS = [
    { name: "Instagram", url: "https://www.instagram.com/muse_times/" },
    //{ name: "Twitter", url: "https://twitter.com" },
    { name: "GitHub", url: "https://github.com/museortizmedia" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/museortizmedia/" },
    //{ name: "YouTube", url: "https://youtube.com" }
];

// ==========================================
// 2. CONFIGURACIÓN DE BOTONES PRINCIPALES
// ==========================================
const MAIN_BUTTONS = [
    {
        title: "Noticias Ñoñas con Diego Ortiz",
        subtitle: "Recibe diariamente en tu mail las últimas noticias científicas del mundo en ESPAÑOL.",
        url: "https://script.google.com/macros/s/AKfycbxA50nqYoKdUxH3oJv5lDHRREidqgDZLIUQD7DnnT3K_OCfaW_ACZRUY_Wh2UDK0Lgzyg/exec",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&auto=format&fit=crop&q=80",
        color: "bg-purple-950/30 border-purple-800/40 hover:border-purple-500/60"
    },
    {
        title: "Unity Users Group Cali - UUGCali",
        subtitle: "Únete a la comunidad: meetup, discord y nuestra web",
        url: "https://museortizmedia.github.io/UnityUsersGroupCaliPortal/",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&auto=format&fit=crop&q=80",
    },
    {
        title: "¡Super Listo!",
        subtitle: "Monta tu restaurante a otro nivel",
        url: "https://superlisto.com.co/",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&auto=format&fit=crop&q=80",
    },
    {
        title: "Más Proyectos",
        subtitle: "Mira todo mi portafolio de proyectos",
        url: "/",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&auto=format&fit=crop&q=80",
    },
    {
        title: "Contacto Directo",
        subtitle: "Consultorías y colaboraciones",
        url: "mailto:museortiz@gmail.com"
        // Botón sin imagen para conservar ambos estilos
    }
];

// Helper para detectar iconos de redes sociales automáticamente
const getSocialIcon = (name) => {
    const iconProps = { size: 20, className: "transition-transform group-hover:scale-110" };
    switch (name.toLowerCase()) {
        case 'instagram': return <Instagram {...iconProps} />;
        case 'twitter': 
        case 'x': return <Twitter {...iconProps} />;
        case 'github': return <Github {...iconProps} />;
        case 'linkedin': return <Linkedin {...iconProps} />;
        case 'youtube': return <Youtube {...iconProps} />;
        case 'facebook': return <Facebook {...iconProps} />;
        case 'twitch': return <Twitch {...iconProps} />;
        case 'telegram': return <Send {...iconProps} />;
        case 'email': 
        case 'mail': return <Mail {...iconProps} />;
        default: return <Globe {...iconProps} />;
    }
};

const LinkTreeSection = () => {
    const [avatarError, setAvatarError] = useState(false);

    return (
        <div className="min-h-screen w-full bg-stone-950 text-stone-100 p-4 md:p-12 font-serif flex flex-col justify-between items-center">
            
            <div className="w-full max-w-2xl mx-auto">
                {/* Header Centralizado */}
                <header className="mb-10 text-center flex flex-col items-center">
                    {/* Avatar con fallback al span si la imagen falla */}
                    <div className="w-24 h-24 rounded-full bg-stone-900 border border-stone-800 mb-5 flex items-center justify-center overflow-hidden shadow-2xl relative">
                        {!avatarError ? (
                            <img 
                                src="/MuseOrtizMediaPhoto.jpeg" 
                                alt="Muse Ortiz Media" 
                                className="w-full h-full object-cover"
                                onError={() => setAvatarError(true)}
                            />
                        ) : (
                            <span className="text-2xl font-light text-stone-400">MO</span>
                        )}
                    </div>

                    <h1 className="text-4xl font-light tracking-tighter mb-3 text-white">
                        Muse Ortiz Media
                    </h1>

                    {/* Redes Sociales colocadas debajo del título */}
                    <div className="flex items-center justify-center gap-3 mt-1 flex-wrap">
                        {SOCIAL_LINKS.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-2.5 rounded-full bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-600 hover:bg-stone-800/50 transition-all"
                                title={social.name}
                            >
                                {getSocialIcon(social.name)}
                            </a>
                        ))}
                    </div>
                </header>

                {/* Lista de Enlaces Principales */}
                <main className="space-y-4">
                    {MAIN_BUTTONS.map((btn, index) => {
                        const hasImage = Boolean(btn.image);

                        return (
                            <a
                                key={index}
                                href={btn.url}
                                target={btn.url.startsWith('http') ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className={`group flex items-center justify-between rounded-xl bg-stone-900/40 border border-stone-800/80 transition-all duration-300 hover:bg-stone-900/90 ${
                                    hasImage ? 'p-3 md:p-4' : 'p-4 md:p-5'
                                } ${btn.color || 'hover:border-stone-600'}`}
                            >
                                <div className="flex items-center gap-4 min-w-0 flex-1">
                                    {/* Imagen destacada más grande y con protagonismo */}
                                    {hasImage && (
                                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shrink-0 border border-stone-800/80 shadow-md">
                                            <img 
                                                src={btn.image} 
                                                alt={btn.title} 
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}

                                    <div className="min-w-0 flex-1 pr-2">
                                        <div className={`font-medium text-stone-200 group-hover:text-white transition-colors leading-snug ${
                                            hasImage ? 'text-lg md:text-xl' : 'text-lg'
                                        }`}>
                                            {btn.title}
                                        </div>
                                        {btn.subtitle && (
                                            <div className="text-xs text-stone-400 italic mt-1 leading-relaxed line-clamp-2">
                                                {btn.subtitle}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <ExternalLink 
                                    size={18} 
                                    className="text-stone-600 group-hover:text-stone-300 transition-colors shrink-0 ml-2" 
                                />
                            </a>
                        );
                    })}
                </main>
            </div>

            {/* Footer Minimalista */}
            <footer className="mt-14 text-center text-xs text-stone-600 italic">
                © {new Date().getFullYear()} Muse Ortiz Media. Todos los derechos reservados.
            </footer>
        </div>
    );
};

export default LinkTreeSection;