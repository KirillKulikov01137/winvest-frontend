import styled from "styled-components";
import {colors} from "../../styles/variables";

export const StyledStock = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${colors.secondary};
  display: flex;
  align-items: center;
  padding: 0 2rem;
  border-bottom: 0.1rem solid ${colors.black};
  transition: 0.3s linear all;

  &:hover {
    box-shadow: 0 0 0.5rem 0.2rem ${colors.primary};
    position: relative;
  }

  &:last-child {
    border-bottom: none;
  }

  .stockLink {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .stockLinkContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .linkDescriptionText {
    font-size: 1.8rem;
    font-weight: 400;
    color: ${colors.white};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .nameText {
    max-width: 900px;
    overflow: hidden;
  }

  .linkDescriptionGreen {
    color: #00e427;
  }

  .linkDescriptionRed {
    color: #f94500;
  }

  .linkDescriptionGreen, .linkDescriptionRed {
    font-size: 1.4rem;
  }
`
