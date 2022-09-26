import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Luiz Nambu"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint eligendi inventore, harum perferendis cum dolorum beatae labore quae, molestias numquam recusandae atque iure qui incidunt voluptatum. Cumque explicabo sequi deleniti?
            "
          />
          <Post 
            author="Shoganai"       
            content="Um novo post"
          />
        </main>
      </div>
      
    </div>
  )
}
export default App

