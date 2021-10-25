import React, {FC} from 'react';
import {ButtonProps} from "./ButtonProps";
import {StyledButton} from "./StyledButton";

const Button: FC<ButtonProps> = ({title}) => {
    return (
        <StyledButton>
            {title}
        </StyledButton>
    );
};

export default Button;
