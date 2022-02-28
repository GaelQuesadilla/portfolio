import "./sectionStyles.scss";

export const SectionDivider = (props, ...rest) => {
  return <div className="section-divider" id={props.title} {...rest}/>;
};

export const SectionHeader = (props, ...rest) => {
  return (
    <header className="section-header" {...rest}>
      {props.children}
    </header>
  );
};

export const Section = (props, ...rest) => {
  return <section className="section">{props.children}</section>;
};
