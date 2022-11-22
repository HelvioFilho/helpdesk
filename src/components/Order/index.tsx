import React from 'react';
import { CircleWavyCheck, ClockAfternoon, Hourglass } from 'phosphor-react-native';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';
import { OrderProps } from '../../screens/Home';
import { appStore } from '../../services/Store';

import {
  Box,
  Circle,
  Container,
  Data,
  Patrimony,
  Pill,
  TextPill,
  Wrapper,
  WrapperClock,
  WrapperContent
} from './styles';

interface ListOrderProps extends TouchableOpacityProps {
  data: OrderProps;
}

export function Order({ data, ...rest }: ListOrderProps) {
  const { colors } = useTheme();
  const { data: storeData } = appStore();
  const statusColor = data.status === 'open' ? colors.secondary[700] : colors.green[300];
  let isPill = false;
  if (data.new_order) {
    if (data.status === 'open' && storeData.type === 'technician') {
      isPill = true;
    } else if (data.status !== 'open' && storeData.type === 'customer') {
      isPill = true;
    }
  }
  return (
    <Container
      {...rest}
    >
      <Wrapper>
        {
          isPill &&
          <Pill
            color={statusColor}
          >
            <TextPill>
              Novo
            </TextPill>
          </Pill>
        }
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