import { Fragment, useState } from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./search.module.scss";

import MainContent from "@layouts/MainContent/MainContent";
import MySelect, { mySelectOptions } from "@components/UI/selects/MySelect";
import FilterPanel from "@components/pages/search/FilterPanel";
import MyInput from "@components/UI/inputs/MyInput";

type SelectSort = undefined | "HighToLow" | "LowToHigh";
const selectOptions: mySelectOptions<SelectSort>[] = [
    {
        option: undefined,
        i18Name: "buttonFilter.undefined",
    },
    {
        option: "HighToLow",
        i18Name: "buttonFilter.HighToLow",
    },
    {
        option: "LowToHigh",
        i18Name: "buttonFilter.LowToHigh",
    },
];

const Search: NextPage = () => {
    // const [allItems, setAllItems] = useState();
    const [isOpenedFilterPanel, setIsOpenedFilterPanel] = useState(false);

    const handleClickFilter = () => {
        setIsOpenedFilterPanel((isOpenedFilterPanel) => {
            return !isOpenedFilterPanel;
        });
    };

    const [searchString, setSearchString] = useState("");

    return (
        <Fragment>
            <Head>
                <title>Search | Bond Reality</title>
                <meta name="description" content="Search exactly what you want." />
            </Head>

            <MainContent>
                <div className={"row g-0 w-100"}>
                    {isOpenedFilterPanel && (
                        <div className={`${"col-3"}`}>
                            <FilterPanel />
                        </div>
                    )}
                    <div className={`${isOpenedFilterPanel && "col-9"}`}>
                        <div className={styles.controlContainer}>
                            <button onClick={handleClickFilter}>Filter</button>
                            <MySelect optionsArray={selectOptions}></MySelect>
                        </div>

                        <div className={styles.searchContainer}>
                            <MyInput
                                value={searchString}
                                setValue={setSearchString}
                                id="searchItems-input"
                                type="text"
                                labelTitle="Find items"
                            ></MyInput>
                        </div>

                        <div className={"row g-0"}>
                            <div className={"col-6 col-md-4 col-lg-3 gx-1"}>
                                <Link href="/">
                                    <a>
                                        <Image
                                            src="/landscape/1.jpg"
                                            width={60}
                                            height={60}
                                            alt="image"
                                            layout="responsive"
                                            objectFit="cover"
                                        ></Image>
                                    </a>
                                </Link>
                            </div>
                            <div className={"col-6 col-md-4 col-lg-3 gx-1"}>
                                <Link href="/">
                                    <a>
                                        <Image
                                            src="/landscape/2.jpg"
                                            width={60}
                                            height={60}
                                            alt="image"
                                            layout="responsive"
                                            objectFit="cover"
                                        ></Image>
                                    </a>
                                </Link>
                            </div>
                            <div className={"col-6 col-md-4 col-lg-3 gx-1"}>
                                <Link href="/">
                                    <a>
                                        <Image
                                            src="/landscape/3.jpg"
                                            width={60}
                                            height={60}
                                            alt="image"
                                            layout="responsive"
                                            objectFit="cover"
                                        ></Image>
                                    </a>
                                </Link>
                            </div>
                            <div className={"col-6 col-md-4 col-lg-3 gx-1"}>
                                <Link href="/">
                                    <a>
                                        <Image
                                            src="/landscape/4.jpg"
                                            width={40}
                                            height={40}
                                            alt="image"
                                            layout="responsive"
                                            objectFit="cover"
                                        ></Image>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </MainContent>
        </Fragment>
    );
};

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "footer", "menu"])),
        },
    };
}

export default Search;
