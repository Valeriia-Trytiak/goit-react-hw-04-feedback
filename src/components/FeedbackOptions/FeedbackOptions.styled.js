import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: ${p => p.theme.spacing(4)};
  margin-bottom: ${p => p.theme.spacing(4)};
`;

export const Button = styled.button`
  display: inline-block;

  padding: 0 ${p => p.theme.spacing(6)};
  outline: none;
  border: 1px solid ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.spacing(12)};
  height: 46px;
  line-height: 46px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  text-transform: capitalize;
  color: ${p => p.theme.colors.gray};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  touch-action: manipulation;
  vertical-align: top;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 1px 2px 0 rgb(26 115 232 / 45%),
      0 1px 3px 1px rgb(26 115 232 / 30%);
    background-color: ${p => p.theme.colors.bgButton};
    color: ${p => p.theme.colors.white};
  }

  &:focus {
    box-shadow: 0 0 0 3px lightskyblue;
  }
`;
