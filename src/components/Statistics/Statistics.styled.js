import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.spacing(4)};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
`;
