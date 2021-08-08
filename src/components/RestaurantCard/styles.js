import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 0.3125rem;
  padding: 1rem;
  background-color: #fff;
  border-left: 5px solid transparent;

  transition: all 0.5s ease-out 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    border-left-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  margin-bottom: 0.5rem;
`;

export const Address = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  line-height: 1.375rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const RestaurantPhoto = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.5rem;
  object-fit: cover;
  display: ${(props) => (props.imageLoaded ? 'block' : 'none')};
`;
