import React, { FormEvent, useState } from "react";
import MyInput from "@ui/inputs/MyInput";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
    };

    return (
        <form onSubmit={(event) => handleSubmit(event)} className={styles.loginForm}>
            <MyInput
                value={email}
                setValue={setEmail}
                id="email-input"
                type="email"
                labelTitle="EMAIL*"
            ></MyInput>

            <MyInput
                value={password}
                setValue={setPassword}
                id="password-input"
                type="password"
                labelTitle="PASSWORD*"
            ></MyInput>

            <button type="submit" className={styles.loginForm__button}>
                CONTINUE
            </button>
        </form>
    );
};

export default LoginForm;
