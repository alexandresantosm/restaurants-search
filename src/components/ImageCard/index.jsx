import React from 'react';

import { Container, Title } from './styles';

export default function ImageCard({ photo, title }) {
  return (
    <Container photo={photo}>
      <Title>{title}</Title>
    </Container>
  );
}
