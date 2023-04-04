import React from "react";
import styled from "@emotion/styled";

const ContainerStyled = styled.div`
    width: 100vw;
    height: 100vh;

    position: relative;
`;

interface ContainerProps {
    children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
    return <ContainerStyled>{children}</ContainerStyled>;
}

export { Container as default };
