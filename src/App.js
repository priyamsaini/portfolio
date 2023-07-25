import Home from './pages/Home';
import { Work } from './components/Work';
import { Contact } from './pages/Contact';
import NoPage from '../src/pages/NoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/work' element={<Work/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/*' element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
