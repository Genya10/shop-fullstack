import React,{useContext} from "react";
import { Routes,Route,Navigate,useNavigate} from "react-router-dom";
import { authRoutes,publicRoutes } from "../routes";
import { SHOP_ROUTE} from "../utils/const";
import { Context } from "../index";

export const AppRouter = ()=>{
  const {user} = useContext(Context)
  const navigate = useNavigate();
    
  return (
      <div>
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => 
          <Route key={path} path={path} element={<Component/>} exact/>
        )}

          {publicRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} element={<Component/>} />
        )}
      <Route path="*" element={user.isAuth ? null:(()=>{
        navigate(SHOP_ROUTE,{replace:true});
              return null;
            }) }
       />  
      
        </Routes>
    </div>
  );
}