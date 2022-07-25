import { routeProperties } from "../../../types/routeProperties";
import styles from "./Routes.module.css";
import MenuItems from "./MenuItems";

type menuRoutesProps = {
    routes: Array<routeProperties>;
};

export const Routes = ({ routes }: menuRoutesProps) => {
    return (
        <div className={styles.menuLinks}>
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
        </div>
    );
};
