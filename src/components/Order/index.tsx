import { CircleWavyCheck, ClockAfternoon, Hourglass } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';
import { OrderProps } from '../../screens/Home';

import { 
  Box,
  Circle,
  Container, 
  Data, 
  Patrimony, 
  Wrapper, 
  WrapperClock, 
  WrapperContent
} from './styles';

interface ListOrderProps extends TouchableOpacityProps {
  data: OrderProps;
}

export function Order({ data, ...rest }: ListOrderProps) {
  const { colors } = useTheme();
  const statusColor = data.status === 'open' ? colors.secondary[700] : colors.green[300];

  return (
    <Container
      {...rest}
    >
      <Wrapper>
        <Box
          color={statusColor}
        />
        <WrapperContent>
          <Patrimony>
            Patrimônio {data.patrimony}
          </Patrimony>
          <WrapperClock>
            <ClockAfternoon
              size={15}
              color={colors.gray[300]}
            />
            <Data>
              {data.when}
            </Data>
          </WrapperClock>
        </WrapperContent>
        <Circle>
          {
            data.status === 'closed' ?
              <CircleWavyCheck size={24} color={statusColor} /> :
              <Hourglass size={24} color={statusColor} />
          }
        </Circle>
      </Wrapper>
    </Container>
  );
}