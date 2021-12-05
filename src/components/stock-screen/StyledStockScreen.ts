import styled from 'styled-components';
import {colors} from '../../styles/variables';

export const StyledStockScreen = styled.div`
  .stockDescriptionGreen {
    color: #00e427;
  }

  .stockDescriptionRed {
    color: #f94500;
  }
  
  .selectContainer {
    margin-top: 3rem;
  }
  
  .stocksButtonsContainer {
    display: flex;
    margin-top: 3rem;
  }
  
  .stockBtn {
    border: 1px solid ${colors.primary};
    border-radius: 0.5rem;
    width: 200px;
    background-color: #fff;
    color: ${colors.primary};
    font-size: 1.8rem;
    font-weight: 500;
    transition: 0.3s;
    
    &:hover {
      background-color: ${colors.primary};
      color: #fff;
    }
  }
  
  .stockInput {
    border: 0.1rem solid ${colors.primary};
    border-radius: 0.3rem;
    margin-right: 1rem;
  }
`
