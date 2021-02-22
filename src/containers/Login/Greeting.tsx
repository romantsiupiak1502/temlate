import React, { useState } from 'react';
import { LoginLandscapeImage } from '../../assets';
import { Tab } from '../../components';
import { LoginRegistrationConst } from '../../consts';

import { styled } from '../../styles';

import { LoginForm } from "./LoginForm";

const Wrapper = styled.div`
  width: 1000px;
  height: 600px;
  display: flex;
  box-shadow: 5px 5px 5px gray;
  border: 1px solid ${({theme})=>theme.colors.black};
  background-color: ${({theme})=> theme.colors.white};
`;

const InputWrapper = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.img`
  width: 500px;
  height: 600px;
`;

const TabsWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Greeting = () => {

  const [currentTab, setCurrentTab] = useState(LoginRegistrationConst.LOGIN);

  const switchTab = () => {
    switch(currentTab) {
      case LoginRegistrationConst.LOGIN:
        return <LoginForm />
      case LoginRegistrationConst.REGISTRATION:
        return <></>
    }
  }

  return (
    <Wrapper>
      <InputWrapper>
        <TabsWrapper>
          <Tab
            onClick={ () => {setCurrentTab(LoginRegistrationConst.LOGIN) }}
            isActive={ currentTab===LoginRegistrationConst.LOGIN }
            text='Sign in' />
          <Tab
            onClick={ () => {setCurrentTab( LoginRegistrationConst.REGISTRATION) } }
            isActive={ currentTab===LoginRegistrationConst.REGISTRATION }
            text='Sign up' />
        </TabsWrapper>
        { switchTab() }
      </InputWrapper>
      <Picture src={ LoginLandscapeImage }/>
    </Wrapper>
  );
};

