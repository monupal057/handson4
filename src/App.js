import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Compo/Home';
import Student from './Compo/Student';
import Contact from './Compo/Contact';
function App() {
  return (
    <div>
      

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/Student' element={<Student />}/>
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;