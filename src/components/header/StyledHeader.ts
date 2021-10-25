import styled from "styled-components";
import {colors} from "../../styles/variables";

export const StyledHeader = styled.header`
  height: 60px;
  background-color: ${colors.primary};
  margin-bottom: 6rem;
  
  .headerBody {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }
  
  .logo {
    color: ${colors.white};
    font-weight: 400;
    font-size: 2.4rem;
  }
  
  .search {
    max-width: 380px;
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    border-radius: 1.2rem;
    overflow: hidden;
    
    input {
      width: 100%;
      height: 100%;
      padding: 0 1.2rem;
      font-size: 1.8rem;
    }
  }
`
