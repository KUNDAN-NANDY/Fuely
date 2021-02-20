import React, {Suspense} from 'react';
import { Spin } from 'antd';
import {Helmet} from 'react-helmet';

import {Container} from 'react-bootstrap';
const Slider = React.lazy(() => import('./slider'));
const Welcome = React.lazy(() => import('./welcome'));
const Price = React.lazy(() => import('./price'));
const List = React.lazy(() => import('./list'));
const Reason = React.lazy(() => import('./reason'));

const Home = (props) => {
  return (
    <>
    <Helmet>
      <title>Fuley - Daily Fuel Price</title>
    </Helmet>
    <Suspense fallback={<div><Spin /></div>}>
     <Slider/>
     <Welcome />
     <List />
     <div className="container mt-3 mb-4">
     <Price />
     </div>
     <Container>
     <Reason />
     </Container>
    </Suspense>
    </>
  );
}

export default Home;