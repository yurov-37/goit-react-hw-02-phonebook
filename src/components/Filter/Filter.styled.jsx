import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
`;

export const FilterInput = styled.input`
  display: block;
  outline: none;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;
