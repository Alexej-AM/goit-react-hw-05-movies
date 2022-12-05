import styled from '@emotion/styled';

export const ListBox = styled.div`
padding: 60px;
`;


export const ListMovie = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap; 
margin: 0px auto;
padding: 0px;
list-style: none;
`;

export const Title = styled.h3`
font-size: 16px;
margin: 8px 0px 0px 0px;
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