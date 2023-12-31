import React from "react";
import { Context } from "../index";
import {Row} from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { DeviceItem } from "./DeviceItem";

export const DeviceList = observer(()=>{
    const {device} = useContext(Context)

    return(
        <Row className="d-flex">
           {device.devices.map(device =>
             <DeviceItem
                   key={device.id}
                   device={device}/>
            )}
        </Row>
    )
})