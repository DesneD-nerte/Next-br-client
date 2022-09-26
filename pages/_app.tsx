import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
// import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../store/store";
import MainLayout from "../components/layout/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head> */}
            <Provider store={store}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Provider>
        </>
    );
}

export default appWithTranslation(MyApp);
