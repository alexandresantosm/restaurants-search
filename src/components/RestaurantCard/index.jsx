import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import Skeleton from '../Skeleton';
import RestaurantImage from '../../assets/restaurant-photo-default-50.png';

import { Container, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

export default function RestaurantCard({ restaurant, onClick }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  function handleOnLoadImage() {
    setImageLoaded(true);
  }

  return (
    <Container onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf edit={false} value={restaurant.rating} activeColor="#6200ee" />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        src={restaurant.photos ? restaurant.photos[0].getUrl() : RestaurantImage}
        alt={
          restaurant.photos
            ? `Foto do restaurante ${restaurant.name}`
            : 'Foto padrão de restaurante'
        }
        imageLoaded={imageLoaded}
        onLoad={handleOnLoadImage}
      />
      {!imageLoaded && <Skeleton width="5.625rem" height="5.625rem" />}
    </Container>
  );
}
