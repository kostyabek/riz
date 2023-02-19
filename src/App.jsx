import styles from "./App.module.css";
import { CartDialogContainer, Header, Footer, RouterElement } from "./uiLayer";

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <RouterElement />
        <Footer />
      </div>
      <CartDialogContainer />
    </>
  );
}

export default App;
