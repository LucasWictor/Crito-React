import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import News from './views/News';
import Contact from './views/Contact';
import Service from './views/Services';
import DetailedArticleNews from './views/DetailedArticleNews'; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/news/:id' element={<DetailedArticleNews />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;