const API_URL = "https://script.google.com/macros/s/AKfycbyHK3Z3f_jG0GhUbUDkKCdMmbGibyH99joOEcTBiwKllRlDbHDeYZYhdbD8B28ams5XOg/exec"
const endpoint = "?sheetName=";
export const fetchBookData = async (bookName) => {
  const url = `${API_URL}${endpoint}${bookName}`;
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

export const postBookData = async (sheetName, key, value) => {
  const url = API_URL;
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

const PageData = [
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

const TagLineData = " Disponible para: Prestación de servicios";

const ProfileData = {
  Nombre: "Diego Ortiz",
  Apodo: "Muse Coder",
  NombreCompleto: "Diego Ortiz Hurtado",
  Rol: "Programador",
  SortBio: "Soy un desarrollador de aplicativos interactivos.",
  Bio: "I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.",
  ImageSrc: "https://media.licdn.com/dms/image/D4E03AQHD4cTeI7u7Hw/profile-displayphoto-shrink_800_800/0/1712670440594?e=1723680000&v=beta&t=jLSlBcNtD69829yHaaUTXMjM1cxddFvFocOKUog5FYQ",
  State: 1
};
const EducationData = [
  {
    Name: "Tecnología en Produccion de Multimedia",
    InitAge: "2016",
    FinishAge: "2018",
    Insitution: "Servicio Nacional de Aprendizaje SENA",
    Desc: "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
    link: "",
  },
  {
    Name: "Ingeniería en Multimedia",
    InitAge: "2018",
    FinishAge: "Actualidad",
    Insitution: "Universidad Autónoma de Occidente",
    Desc: "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
    link: "",
  },
];

const ExperienceData = [
  {
    Cargo: "Desarrollador Vue",
    InitAge: "Enero 2022",
    FinishAge: "Agosto 2022",
    Insitution: "OpenCode SAS",
    Desc: "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
    link: "",
  },
  {
    Cargo: "Desarrollador Unity",
    InitAge: "2022",
    FinishAge: "Actualidad",
    Insitution: "Corporación Talentum",
    Desc: "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
    link: "",
  },
];
const SkillsData = [
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
const CertificationsData = [
  {
    Nombre: "Unity Certification",
    Date: "14 May 2020",
    Desc: "Non enim praesent",
    Image: "",
    link: "",
  },
];
const SocialData = [
  {
    Red: "LinkedIn",
    Profile: "",
    Link: "",
    Image: "",
    Desc: "Non enim praesent",
  },
  {
    Red: "Github",
    Profile: "",
    Link: "",
    Image: "",
    Desc: "Non enim praesent",
  },
];

//PAGE DESING
const IconPage = "src/assets/react.svg";
const ArrowIcon = "prompt_suggestion";


export {
  PageData,
  TagLineData,
  ProfileData,
  EducationData,
  ExperienceData,
  SkillsData,
  CertificationsData,
  SocialData,

  IconPage,
  ArrowIcon,
};