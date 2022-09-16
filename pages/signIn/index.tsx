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
