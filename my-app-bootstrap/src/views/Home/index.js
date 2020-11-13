import React , { useState, useEffect } from 'react';
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import { BsSearch } from "react-icons/bs";


// components
import ClientsCard from '../../components/ClientsCard';
import ProductsCard from '../../components/ProductsCard';
import Header from '../../components/Header';

import api from  '../../services/api';
import * as S from './style'


const Home = (props) => {

    const [client, setClient] =  useState([]);
    const [product, setProduct] =  useState([]);

    async function loadClient(){
        await api.get(`/cliente`)// interpolação de acento
        .then(response => {
            setClient(response.data);
            console.log(response.data);
        })
    }

    async function loadProduct(){
        await api.get(`/produtos`)// interpolação de acento
        .then(response => {
            setProduct(response.data);
            console.log(response.data);
        })
    }

    useEffect(() =>{
        loadClient();
        loadProduct();
    }, [])

    
    return (
        <S.Navbar>        
            <Row>
                <Header />
                <Col sm="5" className="content">
                    <Form className="form-inline">
                        <FormGroup>
                            <Input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <Button className="btn btn-outlin-danger my-2 my-sm-0" type="submit"><BsSearch size={22} color='#80ed99'/></Button>
                        </FormGroup>
                    </Form>
                    { client.map(clients => (
                        <ClientsCard name={clients.name}  endereco={clients.endereco} numero={clients.numero} email={clients.email}/> 
                        ))
                    }
                </Col>
                <Col sm="4" className="content dish">
                {   product.map(products => (
                        <ProductsCard nome={products.nome} valor={products.valor} descricao={products.descricao} tipo={products.tipo}/> 
                    )) 

                }  
                </Col>
            </Row>
    </S.Navbar>  
  );
}

export default Home;