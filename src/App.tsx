import HelloWorld from "~/components/HelloWorld/HelloWorld";

import styles from "./App.module.css";

export default function App() {
  return (
    <main className={styles.main}>
      <HelloWorld msg="Hello React + TypeScript + Vite" />
    </main>
  );
}
