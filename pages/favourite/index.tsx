import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const FavouritePage = () => {
    return <div>index</div>;
};

export default FavouritePage;

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["menu", "footer"])),
        },
    };
}
