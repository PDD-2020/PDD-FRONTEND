import React, { useState }  from 'react';
import { Row, Col, Button, Collapse, CardBody, Card } from 'reactstrap';
import { RiMapPinUserLine } from "react-icons/ri";
import * as Styled from './style'

function ClienstCard( { name, endereco, numero, email } ) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
   <Styled.Container>
      <Row>
          <Button className="card-client" onClick={toggle} style={{ marginBottom: '1rem' }} >
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
            </CardBody>
          </Card>
      </Collapse> 

      </Row>       
   </Styled.Container>
  );
}

export default ClienstCard;