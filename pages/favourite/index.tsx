import React, { Fragment } from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const FavouritePage = () => {
    return (
        <Fragment>
            <Head>
                <title>Favourite | Bond Reality</title>
                <meta
                    name="description"
                    content="Check out your favourite items from the Bond Shop."
                />
            </Head>

            <div>index</div>
        </Fragment>
    );
};

export default FavouritePage;

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["menu", "footer"])),
        },
    };
}
