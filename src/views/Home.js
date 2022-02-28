import {
  Section,
  SectionDivider,
  SectionHeader,
} from "./../components/global-components/Sections";
import { Button, P } from "./../components/global-components/Tags";
import {
  Card,
  CardContent,
  CardHeader,
  CardImage,
} from "./../components/global-components/Cards";

import mymditorView from "../images/mymditorPreview.png";
import manitaMichiView from "../images/manita-michiPreview.png";

const projects_data = [
  {
    projectName: "Mymditor",
    url: "https://github.com",
    description:
      "Mymditor es un procesador de texto basado en django y react con servicios en la nube",
    imageSrc: mymditorView,
    tags: ["jaavscript", "django", "sass"],
  },
  {
    projectName: "Manita de Michi",
    url: "https://github.com",
    description:
      "Manita de Michi es una pagina de catalogos diseñada para un proyecto de ventas",
    imageSrc: manitaMichiView,
    tags: ["jaavscript", "django", "sass", "En desarrollo"],
  },
];
const Home = (props, ...rest) => {
  return (
    <div className="content">
      <Section>
        <SectionHeader title="home">
          ¡Hola! <br />
          Mi nombre es Gael
        </SectionHeader>
        <P>
          Soy un desarrollador, centrado en la creación de paginas web,
          interesado en utilizar sus conocimientos para hacer ideas realidad
        </P>
        <br />
        <a href="#projects">
          <Button>Ver más</Button>
        </a>
      </Section>
      <Section>
        <SectionDivider title="projects" />
        <SectionHeader>Proyectos</SectionHeader>
        <P>
          He realizado una variedad de proyectos a lo largo de mi formación
          autodidacta
        </P>
        {projects_data.map((el) => (
          <Card>
            <CardHeader>{el.projectName}</CardHeader>
            <CardImage src={el.imageSrc} alt={el.projectName} />
            <CardContent>{el.description}</CardContent>
          </Card>
        ))}
      </Section>
    </div>
  );
};

export default Home;
