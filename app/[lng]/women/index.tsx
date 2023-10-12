import { Fragment } from "react";
import styles from "../../styles/Home.module.css";

import { CircularProgress } from "@mui/material";

import WithGallery from "@layouts/WithGallery/WithGallery";
import { IDataGallery } from "@models/IDataGallery";
import { Metadata } from "next";

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

export const metadata: Metadata = {
    title: "Women | Bond Reality",
    description: "Women's category of the Bond Shop.",
};

const WomenPage = () => {
    return (
        <Fragment>
            <WithGallery data={data}>
                <main className={styles.main}>
                    <CircularProgress sx={{ color: "#2c2c2c" }}></CircularProgress>
                </main>
            </WithGallery>
        </Fragment>
    );
};

export default WomenPage;
