import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import styles from "./MySelect.module.scss";

type SelectSort = undefined | "HighToLow" | "LowToHigh";

const MySelect = () => {
    const [pickedSort, setPickedSort] = useState<SelectSort>();
    const [openedList, setOpenedList] = useState(false);

    const { t } = useTranslation("common");

    const handleClick = () => {
        setOpenedList(!openedList);
    };

    const handleItem = (value: SelectSort) => {
        console.log(value);
        setPickedSort(value);
        setOpenedList(false);
    };

    const closeList = () => {
        setOpenedList(false);
    };

    return (
        <div>
            <button onClick={handleClick} className={styles.mySelect}>
                {t("buttonFilter.text")}
            </button>

            {openedList && (
                <div className={styles.selectContainer} tabIndex={0}>
                    <ul className={styles.selectContainer__list}>
                        <li className={styles.selectContainer__item}>
                            <button onClick={() => handleItem(undefined)}>
                                {t("buttonFilter.undefined")}
                            </button>
                        </li>
                        <li className={styles.selectContainer__item}>
                            <button onClick={() => handleItem("HighToLow")}>
                                {t("buttonFilter.HighToLow")}
                            </button>
                        </li>
                        <li className={styles.selectContainer__item}>
                            <button onClick={() => handleItem("LowToHigh")}>
                                {t("buttonFilter.LowToHigh")}
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MySelect;
