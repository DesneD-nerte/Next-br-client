import React, { useState, useRef, useEffect } from "react";
import styles from "./MySelect.module.scss";
import { useTranslation } from "@src/hooks/useTranslation";

export interface mySelectOptions<T> {
    option?: T;
    i18Name: string;
}

interface mySelectProps<T> {
    optionsArray: mySelectOptions<T>[];
}

async function MySelect<T>({ optionsArray }: mySelectProps<T>) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [pickedSort, setPickedSort] = useState<T>();
    const [openedList, setOpenedList] = useState(false);

    const refDiv = useRef<HTMLDivElement>(null);

    const { t } = await useTranslation("common");

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
