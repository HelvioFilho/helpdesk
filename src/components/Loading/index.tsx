import React from 'react';
import { useTheme } from 'styled-components';

import { Load } from './styles';

interface LoadingProps {
  size?: number;
  color?: string;
}

export function Loading({ size = 26, color }: LoadingProps) {

  const { colors } = useTheme();

  return (
    <Load
      color={color ? color : colors.secondary[700]}
      size={size}
    />
  );
}