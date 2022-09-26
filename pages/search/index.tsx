import type { NextPage } from "next";
import Link from "next/link";
import styles from "./search.module.scss";
import Image from "next/image";
import MainContent from "../../components/layout/MainContent";
import MySelect from "../../components/ui/selects/MySelect";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Search: NextPage = () => {
    return (
        <MainContent isMargin={false}>
            <div className={styles.controlContainer}>
                <button>Filter</button>
                <MySelect></MySelect>
            </div>
            <div className={styles.searchContainer}></div>
            <div className={styles.itemsContainer}>
                <Link href="/">
                    <a>
                        <Image
                            src="/landscape/1.jpg"
                            width={60}
                            height={60}
                            alt="image"
                            layout="responsive"
                            // objectFit="contain"
                        ></Image>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <Image
                            src="/landscape/2.jpg"
                            width={60}
                            height={60}
                            alt="image"
                            layout="responsive"
                            // objectFit="contain"
                        ></Image>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <Image
                            src="/landscape/3.jpg"
                            width={60}
                            height={60}
                            alt="image"
                            layout="responsive"
                            // objectFit="contain"
                        ></Image>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <Image
                            src="/landscape/4.jpg"
                            width={60}
                            height={60}
                            alt="image"
                            layout="responsive"
                            // objectFit="contain"
                        ></Image>
                    </a>
                </Link>
            </div>
        </MainContent>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "footer",
                "menu",
            ])),
            // Will be passed to the page component as props
        },
    };
}

export default Search;
