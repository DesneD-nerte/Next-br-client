import React, { Fragment } from "react";
import Head from "next/head";
import MainLayout from "@layouts/MainLayout";

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
