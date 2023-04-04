import { Routes, Route } from "react-router-dom";
import { Main, Tutorial } from "./pages";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
    );
}

export default App;
