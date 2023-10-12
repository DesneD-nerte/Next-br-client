import React, { Fragment, useEffect } from "react";
import LoginForm from "@components/forms/auth/login/LoginForm";
import MainContent from "@layouts/MainContent/MainContent";
import { useAppDispatch } from "@store/hooks";
import { menuActions } from "@modules/Menu/reducer";

import styles from "./signIn.module.scss";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auth | Bond Reality",
    description: "Sign In | Sign Up to Bond Shop.",
};

function SignIn() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(menuActions.mainMenuActions.setExpandMenu(false));
    }, []);

    return (
        <Fragment>
            <MainContent>
                <div className={styles.loginContainer}>
                    <h2>My account</h2>

                    <Link href={"google.com"} className={`${styles.loginContainer__link}`}>
                        <button className="button button_mainWhiteButton button_paddingButton">
                            <div className={styles.loginContainer__icon}>
                                <FcGoogle size={30} />
                            </div>
                            CONTINUE WITH GOOGLE
                        </button>
                    </Link>

                    <LoginForm></LoginForm>
                    <Link href={"register"} className={`${styles.loginContainer__register}`}>
                        Not registered yet?
                    </Link>
                </div>
            </MainContent>
        </Fragment>
    );
}

export default SignIn;
