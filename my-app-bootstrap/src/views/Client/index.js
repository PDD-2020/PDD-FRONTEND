import React, { useState } from 'react';
import { Link, Redirect }  from 'react-router-dom';
import { FormGroup, Label, Input, Button, Row, Col, } from 'reactstrap';

import api from  '../../services/api';

import * as Style from './style';
 
//components
import Header from '../../components/Header';


function FormClient( ) {
                                                                                                                                        
    const [redirect, setRedirect] = useState(false);

    const [name, setName] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [email, setEmail] = useState("");


    async function Save()   {
        // validação dos campos
        if(!name) 
            return alert('Informe o nome do cliente')
        else if(!endereco)
            return alert('Informe o endereco do cliente')
        else if(!numero)
            return alert('Informe o número do cliente')
        
        await api.post('/cliente', {
            name,
            endereco,
            numero,
            email,
        }).then(() =>
            setRedirect(true)
        )
    }

    return (
    
    <Row>
        { redirect && <Redirect to="/" /> }
        <Header />
        <Col md={9}>
            <Style.Form>
                <Label className="title">Cadastrar Cliente</Label>
                <Col sm={6}>
                    <FormGroup>
                        <Label for="exampleEmail">Nome:</Label>
                        <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Digite o nome..."
                            onChange={(e) => setName(e.target.value)} value={name}
                        
                        />
                    </FormGroup>
                </Col>
                <Col sm={6}>
                    <FormGroup>
                        <Label for="examplePassword">Endereço:</Label>
                        <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Digite o endereço..."
                            onChange={(e) => setEndereco(e.target.value)} value={endereco}
                        />
                    </FormGroup>
                </Col>
                <Col sm={6}>
                <FormGroup>
                        <Label for="exampleNumber">Telefone</Label>
                        <Input
                            type="number"
                            name="number"
                            id="exampleNumber"
                            placeholder="Digite o telefone..."
                            onChange={(e) => setNumero(e.target.value)} value={numero}

                        />
                    </FormGroup>
                </Col>
                <Col sm={6}>
                <FormGroup>
                    <Label for="exampleUrl">E-mail:</Label>
                    <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Digite o e-mail..."
                    onChange={(e) => setEmail(e.target.value)} value={email}

                    />
                </FormGroup>
                </Col>
                <Col sm={6}>
                    <Button type="button" onClick={Save} color="warning" class="close">Salvar</Button>
                    <Button type="button" color="secondary" ><Link to="/">Voltar</Link></Button>
                </Col>
            
            </Style.Form>
        </Col>
    </Row>
    
  );
}

export default FormClient;