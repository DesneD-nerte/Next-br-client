import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { IItem } from "../../../../models/IITem";
import { useAppDispatch } from "../../../../store/hooks";
import { setExpand } from "../../../../store/reducers/MenuSlice";
import { setVisible } from "../../../../store/reducers/SearchSlice";
import styles from "./SearchItem.module.css";

type SearchItemProps = {
    item: IItem;
};

const SearchItemImage: FC<SearchItemProps> = (props: SearchItemProps) => {
    const dispatch = useAppDispatch();

    const handleCloseSearch = () => {
        dispatch(setExpand(true));
        dispatch(setVisible(false));
    };

    return (
        <div
            className={styles.sectionContainer__Right__Images}
            onClick={handleCloseSearch}
        >
            <Link href={process.env.NEXT_PUBLIC_HOST + props.item.url}>
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
            </Link>
        </div>
    );
};

export default SearchItemImage;
