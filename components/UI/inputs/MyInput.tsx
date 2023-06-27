import React, { useMemo } from "react";
import styles from "./Input.module.scss";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

interface InputProps {
    controlField: Omit<ControllerRenderProps, "ref">;
    fieldState: ControllerFieldState;
    id: string;
    type: string;
    labelTitle: string;
}

const MyInput = React.forwardRef<HTMLInputElement, InputProps>(function MyInput(
    { controlField, fieldState, id, type, labelTitle, ...props },
    ref
) {
    const labelFixedClass = useMemo(() => {
        return controlField.value ? styles.inputContainer__inputLabel_fixed : "";
    }, [controlField.value]);

    // Controlled Input
    if (controlField) {
        return (
            <div className={styles.inputContainer}>
                <input
                    id={id}
                    type={type}
                    className={styles.inputContainer__input}
                    value={controlField.value}
                    onChange={(event) => controlField.onChange(event.target.value)}
                ></input>
                <label
                    htmlFor={id}
                    className={`${styles.inputContainer__inputLabel} ${labelFixedClass}`}
                >
                    {labelTitle}
                </label>
                {fieldState.error && <p role="alert">{fieldState.error.message}</p>}
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
