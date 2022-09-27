import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState('');

  // formatando datas utilizando date-fns -> objetivo: "20 de setembro às 20:23h"
  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    // addSufix serve para adicionar o "a cerca de..." "há ..." antes do tempo
    addSuffix: true,
  })

  const isNewCommentEmpty = newComment.length === 0;

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewComment() {
    //para que a validacao nao ' bug' precisamos settar sua validacao para string vazia...
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function deleteComment(commentToDelete) {
    // imutabilidade -> as variaveis nao sofrem mutacao, é criado um novo valor
    const commentsAfterDelete = comments.filter(comment => {
      return comment !== commentToDelete;
    });

    setComments(commentsAfterDelete);
  }

  //mudando a mensagem de validacao padrao para uma customizada
  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          //o valor dessa textarea é igual a newComment -> sempre que o valor de newComment mudar a textarea ira mudar junto... (apos handleCreateNewComment fica vazio (''))
          value={newComment}
          onChange={handleNewComment}

          onInvalid={handleNewCommentInvalid}
          required={true}
        />
      
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
        
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment}
              //passando a funcao deleteComment como parametro dentro do <Comment />
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}