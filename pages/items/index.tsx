import Head from "next/head";
import React, { Fragment } from "react";
import MainLayout from "../../components/layout/MainLayout";

function index() {
    return (
        <Fragment>
            <Head>
                <title>All Items | Bond Reality</title>
                <meta name="description" content="Look at the entire collection of Bond shop." />
            </Head>

            <MainLayout>
                <div>
                    <main>Hello</main>
                </div>
            </MainLayout>
        </Fragment>
    );
}

export default index;
