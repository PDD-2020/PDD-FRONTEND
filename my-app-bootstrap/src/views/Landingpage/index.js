import React , { useState, useEffect } from 'react';
import { Row, Col, Button, Form, FormGroup, Input , Modal, ModalHeader, ModalBody } from 'reactstrap';
import { SiIfood } from "react-icons/si";
import { FaBell } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { BsPeopleCircle, BsCloudDownload, BsSearch } from "react-icons/bs";
import logo from '../../assets/logo.png'

// components
import ClientsCard from '../../components/ClientsCard';
import FormClient from '../../components/FormClient';
//import ModalClient from '../../components/ModalClient';

import api from  '../../services/api';

import * as S from './style'

const LandingPage = (props) => {

    const [client, setClient] =  useState([]);

    async function loadClient(){
        await api.get(`/cliente`)// interpolação de acento
        .then(response => {
            setClient(response.data);
            console.log(response.data);
        })
    }

    useEffect(() =>{
        loadClient();
    }, [])


    const [modalClient, setModal] = useState(false);
    const toggleClient = () => setModal(!modalClient);

    return (
        <S.Navbar>        
            <Row>
                <Col sm="2">
                    <ul class="sidebar-nav" id="sidebar">
                        <li><img src={logo} alt="logo"></img></li>
                        <li><Button onClick={toggleClient}> <BsPeopleCircle size={40} color='#ff1616' /> <span>+</span> </Button></li>
                        <li><a><GiKnifeFork size={40} color='#ff1616' /> <span>+</span> </a></li>
                        <li><a><SiIfood size={40} color='#ff1616'/></a></li>
                        <li><a><BsCloudDownload size={40} color='#ff1616'/></a></li>
                       
                        <li><a id="#notification">
                            <FaBell size={40} color='#ff1616' />
                            <span>5</span>
                            </a> 
                        </li>
                    </ul>

                    <Modal isOpen={modalClient} toggle={toggleClient}>
                        <ModalHeader toggle={toggleClient}>Cadastro Cliente</ModalHeader>
                        <ModalBody>
                            <FormClient />
                        </ModalBody>
                    </Modal>

                </Col>
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
                    
                    {/* { client.map(clients => (
                        <ClientsCard name={clients.name}  endereco={clients.endereco} numero={clients.numero}/> 
                        ))

                    } */}
                </Col>
            </Row>
    </S.Navbar>  
  );
}

export default LandingPage;