import Image from "next/image";
import React, { FC } from "react";
import { IItem } from "../../../models/IITem";

type SearchItemProps = {
    item: IItem;
};

const SearchItem: FC<SearchItemProps> = (props: SearchItemProps) => {
    return (
        <div>
            {props.item.name}
            <a>
                <Image
                    src={process.env.NEXT_PUBLIC_API + props.item.photos[0].url}
                    width={70}
                    height={70}
                    alt="image"
                ></Image>
            </a>
        </div>
    );
};

export default SearchItem;
