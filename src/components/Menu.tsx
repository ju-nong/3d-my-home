import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const MenuContainer = styled.header`
    display: flex;
    position: absolute;
    bottom: 4%;
    right: 4%;
    column-gap: 1rem;

    a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        transition: all 0.3s;

        &:hover {
            color: #000;
        }
    }
`;

function Menu() {
    return (
        <MenuContainer>
            {/* <Link to={"/"}>My Home</Link>
            <Link to={"/tutorial"}>Tutorial Home</Link> */}
        </MenuContainer>
    );
}

export { Menu as default };
