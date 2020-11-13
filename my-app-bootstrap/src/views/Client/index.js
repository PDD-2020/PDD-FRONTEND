import React, { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FormGroup, Label, Input, Button, Row, Col, } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import api from  '../../services/api';

import * as Style from './style';
 
//components
import Header from '../../components/Header';


function FormClient( ) {
                                                                                                                                        
    const history = useHistory();

    const [name, setName] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [email, setEmail] = useState("");


    async function Save() {
        await api.post('/cliente', {
            name,
            endereco,
            numero,
            email,
        }).then(() =>
            alert('Cliente Cadastrado')
        )

        history.push('/');
    }

    useEffect(() => {
      Save();
    }, )

  return (
    
    <Row>
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
                    onChange={(e)=> setEmail(e.target.value)} value={email}

                    />
                </FormGroup>
                </Col>
                <Col sm={6}>
                    <Button type="submit" onClick={Save} color="success" class="close">Salvar</Button>
                    <Link to="/">Voltar</Link>
                </Col>
            
            </Style.Form>
        </Col>
    </Row>
    
  );
}

export default FormClient;