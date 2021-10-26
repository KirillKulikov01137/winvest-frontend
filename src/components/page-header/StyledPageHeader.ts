import styled from "styled-components";
import {colors} from "../../styles/variables";

export const StyledPageHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  
  span {
    color: ${colors.white};
    font-size: 2.4rem;
    font-weight: 500;
  }
`
