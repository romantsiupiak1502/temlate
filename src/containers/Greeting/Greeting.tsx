import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LoginLandscapeImage } from '../../assets';
import { TabsContainer, Tab, H4} from '../../components';
import { LoginRegistrationConst } from '../../consts';
import { device, styled } from '../../styles';

import { RegistrationForm } from './RegistrationForm';
import { LoginForm } from './LoginForm';

const Wrapper = styled.div`
  width: 1000px;
  height: 600px;
  display: flex;
  box-shadow: 5px 5px 5px gray;
  border: 1px solid ${({theme})=>theme.colors.black};
  background-color: ${({theme})=> theme.colors.white};

  @media ${device.laptop} {
    max-width: 700px;
    margin: 20px;
  }
`;

const InputWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media ${device.tablet} {
    width: 100%;
  }
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
  
  @media ${device.laptop} {
    width: 350px;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const Greeting = () => {
  const { t } = useTranslation();

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
            text={t("SIGN_IN")} />
          <Tab
            onClick={ () => setActiveTab( LoginRegistrationConst.REGISTRATION) }
            isActive={ activeTab === LoginRegistrationConst.REGISTRATION }
            text={t("SIGN_UP")} />
        </TabsContainer>
        { activeForm }
        <AboutUsLink to='/aboutus'>
          <H4>{t("ABOUT_US")}</H4>
        </AboutUsLink>
      </InputWrapper>
      <Picture src={ LoginLandscapeImage }/>
    </Wrapper>
  );
};

