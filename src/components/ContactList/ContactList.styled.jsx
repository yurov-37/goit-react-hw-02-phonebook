import styled from '@emotion/styled';

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ListText = styled.p`
  font-size: 18px;
  margin-right: auto;
`;
