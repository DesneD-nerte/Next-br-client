import type { NextPage } from "next";
import Link from "next/link";
import WithoutGallery from "../../components/layout/WithoutGallery";
import styles from "./search.module.css";
import Image from "next/image";

const Search: NextPage = () => {
    return (
        <WithoutGallery isMargin={false}>
            <>
                <div className={styles.controlContainer}>Control panel</div>
                <div className={styles.searchContainer}>Search</div>
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
            </>
        </WithoutGallery>
    );
};

export default Search;
