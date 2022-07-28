import { useRouter } from "next/router";
import React from "react";
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
        <WithGallery data={data}>
            <div>Pants: {name}</div>
        </WithGallery>
    );
}

export default ItemPants;
