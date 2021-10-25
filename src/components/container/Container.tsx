import React, {FC} from 'react';
import {StyledContainer} from "./StyledContainer";

const Container: FC = ({children}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};

export default Container;
