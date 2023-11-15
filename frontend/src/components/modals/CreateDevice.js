import React,{useState,useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import { useContext } from "react";
import { Context } from "../../index";
import {Row,Col,Dropdown,Form,Button} from "react-bootstrap";
import { fetchTypes,fetchBrands,createDevice } from "../../http/deviceAPI";
import { observer } from "mobx-react-lite";

export const CreateDevice= observer(({show,onHide})=>{
    const { device } = useContext(Context);
    const [info, setInfo] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [type, setType] = useState(null);
    const [brand, setBrand] = useState(null);

    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
        fetchBrands().then(data=>device.setBrands(data))
      },[])

    const addInfo=()=>{
        setInfo([...info,{title:'',description:'',number:Date.now()}])
    }
    const removeInfo = (number)=>{
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo=(key,value,number)=>{
        setInfo(info.map(i => i.number === number ? {...i,[key]:value}:i))
    }
    const selectFile = e =>{
        setFile(e.target.files[0])
    }
    const addDevice=()=>{
        const formData = new FormData()
        console.log(formData)
        formData.append('name',name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId',device.selectedBrand.id)
        formData.append('typeId',device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data=> onHide())
    }

    return (
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new type
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>{device.selectedType.name || 'Choose type'}</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map((type) => (
                  <Dropdown.Item 
                  onClick={()=>device.setSelectedType(type)}
                  key={type.id}
                  >{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>{device.selectedBrand.name ||'Choose brand'}</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map((brand) => (
                  <Dropdown.Item 
                  onClick={()=>device.setSelectedBrand(brand)}
                  key={brand.id}
                  >{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="mt-3"
              placeholder="Enter name device"
            />
            <Form.Control
              value={price}
              onChange={(e) => {
                setPrice(Number(e.target.value));
              }}
              className="mt-3"
              placeholder="Enter price device"
              type="number"
            />
            <Form.Control className="mt-3" type="file" onChange={selectFile} />
            <hr />
            <Button variant="outline-dark" onClick={addInfo}>
              Add new property
            </Button>
            {info.map((i) => (
              <Row className="mt-3" key={i.number}>
                <Col md={4}>
                  <Form.Control
                  value={i.title} 
                  onChange={(e)=> changeInfo('title',e.target.value,i.number)}
                  placeholder="Enter name property" />
                </Col>
                <Col md={4}>
                  <Form.Control
                  value={i.description}
                  onChange={(e)=> changeInfo('description',e.target.value,i.number)}
                  placeholder="Enter description property" />
                </Col>
                <Col md={4}>
                  <Button
                    variant={"outline-danger"}
                    onClick={() => removeInfo(i.number)}      
                   > Delete
                  </Button>
                </Col>
              </Row>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>
            Close
          </Button>
          <Button variant="outline-success" onClick={addDevice}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
});