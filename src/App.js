//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from './TopBar';
import Home from './Home';

function App() {

  return (
     <BrowserRouter>
      <div> 
      <header>
        <TopBar/>
      </header>
     
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;

