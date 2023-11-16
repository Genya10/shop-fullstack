import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createBrand } from "../../http/deviceAPI";

export const CreateBrand=({show,onHide})=>{

  const [value,setValue]=useState('');
  const addBrand=()=>{
        createBrand({name:value}).then(data => setValue(''))
        onHide()
  }
    return(
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Добавить брэнд
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control 
                  value={value}
                  onChange={(e)=>{setValue(e.target.value)}}
                  placeholder={'Enter name brand'}/>              
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    )
}