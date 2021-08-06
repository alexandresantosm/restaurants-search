import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import LogoImage from '../../assets/logo.svg';
import RestaurantImage from '../../assets/restaurant-fake.png';

import { ImageCard, RestaurantCard, Modal } from '../../components';

import {
  Wrapper,
  Container,
  Search,
  Logo,
  Map,
  Carousel,
  CarouselTitle,
  CarouselSlider,
} from './styles';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [isOpenedModal, setIsOpenedModal] = useState(true);

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

          <CarouselSlider {...settings}>
            <ImageCard photo={RestaurantImage} title="Fogão à lenha" />
            <ImageCard photo={RestaurantImage} title="Fogão à lenha" />
            <ImageCard photo={RestaurantImage} title="Fogão à lenha" />
            <ImageCard photo={RestaurantImage} title="Fogão à lenha" />
          </CarouselSlider>
        </Carousel>

        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </Container>

      <Map>
        <h1>Mapa</h1>
      </Map>

      <Modal open={isOpenedModal} onClose={() => setIsOpenedModal(!isOpenedModal)} />
    </Wrapper>
  );
}
