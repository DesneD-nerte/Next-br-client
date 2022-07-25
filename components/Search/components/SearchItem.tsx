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
                    // src={props.item.photos[0].url}
                    src={
                        "http://localhost:5000/items/pants/13e09368-a0bf-44e7-aa2e-782c866baa16.jpg"
                    }
                    width={70}
                    height={70}
                    alt="image"
                ></Image>
            </a>
        </div>
    );
};

export default SearchItem;
