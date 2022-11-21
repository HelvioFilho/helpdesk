import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

interface LoadProps {
  color: string;
}

export const Load = styled(ActivityIndicator) <LoadProps>`
  color: ${({ color }) => color};
`;