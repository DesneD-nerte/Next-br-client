import React, { Fragment } from "react";
import MainLayout from "@layouts/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Items | Bond Reality",
    description: "Look at the entire collection of Bond shop.",
};

function index() {
    return (
        <Fragment>
            <MainLayout>
                <div>
                    <main>Hello</main>
                </div>
            </MainLayout>
        </Fragment>
    );
}

export default index;
