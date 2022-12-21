import React from "react";
import styles from "../MenuMain.module.scss";

const LeftPanel = () => {
    return (
        <div className={styles.menuMain__left}>
            <button className={styles.menuMain__button}>Novosibirsk</button>
        </div>
    );
};

export default LeftPanel;
