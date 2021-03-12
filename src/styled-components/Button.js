import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: #535a72;
  color: #ebecef;
  border-radius: 5px;
  border: none;
  padding: 8px 2.5rem;
  margin: 5px;
  font-weight: 700;
  cursor: pointer;
  outline: inherit;
  &:focus {
    background-color: #3e4252;
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: #3ba935;
      &:focus {
        background-color: #2b7427;
      }
    `}

  ${(props) =>
    props.large &&
    css`
      width: calc(100% - 10px);
    `}
`;
