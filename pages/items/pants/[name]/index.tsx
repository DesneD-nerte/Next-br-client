import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../../components/layout/layout";
import WithGallery from "../../../../components/layout/WithGallery";
import { IDataGallery } from "../../../../models/IDataGallery";

const data: IDataGallery[] = [
    {
        url: "/pants.jpg",
        name: "Collection",
        description: "Some Descr",
    },
    {
        url: "/pants1.jpg",
        name: "New name",
        description: "Go to the shop",
    },
];

function ItemPants() {
    const router = useRouter();

    const { name } = router.query;
    return (
        <Layout>
            <WithGallery data={data}>
                <div>Pants: {name}</div>
            </WithGallery>
        </Layout>
    );
}

export default ItemPants;
