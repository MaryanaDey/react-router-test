import React from "react";

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// import iconHome from 'assets/icon/punk.svg';


const NavIcon = ({ src }) => <Icon src={src} />;







const NavigationMenu = () => {
    return (
        <List >
            <Item>Nysa</Item>
            <Item>(000) 000-00-00</Item>
            <Item>Чат підтримки</Item>
            <Item>
                <StyledNavLink>

                </StyledNavLink>
            </Item>
        </List>

    )
};



const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #fff;
`;


const Item = styled.li`
  margin-right: 8px;
  color:#fff;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  transition: #b2b2b2;
  &.active {
    background-color: #b4b4b4;
  }
  &:hover {
    background-color:  #f3f3f3;
   
  }
`;

const NavIconStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  color: ${(p) => p.theme.colors.textLight};
  background-color: transparent;
  border-radius: 50%;
`;

const Icon = styled.img`
  padding: 0;
  height: 18px;
`;

export default NavigationMenu;