import styled from "styled-components";
import {colors} from "../../styles/variables";

export const StyledUnauthorizedHeader = styled.div`
  nav {
    display: flex;
  }
  
  span {
    color: ${colors.white};
    transition: 0.3s linear color;
  }

  span:hover {
    color: ${colors.hover};
  }
  
  nav > a:first-child > span {
    margin-right: 1.5rem;
  }
`
