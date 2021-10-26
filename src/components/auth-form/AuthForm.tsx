import React, {FC} from 'react';
import {StyledAuthForm} from "./StyledAuthForm";
import {AuthFormProps} from "./AuthFormProps";
import PageHeader from "../page-header/PageHeader";
import AuthFormContainer from "../auth-form-container/AuthFormContainer";

const AuthForm: FC<AuthFormProps> = ({children,
                                     title}) => {
    return (
        <StyledAuthForm>
            <PageHeader title={title} />
            <AuthFormContainer>
                {children}
            </AuthFormContainer>
        </StyledAuthForm>
    );
};

export default AuthForm;
