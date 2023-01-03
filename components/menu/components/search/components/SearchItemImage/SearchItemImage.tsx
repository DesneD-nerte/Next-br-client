import React from "react";
import { IItem } from "@models/IITem";
import Image from "next/image";
import Link from "next/link";

interface SearchItemProps {
    item: IItem;
}

const SearchItemImage = ({ item }: SearchItemProps) => {
    return (
        <Link href={"/" + item.url}>
            <Image
                src={process.env.NEXT_PUBLIC_API + item.photos[0].url}
                width={120}
                height={120}
                alt="image"
                layout="fixed"
            ></Image>
        </Link>
    );
};

export default SearchItemImage;
