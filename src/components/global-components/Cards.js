const Card = (props, ...rest) => {
  return (
    <div className=".card" {...rest}>
      {props.children}
    </div>
  );
};
const CardHeader = (props, ...rest) => {
  return (
    <div className=".card__header" {...rest}>
      {props.children}
    </div>
  );
};
const CardContent = (props, ...rest) => {
  return (
    <div className=".card__content" {...rest}>
      {props.children}
    </div>
  );
};

const components = { Card, CardHeader, CardContent };
export default components;
