import styles from "./TagsStyles.module.scss"
export const P = (props, ...rest)=>{
  return <p className={styles.text} {...rest}>{props.children}</p>
}

export const Button = (props, ...rest) => {
  return <button className={styles.button} {...rest}>{props.children}</button>
}