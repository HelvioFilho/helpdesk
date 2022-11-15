import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

interface FilterButtonProps {
  isActive: boolean;
  borderColor: string;
}

interface TitleProps {
  color: string;
}

export const FilterButton = styled(TouchableOpacity) <FilterButtonProps>`
  width: ${RFPercentage(20)}px;
  padding: 10px 0px;
  border-radius: 5px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  ${({ isActive, borderColor }) => isActive ? css`
    border-width: 1px;
    border-color: ${borderColor};
  ` : css`
    border-color: ${borderColor};
  `};
`;

export const Title = styled.Text<TitleProps>`
  color: ${({ color }) => color};
  font-size: ${RFValue(9)}px;
  text-transform: uppercase;
`;