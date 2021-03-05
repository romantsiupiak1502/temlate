import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '../../styles';
import { H1, H3, IconTextButton, LeftArrowIcon } from '../../components';
import { AboutUsTeamImage } from '../../assets';

const Wrapper = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled(H1)`
  font-size: 300%;
  text-align: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const BackButton = styled(Link)`
  color: ${ ({theme}) => theme.colors.primary };
  text-decoration: none;
`;

const AboutUsWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${ ({theme}) => theme.colors.primary };
  opacity: 0.65;
  padding: 20px;
  color: ${ ({ theme }) => theme.colors.white };
`;

export const AboutUs: React.FC = () => {
  return (
    <Wrapper>
      <BackButton to='/'>
        <IconTextButton text='Back' icon={<LeftArrowIcon size='30px'/>} onClick={ () => {} } />
      </BackButton>
      <TitleWrapper>It's time to tell you about us</TitleWrapper>
      <ContentWrapper>
        <AboutUsWrapper>
          <H1>About us</H1>
          <H3>Hello, we are a group of young developers who are happy to welcome you to our social network.
            If you have not yet registered, do not hesitate and try our product soon, and if you have
            tried, enjoy it.</H3>
        </AboutUsWrapper>
        <img src={AboutUsTeamImage} />
      </ContentWrapper>
    </Wrapper>
  );
};