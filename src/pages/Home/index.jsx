import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from 'react-slick';

import LogoImage from '../../assets/logo.svg';
import RestaurantImage from '../../assets/restaurant-fake.png';

import { Wrapper, Container, Search, Logo, Map, Carousel, CarouselTitle } from './styles';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  function handleInputValue(event) {
    const { value } = event.currentTarget;
    setInputValue(value);
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
            <Input value={inputValue} onChange={(event) => handleInputValue(event)} />
          </TextField>
        </Search>

        <Carousel>
          <CarouselTitle>Na sua Área</CarouselTitle>

          <Slider {...settings}>
            <div>
              <img
                src={RestaurantImage}
                alt="Restautante
              fake"
              />
            </div>
            <div>
              <img
                src={RestaurantImage}
                alt="Restautante
              fake"
              />
            </div>
            <div>
              <img
                src={RestaurantImage}
                alt="Restautante
              fake"
              />
            </div>
            <div>
              <img
                src={RestaurantImage}
                alt="Restautante
              fake"
              />
            </div>
            <div>
              <img
                src={RestaurantImage}
                alt="Restautante
              fake"
              />
            </div>
          </Slider>
        </Carousel>
      </Container>

      <Map>
        <h1>Mapa</h1>
      </Map>
    </Wrapper>
  );
}
