import type { Metadata, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CircularProgress } from "@mui/material";

import WithGallery from "@layouts/WithGallery/WithGallery";
import { IDataGallery } from "@models/IDataGallery";

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

export const metadata: Metadata = {
    title: "Bond Reality",
    description: "Exclusive clothing store.",
};

const Home: NextPage = () => {
    return (
        <>
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
