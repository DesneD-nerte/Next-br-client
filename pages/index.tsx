import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect } from "react";
import Layout from "../components/layout/layout";
import { Search } from "../components/Search/Search";
import { useAppDispatch } from "../store/hooks";
import { setExpand } from "../store/reducers/MenuSlice";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const dispatch = useAppDispatch();

    const onScroll = useCallback((event: any) => {
        const { pageYOffset } = window;
        if (pageYOffset === 0) {
            dispatch(setExpand(true));
        } else {
            dispatch(setExpand(false));
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Bond Reality</title>
                {/* <meta name="description" content="Generated by create next app" /> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className={styles.container}>
                    <main className={styles.main}>
                        <Search></Search>
                        {/* <Search></Search> */}
                    </main>
                    {/* <footer className={styles.footer}></footer> */}
                </div>
            </Layout>
        </>
    );
};

export default Home;
