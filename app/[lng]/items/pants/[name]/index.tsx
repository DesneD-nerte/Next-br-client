import React, { Fragment } from "react";
import { useRouter } from "next/router";

import WithGallery from "@layouts/WithGallery/WithGallery";
import { IDataGallery } from "@models/IDataGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pants | Bond Reality",
    description: "Look at the entire collection of Bond Shop pants.",
};

const data: IDataGallery[] = [
    {
        urlImage: "/pants.jpg",
        url: "/search",
        name: "Collection",
        description: "Some Descr",
    },
    {
        urlImage: "/pants1.jpg",
        url: "/search",
        name: "New name",
        description: "Go to the shop",
    },
];

function ItemPants() {
    const router = useRouter();

    const { name } = router.query;
    return (
        <Fragment>
            <WithGallery data={data}>
                <div>Pants: {name}</div>
            </WithGallery>
        </Fragment>
    );
}

export default ItemPants;
