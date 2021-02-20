import React from "react";
import Container from '@material-ui/core/Container';
import { Divider } from 'antd';

const contentStyle = {
  background: "#E1FFFA",
  color: "#fff",
  boxShadow: "3px 3px 5px 6px #ccc",
  borderRadius: "8px 8px",
};
const textStyle = {
  color: "#474554",
  marginTop: "5px",
  justifyContent: "center",
};
 function Footer (props) {
   return(
    <Container>
    <Divider dashed />
      <div style={contentStyle} className="footer">
       <h6 style={textStyle}>Made ♥️ India </h6>
      </div>
    </Container>
     
     );
 }
export default Footer;