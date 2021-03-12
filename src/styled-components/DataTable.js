import styled, { css } from 'styled-components';

export const DataTable = styled.div`
  width: '100%';
  padding: '5px';
  overflow: 'scroll';
  font-size: '.9rem';
`;
export const DataRowContainer = styled.div`
  height: '100px';
  width: '100%';
  background-color: '#FFFFFF';
  margin: '10px 0';
  display: 'grid';
  grid-template-columns: '0.3fr 1fr 1fr 1fr 1fr 1fr';
  overflow: 'hidden';

  ${(props) =>
    props.selected &&
    css`
      background-color: '#fff5b3';
    `}
`;
export const DataRowHighlightBox = styled.div`
  height: '100%';
  width: '20px';
  ${(props) =>
    props.selected &&
    css`
      background-color: '#E9CF30';
    `}
`;
export const DataRowHeader = styled.div`
  font-weight: '700';
`;
