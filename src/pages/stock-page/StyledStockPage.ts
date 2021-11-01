import styled from "styled-components";
import {colors} from "../../styles/variables";

export const StyledStockPage = styled.div`
  .stockDescription {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${colors.black};
  }

  .stockPageBody {
    display: flex;
    width: 100%;
    margin-top: 6rem;
  }

  .stockPageBody > div {
    width: 50%;
  }

  .stockPageBody > div:first-child {
    margin-right: 2.5rem;
  }
`
