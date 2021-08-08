import Slider from 'react-slick';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  width: 360px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  overflow-y: auto;
`;

export const Search = styled.section`
  background-color: #fff;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled.img`
  margin: 0 auto;
  height: 5.625rem;
  width: 9.375rem;
`;

export const Carousel = styled.div`
  background-color: #fff;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
`;

export const CarouselTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
`;

export const CarouselSlider = styled(Slider)`
  .slick-slide:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const Map = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const ModalTitle = styled.p`
  margin-top: 0.625rem;
  letter-spacing: 0.006875rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
`;

export const ModalContent = styled.p`
  margin-top: 0.625rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.1875rem;
`;
