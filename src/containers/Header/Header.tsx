import React from 'react';

import { H1, UserAvatar, Dropdown, IconButton, DropdownArrow, Logout} from '../../components';
import { styled } from '../../styles';
import { UserAvatarConst } from '../../consts';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
`;

const Title = styled(H1)`
  padding-left: 20px;
  color: ${ ({ theme }) => theme.colors.primary };
`;

const Language = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${ ({ theme }) => theme.colors.primary };
  color: ${ ({ theme }) => theme.colors.white };
  border-radius: 50%;
  margin-right: 24px;
  cursor: pointer;
`;

const LoggedUser = styled.div`
  width: 16%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 80%;
`;

export const Header: React.FC = () => {

  const [isOpenDropdown, setDropdownStatus] = React.useState(false);

  return (
    <HeaderWrapper>
      <Title>Swipex</Title>
      <LoggedUser>
        <Language>En</Language>
        <UserAvatar text='RT' size={UserAvatarConst.SMALL_AVATAR} onClick={( () => {} )} />
        <IconButton text='' icon={<DropdownArrow />} onClick={() => setDropdownStatus(!isOpenDropdown)} />
      </LoggedUser>
      { isOpenDropdown && <Dropdown items={[{ text: 'Logout', icon: <Logout size='25px'/>, onClick: () => {}}]} /> }
    </HeaderWrapper>
  );
};