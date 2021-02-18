import React from 'react';

import { styled, theme} from '../styles';

const Avatar = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarText = styled.h1`
  color: ${({theme}) => theme.colors.white};
`;

interface IUserAvatarProps {
  text: string,
  size: string
  onClick: () => void,
}

export const UserAvatar: React.FC<IUserAvatarProps> = props => {
  const { text, size, onClick } = props;

  let width: number = size ? 200 : 100;
  let fontSize: number = size ? 300 : 200;
  let gradient =  text.charCodeAt(0) > 77 ? theme.colors.gradient2 : theme.colors.gradient1;

  return (
    <Avatar
      onClick={onClick}
      style={{width: `${width}px`, height: `${width}px`, background: `linear-gradient(${gradient})`}}>
      <AvatarText style={{fontSize: `${fontSize}%`}}>{text}</AvatarText>
    </Avatar>
  );
};
