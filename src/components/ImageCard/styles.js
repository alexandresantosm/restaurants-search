import styled from 'styled-components';

export const Container = styled.div`
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 0.5rem;
  background-image: url(${({ photo }) => photo});
  background-size: cover;
`;

export const Title = styled.span`
  color: #fff;
  font-size: 1rem;

  display: inline-block;
  padding: 0.3125rem;
`;
