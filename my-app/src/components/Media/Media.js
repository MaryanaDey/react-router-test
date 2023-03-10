import React from "react";
import styled from 'styled-components';


const Media = () => {
    return (
        <Wrapper>
            <h1>С приложением быстрее!</h1>
            <Item>Установи приложение и пробуйте любимые блюда еще удобнее, чем обычно!</Item>
        </Wrapper>




    )
};


const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 0;
   background-color:#FFFF00;
   height:600px;
    
`;


const Item = styled.div`
 color:#fFff;
 
`;
export default Media;