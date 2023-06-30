import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
