import React from 'react';
import {Carousel} from 'react-bootstrap';

const GSTReg = (props) => {

  return (
    <>
     <Carousel
     calssName="reason"
     controls={false}
      indicators={false}
     >
      <Carousel.Item>
        <img
      className="d-block w-100"
      src="https://factly.in/wp-content/uploads/2015/03/Indian-Petrol-Price-Breakdown-Infographic-768x396.png"
      alt="First slide" />
    </Carousel.Item>
   </Carousel>
    </>
  );
}

export default GSTReg;