import React from 'react';

import { styled } from '../../styles';
import { H4 } from '../../components';

const Wrapper = styled.div`
  display: flex;
`;

interface IUserInfoModalContentProps {
  field: string;
  value: string;
}

export const UserInfoRow: React.FC<IUserInfoModalContentProps> = props => {
  const { field, value } = props;
  return (
    <Wrapper>
      <H4 isBold={true}>{field}: </H4>
      <H4>{value}</H4>
    </Wrapper>
  );
};
