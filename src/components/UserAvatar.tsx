import React from 'react';

import { styled } from '../styles';
import { UserAvatarConst } from '../consts';

import { H2 } from './Text';

interface IAvatarProps {
  size: number;
  shouldChangeBackground: boolean;
}

const Avatar = styled.div<IAvatarProps>`
  width: ${ ({size}) => size }px;
  height: ${ ({size}) => size }px;
  background-image: linear-gradient(to right top, ${({theme, shouldChangeBackground}) => shouldChangeBackground
          ? theme.colors.gradient1
          : theme.colors.gradient2 });
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarText = styled(H2)`
  color: ${({theme}) => theme.colors.white};
`;

interface IUserAvatarProps {
  text: string,
  size: UserAvatarConst
  onClick: () => void,
}

export const UserAvatar: React.FC<IUserAvatarProps> = props => {
  const { text, size, onClick } = props;

  return (
    <Avatar onClick={onClick} size={size} shouldChangeBackground={text.charCodeAt(0) > 77}>
      <AvatarText>{text}</AvatarText>
    </Avatar>
  );
};
