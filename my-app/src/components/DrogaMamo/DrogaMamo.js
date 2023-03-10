import React from "react";
import styled from 'styled-components';

const DrogaMamo = () => {
    return (
        <Wrapper>
            <Item>DrogaMamo</Item>
            <List>
                <ItemList>
                    <ItemListIcon>Icon</ItemListIcon>
                    <ItemTitle>можно дітям</ItemTitle>
                </ItemList>
                <ItemList>
                    <ItemListIcon>Icon</ItemListIcon>
                    <ItemTitle>без консервантів</ItemTitle>
                </ItemList>
                <ItemList>
                    <ItemListIcon>Icon</ItemListIcon>
                    <ItemTitle>всі страви за 12хв</ItemTitle>
                </ItemList>
                <ItemList>
                    <ItemListIcon>Icon</ItemListIcon>
                    <ItemTitle>доставка на наступний день</ItemTitle>
                </ItemList>
            </List>
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

const Item = styled.h1`
color: #b2b2b2;
`;

const List = styled.li`
color: #b2b2b2;

display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
`;
const ItemList = styled.li`
color: #b2b2b2;

flex-basis: calc((100% - 120px) / 4);
    margin-left: 30px;
    width: 100%;
`;

const ItemListIcon = styled.div`
`;

const ItemTitle = styled.h3`
`;

export default DrogaMamo;