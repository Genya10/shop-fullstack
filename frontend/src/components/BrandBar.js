import { observer } from "mobx-react-lite";
import React,{ useContext } from "react";
import { Context } from "../index";
import {Row, Card } from 'react-bootstrap';

export const BrandBar = observer(()=>{
 const {device} = useContext(Context)

 return (
     <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
       {device.brands.map(brand => 
         <Card
           style={{ cursor: "pointer" }}
           key={brand.id}
           className="p-2"
           onClick={() => device.setSelectedBrand(brand)}
           border={brand.id === device.selectedBrand.id ? "danger" : "light"}
         >
           {brand.name}
         </Card>
       )}
     </div>
 );
}
)



