import "./CardsStyle.scss"

export const Card = (props, ...rest) => {
  return (
    <div className="card" {...rest}>
      {props.children}
    </div>
  );
};
export const CardHeader = (props, ...rest) => {
  return (
    <div className="card__header" {...rest}>
      {props.children}
    </div>
  );
};
export const CardContent = (props, ...rest) => {
  return (
    <div className="card__content" {...rest}>
      {props.children}
    </div>
  );
};

export const CardImage = (props, ...rest) => {
  return(<img className="card__image" src={props.src} alt={props.alt} {...rest}/>)
}

