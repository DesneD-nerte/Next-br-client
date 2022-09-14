import Link from "next/link";
import React from "react";
import { childRoutes } from "../../../../utils/types/routeProperties";
import { MenuColumnItem } from "../../../../utils/elements/Menu";

const OneColumnItem = ({ name, path }: childRoutes) => {
    return (
        <MenuColumnItem>
            <Link href={path}>
                <a>{name}</a>
            </Link>
        </MenuColumnItem>
    );
};

export default OneColumnItem;
