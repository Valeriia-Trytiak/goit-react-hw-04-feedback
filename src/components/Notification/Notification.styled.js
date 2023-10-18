import styled from 'styled-components';

export const Message = styled.span`
  display: block;
  font-size: 18px;
  color: ${p => p.theme.colors.error};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};

  svg {
    display: block;
    color: ${p => p.theme.colors.error};
  }
`;
