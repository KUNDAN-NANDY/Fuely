import React from 'react';
import { Carousel } from 'antd';
import {Container, Row, Col} from 'react-bootstrap';
const contentStyle = {
  height: '160px',
  width: '93%',
  marginTop: '8px',
  marginLeft: '12px',
  marginRight: '12px',
  marginBottom: '3px',
  boxShadow: '2px 2px 4px #000000',
  borderRadius: '10px',
  color: '#fff',
  lineHeight: '160px',
  lineWidth: '93%',
  background: '#364d79',
};

const Slider = (props) => {

  return (
    <>
      <Carousel className="text-center" autoplay>
    <div>
      <img style={contentStyle} class="img-fluid" src="https://i0.wp.com/factly.in/wp-content/uploads/2015/03/Indian-Petrol-Price-Breakdown-Infographic.png?ssl=1" />
    </div>
    <div>
      <img style={contentStyle} class="img-fluid" src="https://offers.freecharge.in/fuel/assets/images/header-1.png" />
    </div>
    <div>
      <img style={contentStyle} class="img-fluid" src="https://images.freekaamaal.com/post_images/1611746867.jpeg" />
    </div>
    <div>
      <img style={contentStyle} class="img-fluid" src="https://i.postimg.cc/YCvtkKSB/image.jpg" />
    </div>
  </Carousel>
  </>
  );
}

export default Slider;