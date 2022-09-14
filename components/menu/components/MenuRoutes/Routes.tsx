import { routeProperties } from "../../../../utils/types/routeProperties";
import MenuItems from "./MenuItems";
import React from "react";
import { MenuLinks } from "../../../../utils/elements/Menu";

type menuRoutesProps = {
    routes: Array<routeProperties>;
};

const Routes = ({ routes }: menuRoutesProps) => {
    return (
        <MenuLinks>
            <ul>
                {routes.map((oneMenuRoute: routeProperties) => {
                    return (
                        <MenuItems
                            oneMenuRoute={oneMenuRoute}
                            key={oneMenuRoute.path}
                        ></MenuItems>
                    );
                })}
            </ul>
        </MenuLinks>
    );
};

export default React.memo(Routes);
