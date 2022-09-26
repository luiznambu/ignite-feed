import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/luiznambu.png" />
          <div className={styles.authorInfo}>
            <strong>Luiz Nambu</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="22 de Setembro às 20:11" dateTime="2022-05-11 20:11:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat!</p>
        <p><a href="#">jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentário"
        />
      
        <footer>
          <button type="submit">
            Publicar
          </button>
        </footer>
        
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}