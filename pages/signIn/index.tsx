import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect } from "react";
import LoginForm from "../../components/forms/auth/login/LoginForm";
import MainContent from "../../components/layout/MainContent";
import { useAppDispatch } from "../../store/hooks";
import { setExpandMenu } from "../../store/reducers/MenuSlice";

function SignIn() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setExpandMenu(false));
    }, []);

    return (
        <MainContent isMargin={false}>
            <LoginForm></LoginForm>
        </MainContent>
    );
}

export default SignIn;

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "footer"])),
            // Will be passed to the page component as props
        },
    };
}
