import React, {FC} from 'react';
import {StyledAuthForm} from "./StyledAuthForm";
import {AuthFormProps} from "./AuthFormProps";
import AuthFormHeader from "../auth-form-header/AuthFormHeader";
import AuthFormContainer from "../auth-form-container/AuthFormContainer";

const AuthForm: FC<AuthFormProps> = ({children,
                                     title}) => {
    return (
        <StyledAuthForm>
            <AuthFormHeader title={title} />
            <AuthFormContainer>
                {children}
            </AuthFormContainer>
        </StyledAuthForm>
    );
};

export default AuthForm;
