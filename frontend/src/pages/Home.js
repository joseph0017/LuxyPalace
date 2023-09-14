import React from 'react';
import Card from '../components/Card';
import girl from '../images/pexels-pedro.jpg';
import girl2 from '../images/pexels-addy.jpg';
import Container from '../components/Container';
import CardList from '../components/CardList';
import Line from '../components/Line';
import CardReverse from '../components/CardReverse';

const Home = () => {
  return (
    <div>
      <Card cardImg={girl} h1text={'Bringing You Quality Products'} moreInfo={'We offer amazing jewelery products and deliver them to you, at your doorsteps.'} />
      <Container />
      <Line />
      <CardList />
      <CardReverse cardImg={girl2} h1text={'New Collections Available'} moreInfo={'Shop with us and get amazing discount on first time purchase'} />
    </div>
  );
};

export default Home;
