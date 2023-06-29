import React from "react";
import styles from "./MenuMain.module.scss";
import CenterPanel from "./MenuTopPanel/CenterPanel";
import LeftPanel from "./MenuTopPanel/LeftPanel";
import RightPanel from "./MenuTopPanel/RightPanel";

const MenuMain = React.memo(() => {
    return (
        <div className={styles.menuMain}>
            <LeftPanel />
            <CenterPanel />
            <RightPanel />
        </div>
    );
});

export { MenuMain };
