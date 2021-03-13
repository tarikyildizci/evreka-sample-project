import styled, { css } from 'styled-components';

export const Tab = styled.div`
  height: 50px;
  width: calc(100% - 2rem);
  display: flex;
  align-items: center;
  margin-left: 2rem;
  position: relative;
  ${(props) =>
    props.modal &&
    css`
      justify-content: center;
    `};
`;

export const TabHeader = styled.div`
  font-weight: 700;
  color: #dadce0;
  margin: 1rem 1rem;
  cursor: pointer;
  ${(props) =>
    props.selected &&
    css`
      color: inherit;
    `};
`;

export const TabUnderline = styled.div`
  position: absolute;
  height: 0.2rem;
  width: 6rem;
  margin-left: 2rem;
  background: #3ba935;
  border: none;
  transition: 0.3s ease-in-out;
  z-index: 1;
  ${(props) =>
    props.current === 1 &&
    css`
      margin-left: 8rem;
    `};
  ${(props) =>
    props.current === 2 &&
    css`
      margin-left: 14rem;
    `};
  ${(props) =>
    props.modal &&
    props.current === 0 &&
    css`
      left: calc(50% - 9.3rem);
      margin-left: 2.5rem;
      width: 8rem;
    `};
  ${(props) =>
    props.modal &&
    props.current === 1 &&
    css`
      left: calc(50% - 9.3rem);
      width: 8rem;
      margin-left: 11rem;
    `};
`;

export const TabUnderlineBackground = styled.div`
  position: absolute;
  height: 0.1rem;
  width: 27rem;
  margin: 0 2rem;
  background: #3e4252;
  border: none;
  ${(props) =>
    props.modal &&
    css`
      left: calc(50% - 13.5rem);
    `};
`;
