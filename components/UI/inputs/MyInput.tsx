import React, { useMemo } from "react";
import styles from "./Input.module.scss";

interface InputProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    id: string;
    type: string;
    labelTitle: string;
}

const MyInput = ({ value, setValue, id, type, labelTitle }: InputProps) => {
    const labelFixedClass = useMemo(() => {
        return value ? styles.inputContainer__inputLabel_fixed : "";
    }, [value]);

    return (
        <div className={styles.inputContainer}>
            <input
                id={id}
                type={type}
                className={styles.inputContainer__input}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></input>
            <label
                htmlFor={id}
                className={`${styles.inputContainer__inputLabel} ${labelFixedClass}`}
            >
                {labelTitle}
            </label>
            <span></span>
        </div>
    );
};

export default React.memo(MyInput);
