import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./styles/App.module.css";
import "./styles/global.css";

const posts = [
  {
    id: 1,
    author: {
      name: "Joelson Dias",
      avatarUrl: "http://github.com/joelsondiasti.png",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉doe.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-07 23:00:00"),
  },
  {
    id: 2,
    author: {
      name: "Diego Fernandes",
      avatarUrl: "http://github.com/diego3g.png",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: "Vai começar mais um NLW 🚀",
      },
      { type: "link", content: "👉rocket.io/nlw" },
    ],
    publishedAt: new Date("2022-06-07 23:00:00"),
  },
  {
    id: 3,
    author: {
      name: "Felippe do Nascimento",
      avatarUrl: "https://avatars.githubusercontent.com/u/28812188?v=4",
      role: "Professor @ Loide Martha",
    },
    content: [
      { 
        type: "paragraph",
        content: "Fala galeraa 👋" 
      },
      {
        type: "paragraph",
        content: "Vamo pra mais uma aula bombástica",
      },
      { 
        type: "link",
        content: "karrot.io/felippe"
      },
    ],
    publishedAt: new Date("2022-06-10 16:00:00"),
  },
];
function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
