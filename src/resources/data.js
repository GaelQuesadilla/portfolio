import mymditorView from "../images/mymditorPreview.png";
import manitaMichiView from "../images/manita-michiPreview.png";

import {
  FaInstagram,
  FaGithub,
  FaJs,
  FaPython,
  FaGit,
  FaDatabase,
  FaSass,
  FaReact,
  FaServer,
  FaMailBulk,
} from "react-icons/fa";

export const tags_data = {
  react: { name: "REACT", color: "#10a3cf", icon: <FaReact /> },
  django: { name: "DJANGO", color: "#2ba977", icon: <FaServer /> },
  sql: { name: "SQL", color: "#23479b", icon: <FaDatabase /> },
  git: { name: "GIT", color: "#ef4e35", icon: <FaGit /> },
  python: { name: "PYTHON ", color: "#366c99", icon: <FaPython /> },
  js: { name: "JAVASCRIPT ", color: "#f5da3d", icon: <FaJs /> },
  sass: { name: "SASS ", color: "#cd6799", icon: <FaSass /> },
};

export const projects_data = [
  {
    projectName: "Mymditor",
    url: "https://github.com/GaelQuesadilla/mymditor",
    description:
      "Mymditor es un procesador de texto basado en django y react con servicios en la nube",
    imageSrc: mymditorView,
    tags: [
      tags_data.django,
      tags_data.sass,
      tags_data.git,
      tags_data.python,
      tags_data.js,
    ],
  },
  {
    projectName: "Manita de Michi",
    url: false,
    description:
      "Manita de Michi es una pagina de catalogos diseñada para un proyecto de ventas",
    imageSrc: manitaMichiView,
    tags: [
      tags_data.django,
      tags_data.react,
      tags_data.python,
      tags_data.sass,
      tags_data.git,
    ],
  },
];

export const contacts = [
  {
    name: "Github",
    url: "",
    icon: <FaGithub/>,
  },
  {
    name: "Instagram",
    url: "",
    icon: <FaInstagram/>,
  },
  {
    name: "Correo Electronico",
    url: "",
    icon: <FaMailBulk/>,
  },
];
