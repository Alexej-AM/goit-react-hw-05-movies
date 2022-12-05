import styled from "@emotion/styled";
import { Link } from 'react-router-dom';


export const ListMovies = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap; 
margin: 0px auto;
padding: 0px;
list-style: none;
`;

export const ListItem = styled.li`
text-align: center;
margin-bottom: 30px;  
margin-right: 30px; 
padding: 15px; 
width: 100%;
flex-basis: calc((100% - 6 * 15px) / 5);
background-color: #fff;
border-radius: 4px;
&:nth-of-type(4n) {
    margin-right: 0;
 }
 
 &:nth-last-of-type(-n+4) {
   margin-bottom: 0;   
}
`;

export const StyledLink = styled(Link)`
  display: block;
`;

export const ListBox = styled.div`
padding: 60px;
text-align: center;
`;

export const Form = styled.form`
margin-bottom: 20px;
`;

export const Button = styled.button`
  margin-right: 8px;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: black;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;

export const Input = styled.input`
min-width: 180px;
padding: 8px 16px;
font-size: 18px;
border-radius: 2px;
`;