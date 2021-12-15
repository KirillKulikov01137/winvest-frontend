import styled from 'styled-components';
import {colors} from '../../styles/variables';

export const StyledPortfolioScreen = styled.div`
  .portfolioHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: ${colors.primary};

    div {
      color: ${colors.white};
      font-size: 2.4rem;
      font-weight: 500;
    }
  }
`
