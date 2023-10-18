import styled from 'styled-components';

export const Container = styled.section`
  width: 480px;
  padding: ${p => p.theme.spacing(8)} ${p => p.theme.spacing(10)};
  margin: 0 auto;

  border-radius: ${p => p.theme.spacing(4)};
  background-color: ${p => p.theme.colors.bg};
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.spacing(4)};
`;
