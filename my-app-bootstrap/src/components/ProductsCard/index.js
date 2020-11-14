import React from 'react';
import { Col,Card, CardImg, CardText, CardBody, CardSubtitle } from 'reactstrap';
import * as Styled from './style'

import TypeProducts from '../../utils/typeProducts';

function ProductCard( { nome, descricao, valor, tipo } ) {

  return (
      <Col sm="6">
        <Styled.Container>
          <Card >
            <CardImg top width="100%" src={TypeProducts[tipo]} alt="Card image cap" />
            <CardBody>
              <CardSubtitle tag="h6" className="text-title">{nome}</CardSubtitle>
              <CardText>
                Preço: {valor}<br/>
                Descrição: {descricao}
              </CardText>
            </CardBody>
          </Card>
        </Styled.Container>
      </Col> 
    
  );
};

export default ProductCard;