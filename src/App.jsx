import styles from "./App.module.css";
import { CartDialogContainer, Header, Footer, RouterElement } from "./uiLayer";

function App() {
  return (
    <>
      <div className={styles["page-wrapper"]}>
        <Header />
        <div className={styles["content-wrapper"]}>
          <RouterElement />
        </div>
        <Footer />
      </div>
      <CartDialogContainer />
    </>
  );
}

export default App;
