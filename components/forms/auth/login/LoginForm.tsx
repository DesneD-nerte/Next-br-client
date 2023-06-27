import MyInput from "@ui/inputs/MyInput";
import styles from "./LoginForm.module.scss";

import { useForm, Controller, SubmitHandler } from "react-hook-form";

type LoginInput = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const { handleSubmit, control } = useForm<LoginInput>();

    const onSubmit: SubmitHandler<LoginInput> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
            <Controller
                name="email"
                control={control}
                rules={{ required: { value: true, message: "Email is required" } }}
                render={({ field, fieldState }) => (
                    <MyInput
                        controlField={field}
                        fieldState={fieldState}
                        id="email-input"
                        type="email"
                        labelTitle="EMAIL*"
                    />
                )}
            />
            <Controller
                name="password"
                control={control}
                rules={{ required: { value: true, message: "Password is required" } }}
                render={({ field, fieldState }) => (
                    <MyInput
                        controlField={field}
                        fieldState={fieldState}
                        id="password-input"
                        type="password"
                        labelTitle="PASSWORD*"
                    />
                )}
            />
            <input type="submit" className="button button_mainButton" value={"CONTINUE"} />
        </form>
    );
};

export default LoginForm;
