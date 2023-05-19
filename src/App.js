import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RouteTest from "./components/RouteTest";

import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import New from "./pages/New";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <h1>App.js</h1>

                <p>Route 밖에 작성한 내용은 공통으로 보여지게 된다</p>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<New />} />
                    <Route path="/edit" element={<Edit />} />
                    <Route path="/diary/:id" element={<Diary />} />
                    <Route path="/diary" element={<Diary />} />
                </Routes>
                <RouteTest />
            </div>
        </BrowserRouter>
    );
}

export default App;
