import React from "react";
import {
    SubMenuContainer,
    SubMenuContent,
} from "../../../../utils/elements/Menu";
import { childRoutes } from "../../../../utils/types/routeProperties";
import OneColumn from "./OneColumn";

type subMenuProps = {
    childRoutes: childRoutes[][];
    isDropDown: boolean;
};

function SubMenu({ childRoutes, isDropDown }: subMenuProps) {
    return (
        <SubMenuContainer hidden={!isDropDown}>
            <SubMenuContent>
                {childRoutes.map((oneColumn, index) => {
                    return <OneColumn oneColumn={oneColumn} key={index} />;
                })}
            </SubMenuContent>
        </SubMenuContainer>
    );
}

export default SubMenu;
