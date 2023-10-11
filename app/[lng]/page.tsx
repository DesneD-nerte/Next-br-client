"use client";

import type { Metadata, NextPage } from "next";
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
