import React from "react";

import styled from 'styled-components';

import DrogaMamo from "../../components/DrogaMamo";
import Media from "../../components/Media/Media";
import Cashback from "../../components/Cashback/Cashback";
import Delivery from "../../components/Delivery/Delivery"

const HomePages = () => {
    return (
        <Wrapper>
            <h1>Замовляй улюблені страви в </h1>
            <Button>Меню</Button>
            <DrogaMamo />
            <Media />
            <Cashback />
            <Delivery />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 0;
   background-color:#FFFF00;
   height:600px;
    
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

export default HomePages;
