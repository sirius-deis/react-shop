import styled from 'styled-components';

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : 0)}rem;
`;