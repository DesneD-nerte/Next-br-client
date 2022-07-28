import { CircularProgress } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import WithGallery from "../components/layout/WithGallery";
import { IDataGallery } from "../models/IDataGallery";
import styles from "../styles/Home.module.css";

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
                {/* <meta name="description" content="Generated by create next app" /> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <WithGallery data={data}>
                <main className={styles.main}>
                    <CircularProgress sx={{ color: "#2c2c2c" }}></CircularProgress>
                </main>
            </WithGallery>
        </>
    );
};

export default Home;

// export async function getStaticProps(context) {
//     return (
//         props: {

//         }
//     )
// }
