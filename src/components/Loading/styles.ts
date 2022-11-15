import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

interface LoadProps {
  color: string;
}

export const Load = styled(ActivityIndicator) <LoadProps>`
  flex: 1;
  align-self: center;
  color: ${({ color }) => color};
`;