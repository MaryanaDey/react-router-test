import React from "react";
import styled from 'styled-components';

const Cashback = () => {
    return (
        <Wrapper>
            <Title>Кешбек за замовлення!</Title>
            <Item>Встановлюй додаток, замовляй страви збирай кешбек
                та витрачай його на нпступне замовлення</Item>
            <Button>Детальніше</Button>

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

const Title = styled.h1`
color: #b2b2b2;
`;
const Item = styled.div`
color: #b2b2b2;
`;


const Button = styled.button`
 color:#fFff;
  background-color:	#FF0000;
  border-radius: 5px;

  margin: 0 auto;
  padding: 10px 32px;

  
    font-weight: 400;
    font-size: 16px;
    line-height: 1.875;

  font-family: inherit;
    font-style: normal;
    text-align: center;

      width: 272px;
    height: 56px px;

    cursor: pointer;
    transition: 0.2s;


  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  transition: ;
 cursor: pointer;
`;

export default Cashback;