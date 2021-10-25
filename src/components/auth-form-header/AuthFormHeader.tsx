import React, {FC} from 'react';
import {StyledAuthFormHeader} from "./StyledAuthFormHeader";
import {AuthFormHeaderProps} from "./AuthFormHeaderProps";

const AuthFormHeader: FC<AuthFormHeaderProps> = ({title}) => {
    return (
        <StyledAuthFormHeader>
            <span>{title}</span>
        </StyledAuthFormHeader>
    );
};

export default AuthFormHeader;
