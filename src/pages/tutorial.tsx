import styled from "@emotion/styled";
import Spline from "@splinetool/react-spline";

const MainStyled = styled.div`
    width: 100vw;
    height: 100vh;

    position: relative;
`;

function Tutorial() {
    return (
        <MainStyled>
            <Spline scene="https://prod.spline.design/XN2E4rd-gF33gAkb/scene.splinecode" />
        </MainStyled>
    );
}

export { Tutorial as default };
