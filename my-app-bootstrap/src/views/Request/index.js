import React, { useState, useEffect } from 'react';
import { Link , Redirect } from 'react-router-dom';
import { Row, Col, Button, FormGroup, Input, Label} from 'reactstrap';
import { SiIfood } from "react-icons/si";
import api from  '../../services/api';

import * as Style from './style';
import TypePackages from '../../utils/typePackages';
 
//components
import Header from '../../components/Header';
//import Client from '../../components/ClientsCard';


function FormProduct( ) {
                                                                                                                                                                                                                                                                          
    const [redirect, setRedirect] = useState(false); 

    const [clients, setClient] = useState([]);
    const [products, setProduct] = useState([]);


    /* const [tipo, setTipo] = useState(""); */



    async function loadClient(){
        await api.get(`/cliente`)
        .then(response => {
            setClient(response.data);

        })
    }

    async function loadProduct(){
        await api.get(`/produtos`)
        .then(response => {
            setProduct(response.data);

        })
    }

    async function SaveRequest() {
        setRedirect(true)
    }
   


    useEffect(() =>{
        loadClient();
        loadProduct();
    }, [])


  

    return (
    
    <Row>
        { redirect && <Redirect to="/" /> } 

        <Header />
        <Col md={9}>
            <Style.Form>
            <Col md={9}>
            <Label className="title">Cadastrar Pedido</Label>
                <FormGroup row>
                    <Col sm={9}>
                    <FormGroup>
                    <Label >Selecione o cliente</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Selecione...</option>
                            { clients.map(client => (
                                <option key={client.id} label={client.name}></option>  
                                )) 
                            }
                        </Input>
                    </FormGroup>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={9}>
                    <FormGroup>
                    <Label >Selecione o produto</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Selecione...</option>
                            { products.map(product => (
                                <option key={product.id} label={product.nome}></option>  
                                )) 
                            }
                        </Input>
                        <span>+</span>
                    </FormGroup>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={9}>
                    <FormGroup>
                    <Label >Selecionea embalagem:</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Selecione...</option>
                            {
                                TypePackages.map( (name, index) => (
                                index > 0 && 
                                    <option label={name}></option>  
                             
                                ))
                            }
                        </Input>
                    </FormGroup>
                    </Col>
                </FormGroup>

                <Col sm={6}>
                    <Button type="button" color="warning" onClick={SaveRequest} class="close">Salvar</Button>
                    <Button type="button" color="secondary" ><Link to="/">Voltar</Link></Button>
                </Col>
            </Col>
            <Col md={2} className="icon">
                <SiIfood size={100} color='#ff1616' />     
            </Col>
            </Style.Form>
        </Col>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    </Row>
    
  );
}

export default FormProduct;