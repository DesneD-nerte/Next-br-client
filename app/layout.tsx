import "@styles/fonts/_fonts.scss";
import "bootstrap/dist/css/bootstrap.css";
import "@styles/globals.css";
import "@styles/_base.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import { Provider } from "react-redux";
import { store } from "@store/store";
import MainLayout from "@layouts/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    viewport: "idth=device-width, initial-scale=1",
    icons: {
        icon: "/favicon.ico"
    }
};


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Provider store={store}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Provider>
        </>
    );
}

export default appWithTranslation(MyApp);
