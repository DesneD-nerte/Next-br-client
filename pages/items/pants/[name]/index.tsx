import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../../components/layout/layout";

function ItemPants() {
    const router = useRouter();

    const { name } = router.query;
    return (
        <Layout>
            <div>Pants: {name}</div>
        </Layout>
    );
}

export default ItemPants;
