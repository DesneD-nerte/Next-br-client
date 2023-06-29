import { useTranslation } from "next-i18next";
import React, { useState, useRef, useEffect } from "react";
import styles from "./MySelect.module.scss";

export interface mySelectOptions<T> {
    option?: T;
    i18Name: string;
}

interface mySelectProps<T> {
    optionsArray: mySelectOptions<T>[];
}

function MySelect<T>({ optionsArray }: mySelectProps<T>) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [pickedSort, setPickedSort] = useState<T>();
    const [openedList, setOpenedList] = useState(false);

    const refDiv = useRef<HTMLDivElement>(null);

    const { t } = useTranslation("common");

    const handleClick = () => {
        setOpenedList(!openedList);
    };

    useEffect(() => {
        const closeList = (event: MouseEvent) => {
            if (openedList && !refDiv.current?.contains(event.target as Node)) {
                setOpenedList(!openedList);
            }
        };

        document.addEventListener("mousedown", closeList);

        return () => {
            document.removeEventListener("mousedown", closeList);
        };
    }, [openedList]);

    const handleItem = (value?: T) => {
        setPickedSort(value);
        setOpenedList(false);
    };

    return (
        <div ref={refDiv} className={styles.mySelect}>
            <button
                onClick={handleClick}
                className={`button button_mainWhiteButton ${styles.mySelect__button}`}
            >
                {t("buttonFilter.text")}
            </button>

            {openedList && (
                <ul className={styles.selectContainer} tabIndex={0}>
                    {optionsArray.map((oneOptions) => {
                        return (
                            <li className={styles.selectContainer__item} key={oneOptions.i18Name}>
                                <button
                                    onClick={() => handleItem(oneOptions.option)}
                                    className={styles.selectContainer__button}
                                >
                                    {t(oneOptions.i18Name)}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default MySelect;
