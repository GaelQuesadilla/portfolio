import {
  Section,
  SectionDivider,
  SectionHeader,
} from "./../components/global-components/Sections";
import {
  Button,
  Element,
  List,
  P,
  Tags,
} from "./../components/global-components/Tags";
import {
  Card,
  CardContent,
  CardHeader,
  CardImage,
} from "./../components/global-components/Cards";

import { contacts, projects_data } from "../resources/data";

const Home = (props, ...rest) => {
  return (
    <div className="content">
      <Section>
        <SectionHeader title="home">
          ¡Hola! <br />
          Mi nombre es Gael
        </SectionHeader>
        <P>Soy un desarrollador, centrado en la creación de paginas web</P>
        <br />
        <a href="#projects">
          <Button>Ver projectos</Button>
        </a>
        <a href="#contact">
          <Button>Contactame</Button>
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
            <Tags tags={el.tags} />
          </Card>
        ))}
      </Section>
      <Section>
        <SectionDivider title="contact" />
        <SectionHeader>Contactame</SectionHeader>
        <P>Puedes contactarme en los siguientes medios</P>
        <Card>
          <List>
            {contacts.map((el) => (
              <Element>
                <a href={el.url} targer="__BLANK">
                  <span style={{ fontSize: "1.5em", padding:"10px"}}>{el.icon}</span>
                  {el.name}
                </a>
              </Element>
            ))}
          </List>
        </Card>
      </Section>
    </div>
  );
};

export default Home;
