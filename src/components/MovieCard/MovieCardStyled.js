import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardWrap = styled.div`
  height: 450px;
  background-position: right -200px top;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Poster = styled.img`
  width: 250px;
`;

export const Description = styled.div`
  padding-left: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Link = styled(NavLink)`
  color: #fff;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  padding: 8px 10px;
  margin-right: 15px;
  width: 80px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: rgb(105, 105, 111);
  background: linear-gradient(0deg, #595961 0%, #4d4d4f 100%);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  :hover {
    background: rgb(0, 3, 255);
    background: linear-gradient(0deg, #3e3e3f 0%, #212122 100%);
  }
`;

export const WrapperLink = styled.div`
display: flex;
justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const TitleText = styled.h2`
text-align: center;
`