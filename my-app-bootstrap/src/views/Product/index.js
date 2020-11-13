import React, { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FormGroup, Label, Input, Button, Row, Col, } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import api from  '../../services/api';

import * as Style from './style';
 
//components
import Header from '../../components/Header';
import TypeProducts from '../../utils/typeProducts';

function FormProduct( ) {
                                                                                                                                        
    const history = useHistory();

    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tipo, setTipo] = useState("");

    async function SaveProduct() {
        await api.post('/produtos', {
            nome,
            valor,
            descricao,
            tipo,
        }).then(() =>
            alert('Produto Cadastrado')
        )

        history.push('/');
    }

    useEffect(() => {
        SaveProduct();
    }, )

  return (
    
    <Row>
        <Header />
        <Col md={9}>
            <Style.Form>
                <Label className="title">Cadastrar Produto</Label>
                <Col sm={6}>
                    <FormGroup>
                        <Label for="exampleEmail">Nome produto:</Label>
                        <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Digite o nome..."
                            onChange={(e) => setNome(e.target.value)} value={nome}
                        
                        />
                    </FormGroup>
                </Col>
                <Col sm={6}>
                    <FormGroup>
                        <Label for="examplePassword">Valor:</Label>
                        <Input
                            type="text"
                            name="number"
                            id="text"
                            placeholder="Digite o endereço..."
                            onChange={(e) => setValor(e.target.value)} value={valor}
                        />
                    </FormGroup>
                </Col>
                <Col sm={6}>
                <FormGroup>
                        <Label for="exampleText">Descricão:</Label>
                        <Input
                            type="textarea" name="text" id="exampleText" 
                            onChange={(e) => setDescricao(e.target.value)} value={descricao}
                        />
                    </FormGroup>
                </Col>
                <Col sm={9}>
                <FormGroup className="flex">
                    {
                        TypeProducts.map( (icon, index) => (
                            index > 0 && 
                            <Button type="button" onClick={() => setTipo(index)}>
                                <img src={icon} alt="Tipo tarefa"/>
                            </Button>   
                        ))
                    }
                </FormGroup>
                </Col>
                <Col sm={6}>
                    <Button type="submit" onClick={SaveProduct} color="success" class="close">Salvar</Button>
                    <Link to="/">Voltar</Link>
                </Col>
            
            </Style.Form>
        </Col>
    </Row>
    
  );
}

export default FormProduct;