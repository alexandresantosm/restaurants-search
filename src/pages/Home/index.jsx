import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import LogoImage from '../../assets/logo.svg';
import RestaurantImage from '../../assets/restaurant-photo-default-50.png';

import { ImageCard, RestaurantCard, Map, Modal } from '../../components';

import {
  Wrapper,
  Container,
  Search,
  Logo,
  Carousel,
  CarouselTitle,
  CarouselSlider,
} from './styles';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);

  function handleInputValue(event) {
    const { value } = event.currentTarget;
    setInputValue(value);
  }

  function handleOnKeyPress(event) {
    if (event.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={LogoImage} alt="Logo Restaurante Finder" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onKeyPress={handleOnKeyPress}
              onChange={(event) => handleInputValue(event)}
            />
          </TextField>
        </Search>

        <Carousel>
          <CarouselTitle>Na sua Área</CarouselTitle>

          <CarouselSlider {...settings}>
            {restaurants.map((restaurant) => (
              <ImageCard
                key={restaurant.place_id}
                photo={restaurant.photos ? restaurant.photos[0].getUrl() : RestaurantImage}
                title={restaurant.name}
              />
            ))}
          </CarouselSlider>
        </Carousel>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.place_id} restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query} />

      <Modal open={isOpenedModal} onClose={() => setIsOpenedModal(!isOpenedModal)} />
    </Wrapper>
  );
}
