import React from 'react';
import { Link } from 'react-router-dom';

import { LoginLandscapeImage } from '../../assets';
import { TabsContainer, Tab, H4} from '../../components';
import { LoginRegistrationConst } from '../../consts';
import { styled } from '../../styles';

import { RegistrationForm } from './RegistrationForm';
import { LoginForm } from './LoginForm';

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

const AboutUsLink = styled(Link)`
  font-size: 120%;
  margin-bottom: 20px;
  color: ${ ({theme}) => theme.colors.primary};
  text-decoration: none;
`;

const Picture = styled.img`
  width: 500px;
  height: 600px;
`;

export const Greeting = () => {

  const [activeTab, setActiveTab] = React.useState(LoginRegistrationConst.LOGIN);

  const activeForm = React.useMemo(() => {
    switch (activeTab) {
      case LoginRegistrationConst.LOGIN:
        return <LoginForm />
      case LoginRegistrationConst.REGISTRATION:
        return <RegistrationForm />
    }
  }, [activeTab]);

  return (
    <Wrapper>
      <InputWrapper>
        <TabsContainer>
          <Tab
            onClick={ () => setActiveTab(LoginRegistrationConst.LOGIN) }
            isActive={ activeTab === LoginRegistrationConst.LOGIN }
            text='Sign in' />
          <Tab
            onClick={ () => setActiveTab( LoginRegistrationConst.REGISTRATION) }
            isActive={ activeTab === LoginRegistrationConst.REGISTRATION }
            text='Sign up' />
        </TabsContainer>
        { activeForm }
        <AboutUsLink to='/aboutus'>
          <H4>About us</H4>
        </AboutUsLink>
      </InputWrapper>
      <Picture src={ LoginLandscapeImage }/>
    </Wrapper>
  );
};

