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
          Soy Gael
        </SectionHeader>
        <P>
          Soy un desarrollador web, intereresado en hacer tus proyectos realidad
          <br />
          Hay que crear <b>soluciones</b> hoy para estar mejor <b>mañana</b>
        </P>
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
          autodidacta, con el objetivo de mejorar mas cada día
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
        <P>
          ¿Alguna duda?
          <br />
          ¿Quieres trabajar conmigo?
          <br />
          Puedes contactarme por los siguientes medios
        </P>
        <Card>
          <List>
            {contacts.map((el) => (
              <Element>
                <a href={el.url} targer="__BLANK">
                  <span style={{ fontSize: "1.5em", padding: "10px" }}>
                    {el.icon}
                  </span>
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
