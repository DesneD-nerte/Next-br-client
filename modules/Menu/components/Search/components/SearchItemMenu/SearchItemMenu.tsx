import { useEffect } from "react";
import { useAppSelector } from "@store/hooks";
import Link from "next/link";

function SearchItemMenu() {
    const { searchValue, visible, items } = useAppSelector((state) => state.menuSearch);

    useEffect(() => {}, [searchValue]);

    return (
        <>
            <ul>
                <li>
                    <Link href={"/search"} onClick={(e) => console.log(123)}>
                        {searchValue}
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default SearchItemMenu;
