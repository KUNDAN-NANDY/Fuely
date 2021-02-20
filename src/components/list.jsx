import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import petrol from '../img/petrol.svg';
import diesel from '../img/diesel.png';
import city from '../img/city.png';

const List = (props) => {

  return (
    <>
     <Container>
     <div className="intro text-center">
       <Row>
         <Col>
         <img style={{"height" : "48px", "width" : "48px"}} src={petrol} alt="Petrol Pricing" />
          <p style={{"whiteSpace" : "nowrap"}}>Petrol</p>
         </Col>
         <Col>
           <img style={{"height" : "48px", "width" : "48px"}} src={diesel} alt="Diesel Pricing" />
           <p style={{"whiteSpace" : "nowrap"}}>Diesel</p>
         </Col>
         <Col>
          <img style={{"height" : "48px", "width" : "48px"}} src={city} alt="city wise pricing"/>
          <p style={{"whiteSpace" : "nowrap"}}>City</p>
         </Col>
       </Row>
      </div>
     </Container>
    </>
  );
}

export default List;