import { routeProperties } from "../../../types/routeProperties";
import styles from "../Menu.module.css";
import Link from "next/link";

type menuRoutesProps = {
    routes: Array<routeProperties>;
};

export const Routes = ({ routes }: menuRoutesProps) => {
    return (
        <div className={styles.menuLinks}>
            <ul>
                {routes.map((oneMenuRoute: routeProperties) => {
                    return (
                        <li className={styles.onePath} key={oneMenuRoute.path}>
                            <Link href={oneMenuRoute.path}>
                                <a className={`${styles.onePath__navLink} ${styles.a}`}>
                                    {oneMenuRoute.name}
                                </a>
                            </Link>

                            {oneMenuRoute.children && (
                                <ul className={styles.onePath__navList}>
                                    {oneMenuRoute.children?.map((oneChild) => {
                                        return (
                                            <li
                                                className={styles.onePath}
                                                key={oneMenuRoute.path}
                                            >
                                                <Link href={oneChild.path}>
                                                    <a
                                                        className={
                                                            styles.onePath__navLink
                                                        }
                                                    >
                                                        {oneChild.name}
                                                    </a>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
