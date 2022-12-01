import React from "react";
import styles from "./ControlPanel.module.scss";

import MySelect, { mySelectOptions } from "@ui/selects/MySelect";
import FilterPanel from "./FilterPanel";

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

const ControlPanel = () => {
    return (
        <div className={styles.controlContainer}>
            <FilterPanel></FilterPanel>
            <MySelect optionsArray={selectOptions}></MySelect>
        </div>
    );
};

export default ControlPanel;
