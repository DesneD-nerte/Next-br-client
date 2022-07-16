import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout/layout";
import styles from "../../styles/Home.module.css";

const Search: NextPage = () => {
    return (
        <>
            <Layout>
                <div className={styles.container}>
                    <main className={styles.main}>Here will be Searching...</main>
                    {/* <footer className={styles.footer}></footer> */}
                </div>
            </Layout>
        </>
    );
};

export default Search;
