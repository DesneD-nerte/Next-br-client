import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import WithGallery from "../../../../components/layout/WithGallery";
import { IDataGallery } from "../../../../models/IDataGallery";

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
            <Head>
                <title>Pants | Bond Reality</title>
                <meta
                    name="description"
                    content="Look at the entire collection of Bond Shop pants."
                />
            </Head>

            <WithGallery data={data}>
                <div>Pants: {name}</div>
            </WithGallery>
        </Fragment>
    );
}

export default ItemPants;
