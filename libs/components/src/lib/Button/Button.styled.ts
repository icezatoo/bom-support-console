import styled from '@emotion/styled';

export const StyledButton = styled.button`
  border: 0;
  cursor: pointer;
  padding: 6px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  box-sizing: border-box;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  position: relative;
  align-items: center;
`;

export const ButtonPrimary = styled(StyledButton)`
  color: #fff;
  background-color: #1976d2;
`;

export const ButtonSecondary = styled(StyledButton)`
  color: #fff;
  background-color: rgb(220, 0, 78);
`;
