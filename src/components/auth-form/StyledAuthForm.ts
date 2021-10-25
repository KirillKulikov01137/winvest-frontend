import styled from "styled-components";
import {colors} from "../../styles/variables";

export const StyledAuthForm = styled.form`
  max-width: 580px;
  margin: 0 auto;
  background-color: ${colors.secondary};
  border-radius: 2rem;
  overflow: hidden;
  padding: 0 0 4rem;
  //text-align: center;

  label {
    width: 100%;
    text-align: left;
  }
  
  .label {
    font-size: 1.4rem;
    font-weight: 400;
  }
  
  .field {
    width: 100%;
    height: 30px;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    padding: 0 0.3rem;
    font-size: 2.4rem;
  }

  .link {
    font-weight: 400;
    font-size: 1.8rem;
    color: ${colors.white};
  }
`
