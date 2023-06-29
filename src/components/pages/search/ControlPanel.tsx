import React, { useState } from "react";
import styles from "./ControlPanel.module.scss";

import MySelect, { mySelectOptions } from "@ui/selects/MySelect";
import MyInput from "@components/UI/inputs/MyInput";

type SelectSort = undefined | "HighToLow" | "LowToHigh";
const selectOptions: mySelectOptions<SelectSort>[] = [
    {
        option: undefined,
        i18Name: "buttonFilter.undefined",
    },
    {
        option: "HighToLow",
        i18Name: "buttonFilter.HighToLow",
    },
    {
        option: "LowToHigh",
        i18Name: "buttonFilter.LowToHigh",
    },
];

interface ControlPanelProps {
    handleToggleFilter: () => void;
}

const ControlPanel = ({ handleToggleFilter }: ControlPanelProps) => {
    const [searchString, setSearchString] = useState("");

    return (
        <>
            <div className={styles.controlContainer}>
                <button
                    className={`button button_mainWhiteButton ${styles.controlContainer__filterButton}`}
                    onClick={handleToggleFilter}
                >
                    Filter
                </button>

                <MySelect optionsArray={selectOptions}></MySelect>
            </div>

            <div className={styles.searchContainer}>
                <MyInput
                    value={searchString}
                    setValue={setSearchString}
                    id="searchItems-input"
                    type="text"
                    labelTitle="Find items"
                ></MyInput>
            </div>
        </>
    );
};

export default React.memo(ControlPanel);
