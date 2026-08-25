// size: large, medium, small
import auroraSkyImage1 from "../assets/AuroraSky.png";
import auroraSkyImage2 from "../assets/001.png";
import auroraSkyImage3 from "../assets/006.png";
import hargozImage1 from "../assets/Hargoz01.png"

export const projectCards = [
  {
    id: 1,
    title: "SISET - Digital Transformation | Tech Government",
    description: "Liderazgo Frontend en +8 proyectos del estado Colombiano y Gobernación para la transformación digital del Valle del Cauca. Gestión de estados complejos, proyectos, contrataciones, reportes y dashboards.",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"],
    tags: ["Vue", "Laravel", "Tailwind", "Frontend"],
    category: "SOLUCIONES_WEB",
    size: "large",
    link: "https://www.google.com/search?q=SSISET",
    isLegacy: true
  },
  {
    id: 2,
    title: "SuperListo!",
    description: "Software diseñado para restaurantes que buscan independencia, permitiendo gestionar pedidos online, menús QR en mesa y domicilios sin comisiones de terceros",
    images: ["https://superlisto.com.co/assets/landingpage/mobile-cart.webp", "https://superlisto.com.co/assets/defaultLogo.png"],
    tags: ["React", "SaaS", "UX", "Fullstack", "Frontend", "Backend"],
    category: "SOLUCIONES_WEB",
    size: "medium",
    link: "https://superlisto.com.co/",
    isLegacy: false
  },
  {
    id: 3,
    title: "Andoke Recorridos",
    description: "Plataforma interactiva como parte de la estrategia de transformación digital del Centro de Ciencias y Museo Natural Mariposario Andoke. Permite la autogestión de rutas en la zona y escuchar un guía virtual.",
    images: ["https://andoke.com.co/wp-content/uploads/2025/12/Portadas-blogs.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLx1Dm5YxoZ0OaJfhybCtwtlHdBp8Kx3Y3C3X0PmSCOvgwQGOq_auPs68&s=10", "https://estaticos.elcolombiano.com/binrepository/1280x1002/0c141/1280d720/none/11101/KJKM/andoke-mariposario-cali-turismo-regenrativo_45852515_20240819195705.jpg"],
    tags: ["PWA", "UX", "GuíaVirtual", "TransformaciónDigital", "Frontend"],
    category: "SOLUCIONES_WEB",
    size: "large",
    link: "https://andoke.com.co/",
    isLegacy: false
  },
  {
    id: 4,
    title: "Unity Users Group Cali - Portal",
    description: "Portal para el grupo de usuarios de Unity de la ciudad de Cali, Colombia. No solo muestra los eventos siguientes sino que es una biblioteca de packages con enlace Git y proyectos indie caleños.",
    images: ["https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"],
    tags: ["React", "Unity", "Comunidad", "OpenSource", "Frontend"],
    category: "SOLUCIONES_WEB",
    size: "medium",
    link: "https://museortizmedia.github.io/UnityUsersGroupCaliPortal/#/",
    isLegacy: false
  },
  {
    id: 5,
    title: "Museo Pioneros de la Salsa Caleña: Music",
    description: "Experiencia web interactiva que utiliza tecnología de llaveros NFC para la reproducción de música y contenido patrimonial en el museo.",
    images: ["https://www.mupisacali.com/wp-content/uploads/2023/12/1.png"],
    tags: ["NFC", "Hardware", "Audio", "Cultura", "Frontend"],
    category: "SOLUCIONES_WEB",
    size: "medium",
    link: "https://music.mupisacali.com/",
    isLegacy: false
  },
  {
    id: 6,
    title: "Sonido Hargoz",
    description: "Portal y portafolio web para un grupo de dobladores caleños. Permite exhibir sus demos de voz, muestras de trabajo y perfiles de talento.",
    images: ["hargozImage1"],
    tags: ["Portafolio", "Audio", "Doblaje", "Frontend", "UX"],
    category: "SOLUCIONES_WEB",
    size: "medium",
    link: "https://sonido-hargoz.vercel.app/",
    isLegacy: false
  },
  {
    id: 7,
    title: "TeamLine",
    description: "Red social basada en líneas de tiempo para compartir fotos y videos junto a equipos o grupos. Ideal para seguimiento deportivo o álbumes familiares colaborativos.",
    images: ["https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"],
    tags: ["RedSocial", "React", "Fullstack", "Timeline", "Media", "PWA"],
    category: "SOLUCIONES_WEB",
    size: "large",
    link: "https://teamline-opal.vercel.app/",
    isLegacy: false
  },
  {
    id: 8,
    title: "Aurora Sky",
    description: "Desarrollo Propio (Solo Dev). Juego lowpoly futurista con fuerte enfoque en narrativa mitopoética y exploración atmosférica.",
    images: [
      auroraSkyImage2,
      auroraSkyImage1,
      auroraSkyImage3
    ],
    tags: ["Unity", "Narrativa", "Lowpoly", "SoloDev"],
    category: "VIDEOJUEGOS",
    size: "medium",
    link: "https://museortizmedia.github.io/UnityUsersGroupCaliPortal/#/project/proj-1786774383112",
    isLegacy: false
  },
  {
    id: 9,
    title: "PixMind",
    description: "(Fullstack) Motor API de Inteligencia Artificial para inferencia de imágenes. Permite validar modelos de negocio con visión artificial al instante y sin entrenamiento previo. Actualmente en standby, funcional e íntegro.",
    images: ["https://img.youtube.com/vi/t-2dc6K4M2w/maxresdefault.jpg"],
    tags: ["MVP", "React", "API", "Node", "Frontend", "Backend", "Fullstack"],
    category: "SOLUCIONES_WEB",
    size: "large",
    link: "https://pixmind-frontend.onrender.com/",
    isLegacy: false
  },
  {
    id: 10,
    title: "Guardianes Planetarios",
    description: "(Developer) Experiencia interactiva de aprendizaje en 2D que busca enseñar a niños de 6 a 12 años sobre el desecho de elementos eléctricos y electrónicos y la protección del planeta.",
    images: ["https://temp.talentumline.edu.co/wp-content/uploads/2025/03/tl_poster_guardianes_v1_1_1x.webp"],
    tags: ["Talentum", "Game Design", "2D", "Unity", "QA", "Debugging"],
    category: "VIDEOJUEGOS",
    size: "medium",
    link: "https://temp.talentumline.edu.co/universos-narrativos/#",
    isLegacy: false
  },
  {
    id: 11,
    title: "Regional II",
    description: "Mundo interactivo regional en 3D. Participación en el diseño de juego (Game Designer). Arquitectura y desarrollo.",
    images: ["https://img.youtube.com/vi/TY9GnXJ4cBk/maxresdefault.jpg"],
    tags: ["Talentum", "Game Design", "3D", "Unity", "QA", "Debugging"],
    category: "VIDEOJUEGOS",
    size: "small",
    link: "https://si.aulasregionalfase2.com/menu",
    isLegacy: false
  },
  {
    id: 12,
    title: "Sapere Aude",
    description: "Videojuego educativo publicado en la Play Store. Participación en procesos de debugging y optimización técnica.",
    images: ["https://play-lh.googleusercontent.com/_dleroqkMYRXs5zojKyEl9DjXDwv-CLPhyqgRAlki2NXpeD54NQ80jjb6I4w9pbnd6u5=w2560-h1440-rw"],
    tags: ["Talentum", "Unity", "Play Store", "2D", "QA", "Debugging"],
    category: "VIDEOJUEGOS",
    size: "small",
    link: "https://play.google.com/store/apps/details?id=com.talentum.sapere&hl=es_CO&pli=1",
    isLegacy: true
  },
  {
    id: 13,
    title: "Lalo's Adventure",
    description: "MVP de juego educativo diseñado para ayudar a niños a aprender el abecedario mediante tareas divertidas.",
    images: ["https://img.itch.zone/aW1hZ2UvMzEzNjM4OS8xODc0MDI0My5qcGVn/250x600/w6m6qn.jpeg"],
    tags: ["Unity", "Educativo", "C#", "SoloDev"],
    category: "VIDEOJUEGOS",
    size: "medium",
    link: "https://museortizmedia.itch.io/lalos-adventure",
    isLegacy: true
  },
  {
    id: 14,
    title: "Sounds of Silence",
    description: "Aventura onírica donde usas tu propia voz (micrófono) para resolver problemas psicológicos.",
    images: ["https://img.itch.zone/aW1hZ2UvMjQ5MTA4NC8xNxA1MjcxMC5wbmc=/original/30HiSB.png"],
    tags: ["Unity", "Micrófono"],
    category: "VIDEOJUEGOS",
    size: "medium",
    link: "https://museortizmedia.itch.io/sounds-of-silence",
    isLegacy: true
  },
  {
    id: 15,
    title: "Seguridad Vial 3D",
    description: "Desarrollo en la versión 3D de la estrategia transmedia Demos Vía a la Vida, que busca enseñar a estudiantes de primaria y secundaria sobre seguridad vial.",
    images: ["https://www.valledelcauca.gov.co/info/gobvalle/media/pubInt/thumbs/thpubInt_700X400_80677.webp"],
    tags: ["Talentum", "Unity", "Simulación", "3D"],
    category: "VIDEOJUEGOS",
    size: "medium",
    link: "https://demosviaalavida.com/recursos-transmedia/contenidos-3D",
    isLegacy: true
  },
  {
    id: 16,
    title: "The Last Haven",
    description: "Minijuego realizado para un GameJam donde navegas mares bravos y administras recursos hasta encontrar un refugio.",
    images: ["https://img.itch.zone/aW1hZ2UvMjk3MzA2MS8xNzc5NjU0NC5wbmc=/original/pHWm8I.png"],
    tags: ["Unity", "GameJam"],
    category: "VIDEOJUEGOS",
    size: "small",
    link: "https://museortizmedia.itch.io/the-last-haven",
    isLegacy: true
  }
];