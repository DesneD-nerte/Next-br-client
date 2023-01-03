import React from "react";
import styles from "./FilterPanel.module.scss";

import { MdClose } from "react-icons/md";

interface ControlPanelProps {
    handleToggleFilter: () => void;
}

const FilterPanel = ({ handleToggleFilter }: ControlPanelProps) => {
    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterContainer__header}>
                <div>Filter</div>
                <button onClick={handleToggleFilter}>
                    <MdClose size={30} color="#a8a8a8"></MdClose>
                </button>
            </div>
            <div className={styles.filterContainer__}>dwqeq </div>
            <div className={styles.filterContainer__}>dasda</div>
            <div className={styles.filterContainer__}>fsdgeryg re</div>
            <div className={styles.filterContainer__}>fsdgeryg re</div>
            <div className={styles.filterContainer__}>fsdgeryg re</div>
        </div>
    );
};

export default FilterPanel;
