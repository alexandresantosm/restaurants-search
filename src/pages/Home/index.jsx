import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import LogoImage from '../../assets/logo.svg';
import RestaurantImage from '../../assets/restaurant-photo-default-50.png';

import { ImageCard, RestaurantCard, Map, Modal, Loader } from '../../components';

import {
  Wrapper,
  Container,
  Search,
  Logo,
  Carousel,
  CarouselTitle,
  CarouselSlider,
  ModalTitle,
  ModalContent,
} from './styles';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [restaurantId, setRestaurantId] = useState(null);
  const [query, setQuery] = useState(null);
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  function handleInputValue(event) {
    const { value } = event.currentTarget;
    setInputValue(value);
  }

  function handleOnKeyPress(event) {
    if (event.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleClickRestaurantCard(placeId) {
    setRestaurantId(placeId);
    setIsOpenedModal(true);
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
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
          {restaurants.length > 0 ? (
            <>
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
            </>
          ) : (
            <>
              <Loader />
            </>
          )}
        </Carousel>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.place_id}
            restaurant={restaurant}
            onClick={() => handleClickRestaurantCard(restaurant.place_id)}
          />
        ))}
      </Container>
      <Map query={query} placeId={restaurantId} />

      <Modal open={isOpenedModal} onClose={() => setIsOpenedModal(!isOpenedModal)}>
        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>

        <ModalContent>
          {restaurantSelected?.opening_hours?.open_now
            ? 'Aberto agora :)'
            : 'Fechado neste momento :('}
        </ModalContent>
      </Modal>
    </Wrapper>
  );
}
