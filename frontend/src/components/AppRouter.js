import React,{useContext} from "react";
import { Routes,Route,Navigate} from "react-router-dom";
import { authRoutes,publicRoutes } from "../routes";
import { SHOP_ROUTE,ADMIN_ROUTE} from "../utils/const";
import { Context } from "../index";

export const AppRouter = ()=>{
    const {user} = useContext(Context)
    console.log(user.isAuth)
    return (
        <div>
      <Routes>
        {user.isAuth &&
          authRoutes.map(({ path, Component }) => 
            <Route key={path} path={path} element={<Component/>} />
          )}
           {publicRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} element={<Component/>} />
          )}
         <Route path="*" element={<Navigate to={ADMIN_ROUTE}/>}/>
          </Routes>
      </div>
    );

}