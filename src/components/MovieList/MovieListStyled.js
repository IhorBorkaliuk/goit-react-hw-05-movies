import styled from 'styled-components';

export const MovieWrapp = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const MovieItem = styled.li`
  width: calc((100% - 5 * 20px) / 4);
  margin: 20px 10px;
  border: 1px solid gray;
  padding-bottom: 10px;
  border-radius: 5px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
  &:hover,
  &:focus {
    scale: 1.02;
  }
  & a {
    text-decoration: none;
    color: black;
  }
  & p {
    font-size: 20px;
    font-weight: 500;
  }
  & img {
    width: 100%;
   
  }
`;