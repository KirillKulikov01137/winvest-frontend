import React, {FC} from 'react';
import StyledAuthFormContainer from "./StyledAuthFormContainer";

const AuthFormContainer: FC = ({children}) => {
    return (
        <StyledAuthFormContainer>
            {children}
        </StyledAuthFormContainer>
    );
};

export default AuthFormContainer;
