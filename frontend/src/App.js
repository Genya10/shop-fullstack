import './App.css';
import { NavBar } from './components/Navbar';
import { BrowserRouter} from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import {Context} from './index';
import { useState,useEffect } from 'react';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';
import { Footer } from './components/Footer';

const App = observer(()=> {
  const {user} = useContext(Context);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then(data => {
          //user.setUser(true);
          user.setUser(data);
          user.setIsAuth(true);
          user.setIsRole(data.role);
          console.log(data.role)
        })
        .catch(error => {
          console.error("Authentication check failed:",error);
          user.setIsAuth(false);
        }
        )
        .finally(() => setLoading(false));
    }, 500);
  }, []);

  if(loading){
    return <Spinner animation={'grow'}/>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer/>
    </BrowserRouter>
  );
});

export default App;
