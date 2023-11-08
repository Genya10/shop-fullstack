import './App.css';
import { NavBar } from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <AppRouter/>    
    </BrowserRouter>
  );
}

export default App;
