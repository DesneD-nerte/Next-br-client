import React, { FormEvent, useState } from "react";
import MyInput from "@ui/inputs/MyInput";
import styles from "./LoginForm.module.scss";

import { useForm, Controller, SubmitHandler } from "react-hook-form";

type LoginInput = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const {
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm<LoginInput>();

    const onSubmit: SubmitHandler<LoginInput> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
            <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <MyInput {...field} id="email-input" type="email" labelTitle="EMAIL*" />
                )}
            />
            {errors.email?.type === "required" && <p role="alert">Email is required</p>}
            <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <MyInput
                        {...field}
                        id="password-input"
                        type="password"
                        labelTitle="PASSWORD*"
                    />
                )}
            />
            {errors.password?.type === "required" && <p role="alert">Password is required</p>}

            <input type="submit" className="button button_mainButton" value={"CONTINUE"} />
        </form>
    );
};

export default LoginForm;
