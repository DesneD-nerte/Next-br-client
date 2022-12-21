import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LoginForm from "@components/forms/auth/login/LoginForm";
import MainContent from "@layouts/MainContent/MainContent";
import { useAppDispatch } from "@store/hooks";
import { setExpandMenu } from "@store/reducers/MenuSlice";

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
                <LoginForm></LoginForm>
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
