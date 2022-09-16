import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { IItem } from "../../../../models/IITem";

interface SearchItemProps {
    item: IItem;
}

const SearchItemImage: FC<SearchItemProps> = ({ item }: SearchItemProps) => {
    return (
        <Link href={"/" + item.url}>
            <a>
                <Image
                    src={process.env.NEXT_PUBLIC_API + item.photos[0].url}
                    width={120}
                    height={120}
                    alt="image"
                    layout="fixed"
                ></Image>
            </a>
        </Link>
    );
};

export default SearchItemImage;
