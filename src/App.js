import Header from './components/Header/Header';
import Home from './view/Home/Home'
import ResultsPage from './view/Results/Results';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/app.scss'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/results' element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
