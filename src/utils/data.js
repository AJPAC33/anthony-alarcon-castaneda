import {
  cssImage,
  htmlImage,
  javascriptImage,
  reactImage,
  reduxImage,
  tailwindImage,
} from "../assets";

export const projects = [
  {
    title: "Ecommerce App",
    description: "Aplicación de compras con carrito",
    github: "https://github.com/AJPAC33/ecommerce-app",
    link: "https://ajpac33-ecommerce-app.netlify.app",
    image: `${import.meta.env.BASE_URL}projectImages/ecommerce-app.png`,
  },
  {
    title: "Task Manager App",
    description:
      "Usar las siguientes credenciales, Email: admin@gmail.com, Password: 123456",
    github: "https://github.com/AJPAC33/task-manager-app",
    link: "https://ajpac33-task-manager-app.netlify.app",
    image: `${import.meta.env.BASE_URL}projectImages/task-manager-app.png`,
  },
  {
    title: "Journal App",
    description: "Aplicación para registrar notas",
    github: "https://github.com/AJPAC33/journal-app",
    link: "https://ajpac33-journal-app.netlify.app",
    image: `${import.meta.env.BASE_URL}projectImages/journal-app.png`,
  },
  {
    title: "Gif Expert App",
    description: "Aplicación para buscar gifs",
    github: "https://github.com/AJPAC33/react-gif-expert",
    link: "https://ajpac33-gif-expert-app.netlify.app",
    image: `${import.meta.env.BASE_URL}projectImages/react-gif-expert-app.png`,
  },
  {
    title: "Heroes SPA",
    description: "Aplicación de super heroes",
    github: "https://github.com/AJPAC33/heroes-spa",
    link: "https://ajpac33-heroes-spa.netlify.app",
    image: `${import.meta.env.BASE_URL}projectImages/heroes-spa.png`,
  },
];

export const skills = [
  {
    name: "Redux",
    image: reduxImage,
    shadow: "drop-shadow-[0_0_22px_rgba(89,61,136,0.75)]",
  },
  {
    name: "Tailwind",
    image: tailwindImage,
    shadow: "drop-shadow-[0_0_22px_rgba(69,252,240,0.75)]",
  },
  {
    name: "HTML",
    image: htmlImage,
    shadow: "drop-shadow-[0_0_22px_rgba(246,133,38,0.75)]",
  },
  {
    name: "CSS",
    image: cssImage,
    shadow: "drop-shadow-[0_0_22px_rgba(6,111,169,0.75)]",
  },
  {
    name: "Javascript",
    image: javascriptImage,
    shadow: "drop-shadow-[0_0_22px_rgba(255,250,5,0.75)]",
  },
  {
    name: "React",
    image: reactImage,
    shadow: "drop-shadow-[0_0_22px_rgba(74,217,255,0.75)]",
  },
];
