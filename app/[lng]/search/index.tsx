import { Fragment, useCallback, useState } from "react";
import type { Metadata, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./search.module.scss";

import MainContent from "@layouts/MainContent/MainContent";
import FilterPanel from "@components/pages/search/FilterPanel";
import ControlPanel from "@components/pages/search/ControlPanel";

export const metadata: Metadata = {
    title: "Search | Bond Reality",
    description: "Search exactly what you want.",
};

const Search: NextPage = () => {
    // const [allItems, setAllItems] = useState();
    const [isOpenedFilterPanel, setIsOpenedFilterPanel] = useState(false);

    const handleToggleFilter = useCallback(() => {
        setIsOpenedFilterPanel((isOpenedFilterPanel) => {
            return !isOpenedFilterPanel;
        });
    }, []);

    return (
        <Fragment>
            <MainContent>
                <div className={"row g-0 w-100"}>
                    {isOpenedFilterPanel && (
                        <div className={`${"col-3"}`}>
                            <FilterPanel handleToggleFilter={handleToggleFilter} />
                        </div>
                    )}
                    <div className={`${isOpenedFilterPanel && "col-9"}`}>
                        <ControlPanel handleToggleFilter={handleToggleFilter} />

                        <div className={"row g-0"}>
                            <div className={"col-6 col-md-4 col-lg-3 gx-1"}>
                                <Link
                                    href="/"
                                    className={"position-relative"}
                                    style={{ height: 300 }}
                                >
                                    <Image
                                        src="/landscape/1.jpg"
                                        alt="image"
                                        className={styles.oneImage}
                                        fill
                                    ></Image>
                                </Link>
                            </div>
                            <div className={"col-6 col-md-4 col-lg-3 gx-1"}>
                                <Link
                                    href="/"
                                    className={"position-relative"}
                                    style={{ height: 300 }}
                                >
                                    <Image
                                        src="/landscape/2.jpg"
                                        alt="image"
                                        className={styles.oneImage}
                                        fill
                                    ></Image>
                                </Link>
                            </div>
                            <div className={"col-6 col-md-4 col-lg-3 gx-1"}>
                                <Link
                                    href="/"
                                    className={"position-relative"}
                                    style={{ height: 300 }}
                                >
                                    <Image
                                        src="/landscape/3.jpg"
                                        alt="image"
                                        className={styles.oneImage}
                                        fill
                                    ></Image>
                                </Link>
                            </div>
                            <div className={"col-6 col-md-4 col-lg-3 gx-1"}>
                                <Link
                                    href="/"
                                    className={"position-relative"}
                                    style={{ height: 300 }}
                                >
                                    <Image
                                        src="/landscape/4.jpg"
                                        alt="image"
                                        className={styles.oneImage}
                                        fill
                                    ></Image>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </MainContent>
        </Fragment>
    );
};

export default Search;
