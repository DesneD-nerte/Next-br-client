import React, { useMemo } from "react";
import styles from "./Input.module.scss";

interface InputProps {
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    id: string;
    type: string;
    labelTitle: string;
}

const MyInput = React.forwardRef<HTMLInputElement, InputProps>(function MyInput(
    { value, setValue, id, type, labelTitle, ...props },
    ref
) {
    const labelFixedClass = useMemo(() => {
        return value ? styles.inputContainer__inputLabel_fixed : "";
    }, [value]);

    // Controlled Input
    if (value && setValue) {
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
    }

    // unControlled Input
    return (
        <div className={styles.inputContainer}>
            <input
                ref={ref}
                id={id}
                type={type}
                className={styles.inputContainer__input}
                {...props}
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
});

export default MyInput;
