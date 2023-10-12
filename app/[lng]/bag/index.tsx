import React, { Fragment } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Your bag | Bond Reality",
    description: "Check out your items bag to initialize purchase.",
};

function index() {
    return (
        <Fragment>
            <div>index</div>
        </Fragment>
    );
}

export default index;
