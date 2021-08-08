import React, { useEffect, useState } from 'react';

import Skeleton from '../Skeleton';
import { Container, Title } from './styles';

export default function ImageCard({ photo, title }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();

    imageLoader.src = photo;

    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Container photo={photo}>
          <Title>{title}</Title>
        </Container>
      ) : (
        <Skeleton width="5.625rem" height="5.625rem" />
      )}
    </>
  );
}
