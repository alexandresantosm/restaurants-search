import React from 'react';
import ReactStars from 'react-rating-stars-component';

import RestaurantImage from '../../assets/restaurant-fake.png';

import { Container, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

export default function RestaurantCard() {
  return (
    <Container>
      <RestaurantInfo>
        <Title>Nome do restaurante</Title>
        <ReactStars count={5} isHalf edit={false} value={4} activeColor="#6200ee" />
        <Address>Estrada do Siqueira, 134</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={RestaurantImage} alt="Restaurante Fake" />
    </Container>
  );
}
