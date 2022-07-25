import Image from "next/image";
import React, { FC } from "react";
import { IItem } from "../../../models/IITem";
import styles from "./SearchItem.module.css";

type SearchItemProps = {
    item: IItem;
};

const SearchItem: FC<SearchItemProps> = (props: SearchItemProps) => {
    return (
        <div className={styles.sectionContainer__Right__Images}>
            <a>
                <Image
                    src={process.env.NEXT_PUBLIC_API + props.item.photos[0].url}
                    width={120}
                    height={120}
                    alt="image"
                    layout="fixed"
                    // objectFit="contain"
                ></Image>
            </a>
        </div>
    );
};

export default SearchItem;
