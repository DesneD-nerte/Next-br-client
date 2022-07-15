import "../styles/globals.css";
// import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head> */}
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}

export default MyApp;
