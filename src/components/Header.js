import styled from 'styled-components';

import React from 'react'

const Header = (props) => {
    return (
        <Nav>
            Header
        </Nav>
    )
}


const Nav = styled.nav`
    position : fixed;
    top : 0;
    right : 0;
    left : 0;
    height : 70px;
    background-color : #090b13;
`;

export default Header
