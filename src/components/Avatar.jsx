import styles from './Avatar.module.css';

/** quando uma prop é desestruturada podemos aplicar valores default -> hasBorder = true
 * ou seja, mesmo se essa prop nao for explicitamente adicionada, o seu valor será true por padrão */
export function Avatar({ hasBorder = true, src }) {

  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} />
  );
}