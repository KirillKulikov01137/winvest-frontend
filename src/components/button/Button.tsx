import React, {FC} from 'react';
import {ButtonProps} from "./ButtonProps";
import {StyledButton} from "./StyledButton";

const Button: FC<ButtonProps> = ({title, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {title}
        </StyledButton>
    );
};

export default Button;
