const API_URL = {
  "ES": "https://script.google.com/macros/s/AKfycbxet14zJsaoyAPrtuJXHYfe6RQvNx8kjkOnv-MxTegy79xHaSlX-nWjMwXHyYfFwfWKMA/exec",
  "EN": "https://script.google.com/macros/s/AKfycbzlFuDO-WTpUZ7OrKk3uHvi-Jkriy2RdQE_xBYFiPzHxAb7-eflFGW0xYtczaePhy2W8Q/exec"
}
const endpoint = "?sheetName=";
let API_version = "ES";

const setLanguage = async (language) => {
  API_version = API_version == "ES" ? "EN" : "ES";
};

//Funcion Fetch para cualquier uso
export const fetchBookData = async (bookName) => {
  const url = `${API_URL[API_version]}${endpoint}${bookName}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

//Funcion Post para cualquier uso
export const postBookData = async (sheetName, key, value) => {
  const url = API_URL["ES"];
  const params = new URLSearchParams();
  params.append('sheetName', sheetName);
  params.append('key', key);
  params.append('value', value);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const fetchBookAllData = async (callback) => {
  const url = API_URL[API_version];
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

function TodayDateNumberFormat() {
  const epoch = new Date(1899, 11, 30); // Google Sheets epoch start date
  const diffInMs = new Date() - epoch;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return Math.floor(diffInDays); // Redondear para obtener un valor entero
}

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    //alert('¡Se ha copiado '+text+' en el portapaleles!');
  } catch (err) {
    console.error('No se pudo copiar el texto: ', err);
  }
};


//CACHEING
const CACHE_KEY = 'ALLDATA_CACHE';
const DATE_KEY = 'TOKEN_DATE';

const PreLoad = (CB, setLenguage = null) => {
  //console.log("Tratando de cambiar a "+setLenguage+" de "+API_version+" | "+(setLenguage==API_version.toString()));

  if(setLenguage==API_version.toString())
    { 
      console.log("No se actualiza el lenguaje porque la web ya está en ese idioma");
      CB();
      return;
    }

  if (setLenguage != null) { API_version = setLenguage; }

  const cacheDataKey = CACHE_KEY + "-" + API_version;
  const cachedData = JSON.parse(localStorage.getItem(cacheDataKey));
  const cachedDate = localStorage.getItem(DATE_KEY);

  // Si hay un cambio de idioma y está el lenguaje en caché
  if (setLenguage != null && cachedData!=null) {
    GeneralData = cachedData.GeneralData;
    PageData = cachedData.PageData;
    ProfileData = cachedData.ProfileData;
    EducationData = cachedData.EducationData;
    ExperienceData = cachedData.ExperienceData;
    SkillsData = cachedData.SkillsData;
    CertificationsData = cachedData.CertificationsData;
    SocialData = cachedData.SocialData;
    ProyectosData = cachedData.ProyectosData;
    ServicesData = cachedData.ServicesData;
    BlogData = cachedData.BlogData;
    ContactData = cachedData.ContactData;
    IconPage = cachedData.GeneralData.IconPage;
    ArrowIcon = cachedData.GeneralData.ArrowIcon;
    //console.log("actualizado idioma al "+cacheDataKey);
    CB();
    return;
  }

  if (cachedDate == null || cachedData == null || setLenguage != null) {
    // Borrar datos de otros idiomas
    localStorage.removeItem(CACHE_KEY + "-ES");
    localStorage.removeItem(CACHE_KEY + "-EN");
    // Conseguir Data
    fetchBookAllData(
      (AllData) => {
        ALLDATA = AllData;
        GeneralData = AllData.GeneralData;
        // Metrics
        GeneralData.Metrics = JSON.parse(GeneralData.Metrics);
        // Metrics
        // Cards
        GeneralData.Card_CV = JSON.parse(GeneralData.Card_CV);
        GeneralData.Card_Portafolio = JSON.parse(GeneralData.Card_Portafolio);
        GeneralData.Card_Blog = JSON.parse(GeneralData.Card_Blog);
        GeneralData.Card_Serivicos = JSON.parse(GeneralData.Card_Serivicos);
        GeneralData.Card_SocialMedia = JSON.parse(GeneralData.Card_SocialMedia);
        // Cards
        PageData = AllData.PageData;
        ProfileData = AllData.ProfileData;
        EducationData = AllData.EducationData;
        ExperienceData = AllData.ExperienceData;
        SkillsData = AllData.SkillsData;
        CertificationsData = AllData.CertificationsData;
        SocialData = AllData.SocialData;
        ProyectosData = AllData.ProyectosData;
        ServicesData = AllData.ServicesData;
        BlogData = AllData.BlogData;
        ContactData = AllData.ContactData;
        IconPage = AllData.GeneralData.IconPage;
        ArrowIcon = AllData.GeneralData.ArrowIcon;
        //console.log(AllData.GeneralData.Date);
        // Guardar Data y Date
        localStorage.setItem(cacheDataKey, JSON.stringify(ALLDATA));
        localStorage.setItem(DATE_KEY, AllData.GeneralData.Date);
        //console.log("Cargado y cacheado");
        //console.log(AllData);
        CB();
      });
  } else {
    //Verificar si hay un cambio en la fecha del caché y la de hoy
    if (TodayDateNumberFormat() != cachedDate) {
      // Borrar datos de otros idiomas
      localStorage.removeItem(CACHE_KEY + "-ES");
      localStorage.removeItem(CACHE_KEY + "-EN");
      // Actualizar Datos
      fetchBookAllData(
        (AllData) => {
          ALLDATA = AllData;
          GeneralData = AllData.GeneralData;
          // Metrics
          GeneralData.Metrics = JSON.parse(GeneralData.Metrics);
          // Metrics
          // Cards
          GeneralData.Card_CV = JSON.parse(GeneralData.Card_CV);
          GeneralData.Card_Portafolio = JSON.parse(GeneralData.Card_Portafolio);
          GeneralData.Card_Blog = JSON.parse(GeneralData.Card_Blog);
          GeneralData.Card_Serivicos = JSON.parse(GeneralData.Card_Serivicos);
          GeneralData.Card_SocialMedia = JSON.parse(GeneralData.Card_SocialMedia);
          // Cards
          PageData = AllData.PageData;
          ProfileData = AllData.ProfileData;
          EducationData = AllData.EducationData;
          ExperienceData = AllData.ExperienceData;
          SkillsData = AllData.SkillsData;
          CertificationsData = AllData.CertificationsData;
          SocialData = AllData.SocialData;
          ProyectosData = AllData.ProyectosData;
          ServicesData = AllData.ServicesData;
          BlogData = AllData.BlogData;
          ContactData = AllData.ContactData;
          IconPage = AllData.GeneralData.IconPage;
          ArrowIcon = AllData.GeneralData.ArrowIcon;
          // Guardar Data y Date
          localStorage.setItem(cacheDataKey, JSON.stringify(ALLDATA));
          localStorage.setItem(DATE_KEY, AllData.GeneralData.Date);
          //console.log("Actualizado y cacheado");
          CB();
        });
    } else {
      // No actualizar
      GeneralData = cachedData.GeneralData;
      PageData = cachedData.PageData;
      ProfileData = cachedData.ProfileData;
      EducationData = cachedData.EducationData;
      ExperienceData = cachedData.ExperienceData;
      SkillsData = cachedData.SkillsData;
      CertificationsData = cachedData.CertificationsData;
      SocialData = cachedData.SocialData;
      ProyectosData = cachedData.ProyectosData;
      ServicesData = cachedData.ServicesData;
      BlogData = cachedData.BlogData;
      ContactData = cachedData.ContactData;
      IconPage = cachedData.GeneralData.IconPage;
      ArrowIcon = cachedData.GeneralData.ArrowIcon;
      //console.log("Cargada info del caché");
      CB();
    }
  }
}

const DeleteLocalDate = () =>
{
  localStorage.removeItem(DATE_KEY);
  window.location.reload();
}


//MailContact - Servicio de gestión de formularios de contacto y suscripciones
/**
 * Función que envía un correo o mensaje a través de la API de Google Apps Script.
 * 
 * @param {string} destino - Correo electrónico del destinatario.
 * @param {string} mail - Correo electrónico del suscriptor.
 * @param {string} content - Contenido del mensaje (opcional).
 */
function sendMailContact(destino, mail, content, SUCCES = ()=>{}, FAIL = ()=>{}, ERROR = ()=>{}) {
  // Verifica que los parámetros sean válidos antes de hacer la solicitud
  if (destino && mail && content) {
    let url = "https://script.google.com/macros/s/AKfycbyK55uuLztnh0fc7iKq3NpZrNS5pKULLBh_9ywazgE5xEtkinJLVcKtac3vUABWaYvBig/exec?";
    url += "destino=" + destino + "&mail=" + mail + "&content=" + encodeURIComponent(content);

    // Realizar la solicitud GET con fetch
    fetch(url)
      .then(response => response.text())
      .then(data => {
        //console.log("Respuesta de la API:", data);

        // Dependiendo de la respuesta, manejar la lógica
        if (data === "100") {
          SUCCES();
        } else {
          FAIL();
        }
      })
      .catch(error => {
        console.error("Error:", error);
        //console.log("Hubo un problema con la solicitud.");
        ERROR("¡Ups! Parece que las cosas no van bien allá en la nube, inténtalo de nuevo más tarde.");
      });
  } else {
    //console.log("Por favor, completa todos los campos.");
    ERROR("Por favor, completa todos los campos.");
  }
}




//BD Recovery
let ALLDATA = null;

let GeneralData = {
  Users: "1",

  Tagline: "Disponible para prestación de servicios.",

  CallTo: "Vamos a trabajar",
  Action: " juntos.",

  Metrics: [{ name: 'años de experiencia', dato: 7, plus: true }, { name: 'años de experiencia', dato: 7, plus: true }, { name: 'años de experiencia', dato: 7, plus: true }],

  Card_CV: {
    Subtitulo: "Más acerca de mi",
    Titulo: "Trayectoria",
    ImgSrc: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png"
  },
  Card_Portafolio: {
    Subtitulo: "Portafolio",
    Titulo: "Proyectos",
    ImgSrc: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png"
  },
  Card_Blog: {
    Subtitulo: "Blog",
    Titulo: "Leer",
    ImgSrc: "https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2Fa8a7d413c81ac8a5cf104d3dab696a61010b8838-1920x1080.jpg&w=1920&q=75"
  },
  Card_Serivicos: {
    Subtitulo: "Especialización",
    Titulo: "Servicios Ofrecidos",
  },
  Card_SocialMedia: {
    Subtitulo: "Contacta conmigo",
    Titulo: "Redes sociales",
  },
};
let PageData = [
  {
    link: "0",
    label: "Inicio",
  },
  {
    link: "1",
    label: "Sobre mí"
  },
  {
    link: "2",
    label: "Portafolio"
  },
  {
    link: "3",
    label: "Contacto"
  }
];
let ProfileData = {
  Nombre: "Diego Ortiz",
  Apodo: "Muse Coder",
  NombreCompleto: "Diego Ortiz Hurtado",
  Rol: "Programador",
  SortBio: "Soy un desarrollador de aplicativos interactivos.",
  Bio: "I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.",
  ImageSrc: "https://media.licdn.com/dms/image/D4E03AQHD4cTeI7u7Hw/profile-displayphoto-shrink_800_800/0/1712670440594?e=1723680000&v=beta&t=jLSlBcNtD69829yHaaUTXMjM1cxddFvFocOKUog5FYQ",
  State: 1
};
let EducationData = [
  {
    Name: "Tecnología en Produccion de Multimedia",
    InitAge: "2016",
    FinishAge: "2018",
    Insitution: "Servicio Nacional de Aprendizaje SENA",
    Desc: "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
    Link: "",
  },
  {
    Name: "Ingeniería en Multimedia",
    InitAge: "2018",
    FinishAge: "Actualidad",
    Insitution: "Universidad Autónoma de Occidente",
    Desc: "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
    Link: "",
  },
];
let ExperienceData = [
  {
    Cargo: "Desarrollador Vue",
    InitAge: "Enero 2022",
    FinishAge: "Agosto 2022",
    Insitution: "OpenCode SAS",
    Desc: "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
    Link: "",
  },
  {
    Cargo: "Desarrollador Unity",
    InitAge: "2022",
    FinishAge: "Actualidad",
    Insitution: "Corporación Talentum",
    Desc: "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
    Link: "",
  },
];
let SkillsData = [
  {
    Nombre: "JavaScript",
    Dominio: "85",
    Desc: "Non enim praesent",
  },
  {
    Nombre: "Figma",
    Dominio: "95",
    Desc: "Non enim praesent",
  },
  {
    Nombre: "React",
    Dominio: "81",
    Desc: "Non enim praesent",
  },
  {
    Nombre: "Vue",
    Dominio: "78",
    Desc: "Non enim praesent",
  },
  {
    Nombre: "Adobe",
    Dominio: "90",
    Desc: "Non enim praesent",
  },
  {
    Nombre: "Unity",
    Dominio: "87",
    Desc: "Non enim praesent",
  },
];
let CertificationsData = [
  {
    Nombre: "Unity Certification",
    Date: "14 May 2020",
    Desc: "Non enim praesent",
    Image: "",
    link: "",
  },
];
let SocialData = [
  {
    Red: "LinkedIn",
    Profile: "",
    Link: "https://www.linkedin.com/in/museortizmedia/",
    Image: "",
    Desc: "Non enim praesent",
    Icon: "linkedin",
  },
  {
    Red: "Github",
    Profile: "",
    Link: "https://www.linkedin.com/in/museortizmedia/",
    Image: "",
    Desc: "Non enim praesent",
    Icon: "github",
  },
  {
    Red: "Behance",
    Profile: "",
    Link: "https://www.linkedin.com/in/museortizmedia/",
    Image: "",
    Desc: "Non enim praesent",
    Icon: "behance",
  },
  {
    Red: "Facebook",
    Profile: "",
    Link: "https://www.linkedin.com/in/museortizmedia/",
    Image: "",
    Desc: "Non enim praesent",
    Icon: "facebook",
  },
];
let ProyectosData = [
  {
    Area: "Web Desing",
    Nombre: "1 Dynamic",
    Date: "2023",
    Titulo: "Aestetich Desing For Brand New Startup",
    Subtitle: "Branding - raven studio",
    NombreEmpresa: "Raven Studio",
    DescEmpresa: "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit. Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.",
    Resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna ve fringilla urna, porttitor rhoncus dolor purus nonds enim isi praesent elementum facilisis leo. Vel fringilla est ullamcorper eget nulla facilisi etiama ashfa dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu agv he volutpat odio asas facilisis mauris sit.",
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam facilisis dignissim diam quis enim lobortis scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam facilisis dignissim diam quis enim lobortis scelerisque iin fermentumisa dui faucibus in ornare.Lorem ipsum dolor sit.",
    CoverImage: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    ImagePortada: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project-dt-1.jpeg",
    ImagePrimary: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project-dt-1.jpeg",
    Src1: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    Src2: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    Src3: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    Src4: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    ImageSecondary: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project-dt-1.jpeg",
  },
  {
    Area: "Web Desing",
    Nombre: "Dynamic",
    Date: "2023",
    Titulo: "Aestetich Desing For Brand New Startup",
    Subtitle: "Branding - raven studio",
    NombreEmpresa: "Raven Studio",
    DescEmpresa: "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit. Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.",
    Resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna ve fringilla urna, porttitor rhoncus dolor purus nonds enim isi praesent elementum facilisis leo. Vel fringilla est ullamcorper eget nulla facilisi etiama ashfa dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu agv he volutpat odio asas facilisis mauris sit.",
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam facilisis dignissim diam quis enim lobortis scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam facilisis dignissim diam quis enim lobortis scelerisque iin fermentumisa dui faucibus in ornare.Lorem ipsum dolor sit.",
    CoverImage: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    ImagePortada: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project-dt-1.jpeg",
    ImagePrimary: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project-dt-1.jpeg",
    Src1: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    Src2: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    Src3: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    Src4: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    ImageSecondary: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project-dt-1.jpeg",
  },
  {
    Area: "Web Desing",
    Nombre: "Dynamic",
    Date: "2023",
    Titulo: "Aestetich Desing For Brand New Startup",
    Subtitle: "Branding - raven studio",
    NombreEmpresa: "Raven Studio",
    DescEmpresa: "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit. Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.",
    Resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna ve fringilla urna, porttitor rhoncus dolor purus nonds enim isi praesent elementum facilisis leo. Vel fringilla est ullamcorper eget nulla facilisi etiama ashfa dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu agv he volutpat odio asas facilisis mauris sit.",
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam facilisis dignissim diam quis enim lobortis scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam facilisis dignissim diam quis enim lobortis scelerisque iin fermentumisa dui faucibus in ornare.Lorem ipsum dolor sit.",
    CoverImage: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    ImagePortada: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project-dt-1.jpeg",
    ImagePrimary: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project-dt-1.jpeg",
    Src1: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    Src2: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    Src3: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    Src4: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    ImageSecondary: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project-dt-1.jpeg",
  },
  {
    Area: "Web Desing",
    Nombre: "5 Dynamic",
    Date: "2023",
    Titulo: "Aestetich Desing For Brand New Startup",
    Subtitle: "Branding - raven studio",
    NombreEmpresa: "Raven Studio",
    DescEmpresa: "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit. Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.",
    Resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna ve fringilla urna, porttitor rhoncus dolor purus nonds enim isi praesent elementum facilisis leo. Vel fringilla est ullamcorper eget nulla facilisi etiama ashfa dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu agv he volutpat odio asas facilisis mauris sit.",
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam facilisis dignissim diam quis enim lobortis scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam facilisis dignissim diam quis enim lobortis scelerisque iin fermentumisa dui faucibus in ornare.Lorem ipsum dolor sit.",
    CoverImage: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    ImagePortada: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project-dt-1.jpeg",
    ImagePrimary: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project-dt-1.jpeg",
    Src1: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    Src2: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    Src3: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    Src4: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg",
    ImageSecondary: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project-dt-1.jpeg",
  },
];
let ServicesData = [
  {
    label: 'photo_camera',
    name: 'Fotografia',
    desc: 'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.',
  },
  {
    label: 'draft_orders',
    name: 'Diseño web',
    desc: 'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.',
  },
  {
    label: 'overview_key',
    name: 'Marca',
    desc: 'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.',
  },
  {
    label: 'screenshot',
    name: 'Desarrollo',
    desc: 'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.',
  },
];
let BlogData = [
  {
    Title: "CONSULTED ADMITTING IS POWER ACUTENESS.",
    Subtitle: "HOME - Consulted admitting is power acuteness.",
    Image: "https://wpriverthemes.com/gridx/wp-content/uploads/2023/06/blog1.jpeg",
    Date: "June 9, 2023",
    Category: "",
    Info: `
Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.

Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Giy direction neglected but supported yet her.

New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.

- Pretty merits waited six
- General few civilly amiable pleased account carried.
- Continue indulged speaking
- Narrow formal length my highly
- Occasional pianoforte alteration unaffected impossible

Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited.
`,
    Tags: ["Developement", "SASS"]
  },
];
let ContactData = [
  {
    FaIcon: 'fa-envelope-o',
    Name: 'Mail info',
    Data: `
    info@mail.com
    info@mail.com
    `,
  },
  {
    FaIcon: 'fa-phone',
    Name: 'Phone info',
    Data: `
    info@mail.com
    info@mail.com
    `,
  },
  {
    FaIcon: 'fa-map-marker',
    Name: 'Location',
    Data: `
    Cali, Colombia
    `,
  },
]
let IconPage = "/react.svg";
// Material Icon Reference
let ArrowIcon = "prompt_suggestion";
//BD Recovery


// Drive Data Base
const DriveDB_API = "https://script.google.com/macros/s/AKfycbwUo05mr_A96sgXfxQ96PpmqtBAAWqVz1-WnmM7BeaSY7E7vwvdqdzrGnIlI6lueYg0RA/exec";
const DriveFile = (fileID)=>{
  return DriveDB_API + '?fileId=' + fileID;
}


export {
  PreLoad,
  DeleteLocalDate,
  copyToClipboard,

  API_version,

  PageData,
  GeneralData,
  ProfileData,
  EducationData,
  ExperienceData,
  SkillsData,
  CertificationsData,
  SocialData,
  ProyectosData,
  BlogData,
  ContactData,
  ServicesData,

  IconPage,
  ArrowIcon,

  DriveFile,

  sendMailContact
};