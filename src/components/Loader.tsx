import React from "react";
import styled from "@emotion/styled";

const LoaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #aaaaaa;

    span {
        width: 48px;
        height: 48px;
        border: 5px solid #fff;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }
`;

function Loader() {
    return (
        <LoaderContainer>
            <span></span>
        </LoaderContainer>
    );
}

export { Loader as default };
