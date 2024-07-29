import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Nopage from './pages/Nopage';
import About from './pages/About';
import Services from './pages/Services';
import Header from './conpenment/Header';



function App() {

  return (
    <>
    <div>
    <Header />
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App
