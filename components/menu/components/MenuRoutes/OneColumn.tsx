import React from "react";
// import { MenuColumn } from "../utils/elements/Menu";
import { MenuColumn } from "../../../../utils/elements/Menu";
import { childRoutes } from "../../../../utils/types/routeProperties";
import OneColumnItem from "./OneColumnItem";

interface OneColumnMenuRoutesProps {
    oneColumn: childRoutes[];
}

const OneColumn = (props: OneColumnMenuRoutesProps) => {
    const { oneColumn } = props;

    return (
        <MenuColumn>
            {oneColumn.map((oneColumnRoute) => {
                return (
                    <OneColumnItem
                        name={oneColumnRoute.name}
                        path={oneColumnRoute.path}
                        key={oneColumnRoute.path}
                    ></OneColumnItem>
                );
            })}
        </MenuColumn>
    );
};

export default OneColumn;
