import styled from "styled-components";
import {colors} from "../../styles/variables";

export const StyledPageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: ${colors.primary};
  
  span {
    color: ${colors.white};
    font-size: 2.4rem;
    font-weight: 500;
  }
`
