import React from "react";
import Container from '@material-ui/core/Container';
import { Divider } from 'antd';
import Fade from 'react-reveal/Fade';


 function Footer (props) {
   return(
    <Container>
    <Fade right>
    <Divider dashed />
    </Fade>
    </Container>
     
     );
 }
export default Footer;