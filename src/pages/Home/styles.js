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

export const Map = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
