import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Carousel } from 'antd';

function FAQ(props) {
  const [faq, setFaq] = useState([]);
  //const id = props.match.params.id;
  
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};
const newsCard = {
  background: 'red',
}
    
  useEffect(() => {
    getFAQs();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  let id = props.match.params.id;

  const getFAQs = () => {
    axios
      .get('https://api.cretic.co.in/api/price/'+id)
      .then((response) => {
        setFaq({ hits: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="FAQ">
    <h3>{id}</h3>
      <ul>
        {faq.hits &&
          faq.hits.map((item, index) => (
            <li key={index}>
              <span>{item.district}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default FAQ;
