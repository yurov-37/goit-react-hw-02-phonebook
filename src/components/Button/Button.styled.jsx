import styled from '@emotion/styled';

export const PhoneBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;
  min-width: 120px;
  padding: 8px 15px;
  border-radius: 4px;
  width: 120px;
  cursor: pointer;
  transition: all 500ms ease;
  :hover {
    background: rgba(0, 0, 0, 0);
    color: #3a7999;
    box-shadow: inset 0 0 0 3px #3a7999;
  }
`;
