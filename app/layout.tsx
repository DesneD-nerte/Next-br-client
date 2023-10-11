import "@styles/fonts/_fonts.scss";
import "bootstrap/dist/css/bootstrap.css";
import "@styles/globals.css";
import "@styles/_base.scss";

import { Metadata } from "next";
import { StoreProvider } from "@src/store/StoreProvider";

export const metadata: Metadata = {
    viewport: "idth=device-width, initial-scale=1",
    icons: {
        icon: "/favicon.ico",
    },
};

interface Props {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <>
            <StoreProvider>{children}</StoreProvider>
        </>
    );
}
