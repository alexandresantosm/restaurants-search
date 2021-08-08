import React from 'react';

import { LoadingSkeleton } from './styles';

export default function Skeleton({ width, height }) {
  return <LoadingSkeleton width={width} height={height} />;
}
