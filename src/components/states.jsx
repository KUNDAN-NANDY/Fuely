import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Carousel} from 'react-bootstrap';

function FAQ(props) {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    getFAQs();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFAQs = () => {
    axios
      .get('https://api.npoint.io/585b2bdddf5c89812424')
      .then((response) => {
        setFaq(response.data['states']);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="FAQ">
      <Carousel className="state-slide"
      controls={false}
      indicators={false}
      >
      {faq.map((faq, index) => {
        return (
        <Carousel.Item interval={500}>
        <div>
         <h3>{faq.state}</h3>
        </div>
      </Carousel.Item>
        );
      })}
     </Carousel>
    </div>
    );
}

export default FAQ;