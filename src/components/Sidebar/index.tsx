import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./Sidebar.module.css";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/38875073?v=4" />
        <strong>Joelson Dias</strong>
        <span>Developer</span>
      </div>
      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  );
}
