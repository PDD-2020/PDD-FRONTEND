import React, { useState } from 'react';
import { Link , Redirect } from 'react-router-dom';
import { FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import api from  '../../services/api';

import * as Style from './style';
 
//components
import Header from '../../components/Header';
import TypeProducts from '../../utils/typeProducts';

function FormProduct( ) {
                                                                                                                                                                                                                                                                          
    const [redirect, setRedirect] = useState(false);

    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tipo, setTipo] = useState("");

    async function SaveProduct() {

        if(!nome) 
            return alert('Informe o nome do produto')
        else if(!valor)
            return alert('Informe o valor do produto')
        else if(!descricao)
            return alert('Adicione uma breve descrição')
        else if(!tipo)
            return alert('Selecione uma imagem')

        await api.post('/produtos', {
            nome,
            valor,
            descricao,
            tipo,
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
                <Col sm={3}>
                    <FormGroup>
                        <Label for="examplePassword">Valor:</Label>
                        <Input
                            type="number"
                            name="number"
                            id="text"
                            placeholder="R$: "
                            onChange={(e) => setValor(e.target.value)} value={valor}
                        />
                    </FormGroup>
                </Col>
                <Col sm={6}>
                <FormGroup>
                        <Label for="exampleText">Breve descrição:</Label>
                        <Input
                            type="textarea" name="text" id="exampleText" maxLength="100"
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
                                <img src={icon} alt="Foto produto"/>
                            </Button>   
                        ))
                    }
                </FormGroup>
                </Col>
                <Col sm={6}>
                    <Button type="button" onClick={SaveProduct} color="warning" class="close">Salvar</Button>
                    <Button type="button" color="secondary" ><Link to="/">Voltar</Link></Button>
                </Col>
            
            </Style.Form>
        </Col>
    </Row>
    
  );
}

export default FormProduct;