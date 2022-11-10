import styled from 'styled-components';

export const CastContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const CastItem = styled.li`
  width: 250px;
  margin-top: 10px;
  margin-bottom: 15px;
  margin-right: 10px;
  border: 1px solid rgba(227, 227, 227, 1);
  padding-bottom: 10px;
  overflow: hidden;
  background-color: #fff;
  text-align: center;
  & img {
    width: 100%;
  }
  :hover {
    border: 2px solid black;
  }
`;