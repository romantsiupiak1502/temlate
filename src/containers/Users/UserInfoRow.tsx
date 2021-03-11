import React from 'react';

import { styled } from '../../styles';
import { H4 } from '../../components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextStyled = styled(H4)`
  color: ${ ({ theme }) => theme.colors.primary };
  margin-top: 8px;
`;

interface IUserInfoModalContentProps {
  title: string;
  value: string;
}

export const UserInfoRow: React.FC<IUserInfoModalContentProps> = props => {
  const { title, value } = props;
  return (
    <Wrapper>
      <TextStyled>{ title }: </TextStyled>
      <TextStyled isBold={ true }>{ value }</TextStyled>
    </Wrapper>
  );
};
