import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const WrapApp = styled.div`
  
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  padding: 12px 32px 12px 12px;
  border-radius: 15px;
  border: 2px solid black;
  &:hover,
  &:focus {
    border: 3px solid black;
    outline: none;
  }
`;
export const Form = styled.form`
  margin: 25px 0px;
  position: relative;
  left: 590px;
`;
export const Button = styled.button`
   position: absolute;
    top: 6px;
    right: 5px;
    color: black;
    border: none;
    cursor: pointer;
    background-color: initial;

  &:hover,
  &:focus {
    color: gray;   
  }
  `;
export const IconSearch = styled(FaSearch)`
  width: 25px;
  height: 25px;
`;
