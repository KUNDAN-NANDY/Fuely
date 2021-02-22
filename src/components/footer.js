import React from "react";
import Container from '@material-ui/core/Container';
import { Divider } from 'antd';
import Fade from 'react-reveal/Fade';

const contentStyle = {
  boxShadow: "3px 3px 5px 6px #ccc",
  borderRadius: "8px 8px",
};
const textStyle = {
  color: "#474554",
  justifyContent: "center",
};
 function Footer (props) {
   return(
    <Container>
    <Fade right>
    <Divider dashed />
      <div style={contentStyle} className="footer">
       <h6 style={textStyle}>Made ♥️ India </h6>
      </div>
    </Fade>
    </Container>
     
     );
 }
export default Footer;