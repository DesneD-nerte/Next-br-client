import React, { useEffect } from "react";
import { useAppSelector } from "@store/hooks";
// import siteMap from "../../../../pages/site-map";

function SearchItemMenu() {
    const { searchValue, visible, items } = useAppSelector((state) => state.search);

    useEffect(() => {}, [searchValue]);

    return (
        <>
            <ul>
                <li>
                    <div>{searchValue}</div>
                </li>
            </ul>
        </>
    );
}

export default SearchItemMenu;
