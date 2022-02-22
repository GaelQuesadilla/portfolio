const SectionDivider = (props, ...rest) => {
  return <div className=".section-divider" {...rest}></div>;
};

const SectionHeader = (props, ...rest) => {
  return (
    <header className=".section-header" {...rest}>
      {props.child}
    </header>
  );
};

const Section = (props, ...rest) => {
  return (
    <section className=".section" {...rest}>
      {props.child}
    </section>
  );
};

const components = { Section, SectionHeader, SectionDivider };
export default components;
