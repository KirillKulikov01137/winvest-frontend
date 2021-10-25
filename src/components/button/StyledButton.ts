import styled from "styled-components";
import {colors} from "../../styles/variables";

export const StyledButton = styled.button`
  max-width: 380px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: ${colors.primary};
  transition: 0.3s linear background-color;
  font-weight: 500;
  font-size: 1.8rem;
  color: ${colors.white};

  &:hover {
    background-color: ${colors.hover};
  }
`
