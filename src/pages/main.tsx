import styled from "@emotion/styled";
import Spline from "@splinetool/react-spline";

const MainStyled = styled.div`
    width: 100vw;
    height: 100vh;

    position: relative;
`;

function Main() {
    return (
        <MainStyled>
            <Spline scene="https://prod.spline.design/cjPqvkp7Xk0MTifU/scene.splinecode" />
        </MainStyled>
    );
}

export { Main as default };
