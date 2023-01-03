import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LoginForm from "@components/forms/auth/login/LoginForm";
import MainContent from "@layouts/MainContent/MainContent";
import { useAppDispatch } from "@store/hooks";
import { setExpandMenu } from "@store/reducers/menu/MenuSlice";

import styles from "./signIn.module.scss";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

function SignIn() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setExpandMenu(false));
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Auth | Bond Reality</title>
                <meta name="description" content="Sign In | Sign Up to Bond Shop." />
            </Head>

            <MainContent>
                <div className={styles.loginContainer}>
                    <h2>My account</h2>

                    <Link href={"google.com"} className={`${styles.loginContainer__link}`}>
                        <button className={`mainWhiteButton`}>
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

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "footer", "menu"])),
            // Will be passed to the page component as props
        },
    };
}
