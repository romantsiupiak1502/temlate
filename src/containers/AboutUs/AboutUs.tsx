import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { device, styled } from '../../styles';
import { H1, H3, IconTextButton, LeftArrowIcon } from '../../components';
import { AboutUsTeamImage } from '../../assets';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.laptopL} {
    width: 1000px;
  }
  @media ${device.laptop} {
    margin: 20px;
  }
`;

const TitleBackButtonContainer = styled.div`
  display: flex;
`;

const TitleWrapper = styled(H1)`
  font-size: 300%;
  width: 100%;
  text-align: center;

  @media ${device.laptop} {
    font-size: 200%;
  }
`;

const ContentWrapper = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${device.laptop} {
    justify-content: center;
    align-items: center;
  }
  
  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
  }
`;

const BackButton = styled(Link)`
  color: ${ ({ theme }) => theme.colors.primary };
  text-decoration: none;
`;

const TeamPictureStyled = styled.img`
  width: 563px;
  height: 375px;

  @media ${device.laptop} {
    width: 394px;
    height: 263px;
  }
`;

const AboutUsWrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${ ({ theme }) => theme.colors.primary };
  padding: 20px;
  color: ${ ({ theme }) => theme.colors.white };
`;

export const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <TitleBackButtonContainer>
        <BackButton to='/'>
          <IconTextButton
            text={ t('BACK_BUTTON_ABOUT_US') }
            icon={ <LeftArrowIcon size='30px'/> }
            onClick={ () => {} }
          />
        </BackButton>
        <TitleWrapper>{ t("ABOUT_US_TITLE") }</TitleWrapper>
      </TitleBackButtonContainer>
      <ContentWrapper>
        <AboutUsWrapper>
          <H1>About us</H1>
          <H3>{ t("TEXT_ABOUT_US") }</H3>
        </AboutUsWrapper>
        <TeamPictureStyled src={ AboutUsTeamImage }/>
      </ContentWrapper>
    </Wrapper>
  );
};