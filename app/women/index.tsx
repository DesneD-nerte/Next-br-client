import { Fragment } from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

import { CircularProgress } from "@mui/material";

import WithGallery from "@layouts/WithGallery/WithGallery";
import { IDataGallery } from "@models/IDataGallery";

const data: IDataGallery[] = [
    {
        urlImage: "/Hero.avif",
        url: "/search",
        name: "Women lol",
        description: "Some Descr",
    },
    {
        urlImage: "/Trap.png",
        url: "/search",
        name: "New name",
        description: "Go to the shop",
    },
];

const WomenPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Women | Bond Reality</title>
                <meta name="description" content="Women's category of the Bond Shop." />
            </Head>

            <WithGallery data={data}>
                <main className={styles.main}>
                    <CircularProgress sx={{ color: "#2c2c2c" }}></CircularProgress>
                </main>
            </WithGallery>
        </Fragment>
    );
};

export default WomenPage;
