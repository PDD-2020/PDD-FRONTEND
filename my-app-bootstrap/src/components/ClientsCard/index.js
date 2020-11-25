import React, { useState, useEffect}  from 'react';
import { Row, Col, Button, Collapse, CardBody, Card, ListGroup, ListGroupItem} from 'reactstrap';
import { RiMapPinUserLine } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import api from  '../../services/api';
import * as Styled from './style';

function ClienstCard( { name, endereco, numero, email, id }) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [request, setRequest] = useState([]);


  async function loadRequest(){
    await api.get(`/pedidos`)
    .then(response => {
      setRequest(response.data);
    })
    
  }

  let requestId = request.map((request) => {
    return request.cliente.id;
  })

  // função pra obter um join no id do cliente e id do cliente dentro do pedido
  let filter = [];
  requestId.filter(function(e) {
    if (id.indexOf(e) !== -1) {   
      filter.push(e)
    }
  });

useEffect(() =>{
  loadRequest()
}, [])

  return (
   <Styled.Container>
      <Row>
          <Button className={filter.length === 3 ? "card-client notification" : "card-client"} onClick={toggle} style={{ marginBottom: '1rem' }} >
              <strong>Cliente: <span>{name}</span></strong>
              <RiMapPinUserLine size={20} color='#f77f00' />
          </Button>

          <Collapse isOpen={isOpen}>
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardBody>
                <Col>
                  <strong>Nome: </strong>
                  <span> {name} </span>
                </Col>
                <Col>
                  <strong>Endereço: </strong>
                  <span> {endereco} </span>
                </Col>
                <Col>
                  <strong>Telefone: </strong>
                  <span> {numero} </span>
                </Col>
                <Col>
                  <strong>E-mail: </strong>
                  <span> {email} </span>
                 
                </Col>
                <Col>
                {filter.length !== 0 ? <strong>Cupons de pedido:</strong> : ''}
                  <ListGroup>
                     { filter.map((item,i) => i < 3 ? <ListGroupItem key={i}><GiTicket size={18}/> {i+1} {i === 0 ? 'cupom' :' cupons'}</ListGroupItem> : 'O cliente completou 10 cupons e foi enviada uma notificação entre em contato com ele para decidir o prêmio') }
                  </ListGroup>
                </Col>
            </CardBody>
          </Card>
      </Collapse> 

      </Row>       
   </Styled.Container>
  );
}

export default ClienstCard;