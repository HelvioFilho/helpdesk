import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import { FilterButton, Title } from './styles';

interface FilterProps extends TouchableOpacityProps {
  title: string;
  isActive: boolean;
  type: 'open' | 'closed';
}

export function Filter({ title, isActive, type, ...rest }: FilterProps) {
  const { colors } = useTheme();
  const colorType = type === 'open' ? colors.secondary[700] : colors.green[300];

  return (
    <FilterButton
      isActive={isActive}
      borderColor={colorType}
      activeOpacity={0.9}
      {...rest}
    >
      <Title
        color={isActive ? colorType : colors.gray[300]}
      >
        {title}
      </Title>
    </FilterButton>
  );
}