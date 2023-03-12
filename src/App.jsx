import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./App.module.css";
import { TestMessageContext } from "./dataLayer";
import { AuthContext } from "./dataLayer/contexts/AuthContext";
import { CartDialogContainer, Header, Footer, RouterElement } from "./uiLayer";

function App() {
  const location = useLocation();
  const authStatus = false;
  const [isAuthenticated, setIsAuthenticated] = useState(authStatus);

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <TestMessageContext.Provider value='Hello from test message context!'>
      <AuthContext.Provider
        value={{
          isAuthenticated: isAuthenticated,
          setAuthenticationStatus: setIsAuthenticated,
        }}
      >
        <div className={styles["page-wrapper"]}>
          <Header />
          <div className={styles["content-wrapper"]}>
            <RouterElement />
          </div>
          <Footer />
        </div>
        <CartDialogContainer />
      </AuthContext.Provider>
    </TestMessageContext.Provider>
  );
}

export default App;
