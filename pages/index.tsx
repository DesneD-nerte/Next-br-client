import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/layout";
import Menu from "../components/menu/Menu";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Bond Reality</title>
                {/* <meta name="description" content="Generated by create next app" /> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className={styles.container}>
                    <main className={styles.main}></main>
                    {/* <footer className={styles.footer}></footer> */}
                </div>
            </Layout>
        </>
    );
};

export default Home;
