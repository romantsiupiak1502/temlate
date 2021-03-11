import React from 'react';

import { styled } from '../../styles';
import { H4 } from '../../components';

const Wrapper = styled.div`
  display: flex;
`;

const TextStyled = styled(H4)`
  color: ${ ({ theme }) => theme.colors.primary }
`;

interface IUserInfoModalContentProps {
  title: string;
  value: string;
}

export const UserInfoRow: React.FC<IUserInfoModalContentProps> = props => {
  const { title, value } = props;
  return (
    <Wrapper>
      <TextStyled isBold={ true }>{ title }: </TextStyled>
      <TextStyled>{ value }</TextStyled>
    </Wrapper>
  );
};
