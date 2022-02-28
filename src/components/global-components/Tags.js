import styles from "./TagsStyles.module.scss";
export const P = (props, ...rest) => {
  return (
    <p className={styles.text} {...rest}>
      {props.children}
    </p>
  );
};

export const Button = (props, ...rest) => {
  return (
    <button className={styles.button} {...rest}>
      {props.children}
    </button>
  );
};

export const Tag = (props, ...rest) => {
  return (
    <span className={styles.tags__element} style={{ backgroundColor: props.color }}>
      {props.children}
    </span>
  );
};

export const Tags = (props, ...rest) => {
  return (
    <div className={styles.tags}>
      {props.tags.map((el) => (
        <Tag color={el.color}>{el.name} {el.icon}</Tag>
      ))}
    </div>
  );
};

export const List = (props, ...rest) => {
  return (
    <ul className={styles.list} {...rest}>
      {props.children}
    </ul>
  );
};

export const Element = (props, ...rest) => {
  return (
    <li className={styles.list__element} {...rest}>
      {props.children}
    </li>
  );
};