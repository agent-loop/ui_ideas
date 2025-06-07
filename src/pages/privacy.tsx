import React from 'react';
import styled from 'styled-components';
import { PageBackground, ContentWrapper } from '../components/PageBackground';

const PageContainer = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  color: #FFFFFF;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.4);
`;

const Section = styled.div`
  margin-bottom: 40px;
  padding: 24px;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 215, 0, 0.08);
    border-color: rgba(255, 215, 0, 0.3);
  }
`;

const Title = styled.h1`
  color: #FFD700;
  margin-bottom: 24px;
  font-size: 2.5rem;
  font-weight: 600;
`;

const SubTitle = styled.h2`
  color: #FFD700;
  margin: 20px 0 12px;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Text = styled.p`
  color: #FFFFFF;
  line-height: 1.6;
  margin-bottom: 16px;
  font-size: 1rem;
`;

const PrivacyPolicy = () => {
  return (
    <PageBackground>
      <ContentWrapper>
        <PageContainer>
          <Title>Privacy Policy</Title>
          
          <Section>
            <Text>
              Last updated: {new Date().toLocaleDateString()}
            </Text>
            
            <Text>
              At Gingr.chat, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </Text>
          </Section>

          <Section>
            <SubTitle>Information We Collect</SubTitle>
            <Text>
              • Personal Information: Name, email address, and profile information
              <br />
              • Usage Data: Chat logs, interaction patterns, and platform preferences
              <br />
              • Technical Data: IP address, browser type, and device information
            </Text>
          </Section>

          <Section>
            <SubTitle>How We Use Your Information</SubTitle>
            <Text>
              • To provide and maintain our service
              <br />
              • To notify you about changes to our service
              <br />
              • To provide customer support
              <br />
              • To gather analysis or valuable information to improve our service
              <br />
              • To monitor the usage of our service
              <br />
              • To detect, prevent and address technical issues
            </Text>
          </Section>

          <Section>
            <SubTitle>Data Security</SubTitle>
            <Text>
              We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your information. However, no method of transmission over the Internet is 100% secure.
            </Text>
          </Section>

          <Section>
            <SubTitle>Contact Us</SubTitle>
            <Text>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: support@gingr.chat
            </Text>
          </Section>
        </PageContainer>
      </ContentWrapper>
    </PageBackground>
  );
};

export default PrivacyPolicy; 