import { useState, useEffect } from "react";
import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import { Provider } from 'react-redux';
import {store} from '../store/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);
  let persistor = persistStore(store);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 250);

    return () => {
      setLoading(true);
    };
  }, [pageProps]);

  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <Header />
        <section
          className={loading === true ? "dark:animate-none animate-Loading " : ""}
        >
          <Component {...pageProps} />
        </section>

      </PersistGate>
      </Provider>
    </>
  );
}
export default MyApp;
