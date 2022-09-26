import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/luiznambu.png',
      name: 'Luiz Nambu',
      role: 'web developer',
    },
    /** importante nao utilizar html no backend, por questoes de seguranca, vulnerabilidade */
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat. O nome do projeto é DoctorCare!' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-09-20 20:23:04'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/luiznambu.png',
      name: 'Luiz Nambu',
      role: 'web developer',
    },
    /** importante nao utilizar html no backend, por questoes de seguranca, vulnerabilidade */
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat. O nome do projeto é DoctorCare!' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-09-21 05:12:08'),
  },
];

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return ( 
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
export default App

