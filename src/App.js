import "./App.css";
import {BrowserRouter ,Route, Routes} from 'react-router-dom';

//2_만들어 놓은 component들을 import
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import New from "./pages/New";

//3_
function App() {
  return (
    <BrowserRouter>
   <div className='App'>
    <h1>App.js</h1>
    
   </div>
   </BrowserRouter>
  );
}

export default App;
