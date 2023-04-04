import Spline from "@splinetool/react-spline";
import { Container, Menu, Loader } from "../components";
import { useEffect, useState } from "react";

function Tutorial() {
    const [loaded, setLoaded] = useState(false);

    function handleLoad() {
        setLoaded(true);
    }

    return (
        <Container>
            <Menu />
            {loaded ? null : <Loader />}
            <Spline
                scene="https://prod.spline.design/XN2E4rd-gF33gAkb/scene.splinecode"
                onLoad={handleLoad}
            />
        </Container>
    );
}

export { Tutorial as default };
