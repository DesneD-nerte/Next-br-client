import React, { FC } from "react";
import { IItem } from "../../../models/IITem";

type SearchItemProps = {
    item: IItem;
};

const SearchItem: FC<SearchItemProps> = (props: SearchItemProps) => {
    return <div>{props.item.name}</div>;
};

export default SearchItem;
