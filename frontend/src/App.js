import './App.css';
import { Shop } from './pages/Shop';
import { DevicePage } from './pages/DevicePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
