import React from 'react';
import { Row, Col,Card, CardImg, CardText, CardBody, CardSubtitle } from 'reactstrap';

function ProductCard( { nome, descricao, valor, tipo } ) {

  return (
    
    <Row>
      <Col sm="6">
       <Card >
        <CardImg top width="100%" src={tipo} alt="Card image cap" />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{nome}</CardSubtitle>
          <CardText>
            {valor}<br/>
            {descricao}
          </CardText>
        </CardBody>
      </Card>
      </Col> 
    </Row>
    
  );
};

export default ProductCard;