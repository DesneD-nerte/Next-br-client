import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/_base.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import { Provider } from "react-redux";
import { store } from "@store/store";
import MainLayout from "@layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Provider store={store}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Provider>
        </>
    );
}

export default appWithTranslation(MyApp);
