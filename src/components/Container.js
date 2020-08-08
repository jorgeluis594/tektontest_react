import styled from "@emotion/styled";
import React from "react";
import { NavLink } from 'react-router-dom'



const Container = styled.main`
    width: 75%;
    max-width: 928px;
    background-color: white;
    margin: 0 auto 20px auto;
    border-radius: 8px;
    padding: 10px 0;
`;

const Header = styled.header`
    display: flex;
    border-bottom: 1px solid #718096;
    height: 38px;
    margin: 0 14px;
`;
const LinksContainer = styled.ul`
    list-style: none;
    height: 100%;
    display: flex;
    margin: 0;
    align-items: flex-end;
    .active {
        color: #425c81;
        border-bottom: 2px solid #425c81;
    }
`;

const LinkNav = styled(NavLink)`
    text-decoration: none;
    color: #A0AEC0;
    font-weight: 600;
    font-size: 16px;
    padding: 0 6px 6px 6px;
    margin-right: 12px;
    &:last-of-type {
        margin-right: none;
    }
    &:hover {
        color: #425c81;
        border-bottom: 2px solid #425c81;
    }
`;


export default function ({children}){
    return (
        <Container>
            <Header>
                <nav>
                    <LinksContainer>
                        <LinkNav exact to="/">Employees</LinkNav>
                    </LinksContainer>
                </nav>
            </Header>
            {children}
        </Container>
    );
}