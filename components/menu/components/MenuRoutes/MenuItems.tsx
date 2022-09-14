import Link from "next/link";
import React, { useState } from "react";
import { routeProperties } from "../../../../utils/types/routeProperties";
import SubMenu from "./SubMenu";
import { MenuMainPathItem } from "../../../../utils/elements/Menu";
import { LinkButton } from "../../../../utils/elements/Button";

type menuItemsProps = {
    oneMenuRoute: routeProperties;
};

function MenuItems({ oneMenuRoute }: menuItemsProps) {
    const [isDropDown, setIsDropDown] = useState(false);

    return (
        <MenuMainPathItem
            onMouseEnter={() => setIsDropDown(true)}
            onMouseLeave={() => setIsDropDown(false)}
        >
            <Link href={oneMenuRoute.path}>
                <LinkButton color="white">{oneMenuRoute.name}</LinkButton>
            </Link>

            <SubMenu
                childRoutes={oneMenuRoute.children}
                isDropDown={isDropDown}
            ></SubMenu>
        </MenuMainPathItem>
    );
}

export default MenuItems;
