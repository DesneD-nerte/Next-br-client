import { CircularProgress } from "@mui/material";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import WithGallery from "../components/layout/WithGallery";
import { IDataGallery } from "../models/IDataGallery";

const data: IDataGallery[] = [
    {
        urlImage: "/Hero.avif",
        url: "/search",
        name: "Collection",
        description: "Some Descr",
    },
    {
        urlImage: "/Trap.png",
        url: "/search",
        name: "New name",
        description: "Go to the shop",
    },
];

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Bond Reality</title>
                <meta name="description" content="Exclusive clothing store." />
            </Head>

            <WithGallery data={data}>
                <CircularProgress sx={{ color: "#2c2c2c" }}></CircularProgress>
            </WithGallery>
        </>
    );
};

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "footer", "menu"])),
            // Will be passed to the page component as props
        },
    };
}
