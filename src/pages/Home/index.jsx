import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import LogoImage from '../../assets/logo.svg';
import RestaurantImage from '../../assets/restaurant-fake.png';

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
      <Map query={query} />

      <Modal open={isOpenedModal} onClose={() => setIsOpenedModal(!isOpenedModal)} />
    </Wrapper>
  );
}
