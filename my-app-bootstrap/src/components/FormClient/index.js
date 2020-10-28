import React, { useState , useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               } from 'reactstrap';

import { useHistory } from 'react-router-dom';
import api from  '../../services/api';


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
            alert('Cliente cadastrado')
        )

        history.push('/');
    }

    useEffect(() =>{
      Save();
    }, [])

  return (
    
    <Form >
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
        <Button type="submit" onClick={Save} color="primary" class="close">Salvar</Button>
    
  </Form>
  
  );
}

export default FormClient;