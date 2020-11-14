import React from 'react';
import {Link} from 'react-router-dom';
import { ListGroupItem, Col } from 'reactstrap';
import { SiIfood } from "react-icons/si";
import { FaBell } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { BsPeopleCircle, BsCloudDownload } from "react-icons/bs";
import logo from '../../assets/logo.png'

import * as S from './style'

function Header () {

  return (
  
      <Col sm="2">    
        <S.ListGroup className="sidebar-nav" id="sidebar">
            <ListGroupItem > <Link to="/"><img src={logo} alt="logo"></img></Link></ListGroupItem>
            <ListGroupItem ><Link to="cliente"> <BsPeopleCircle size={40} color='#ff1616' /> </Link></ListGroupItem>
            <ListGroupItem ><Link to="produtos"> <GiKnifeFork size={40} color='#ff1616' /></Link></ListGroupItem>
            <ListGroupItem ><SiIfood size={40} color='#ff1616' /></ListGroupItem>
         {/*    <ListGroupItem ><BsCloudDownload size={40} color='#ff1616' /></ListGroupItem>
            <ListGroupItem ><FaBell size={40} color='#ff1616' /><span>5</span></ListGroupItem> */}
        </S.ListGroup>
    </Col>
  
  );
}

export default Header;