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

const TermsOfService = () => {
  return (
    <PageBackground>
      <ContentWrapper>
        <PageContainer>
          <Title>Terms of Service</Title>
          
          <Section>
            <Text>
              Last updated: {new Date().toLocaleDateString()}
            </Text>
            
            <Text>
              Welcome to Gingr.chat. By accessing or using our platform, you agree to be bound by these Terms of Service.
            </Text>
          </Section>

          <Section>
            <SubTitle>1. Acceptance of Terms</SubTitle>
            <Text>
              By accessing and using Gingr.chat, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our service.
            </Text>
          </Section>

          <Section>
            <SubTitle>2. User Responsibilities</SubTitle>
            <Text>
              • You must be at least 13 years old to use this service
              <br />
              • You are responsible for maintaining the confidentiality of your account
              <br />
              • You agree not to share inappropriate or illegal content
              <br />
              • You will not engage in any activity that disrupts the service
              <br />
              • You will not impersonate others or misrepresent your identity
            </Text>
          </Section>

          <Section>
            <SubTitle>3. Content Guidelines</SubTitle>
            <Text>
              Users must not post content that is:
              <br />
              • Illegal or promotes illegal activities
              <br />
              • Harassing, abusive, or threatening
              <br />
              • Spam or unauthorized commercial content
              <br />
              • Violating intellectual property rights
              <br />
              • Containing malware or malicious code
            </Text>
          </Section>

          <Section>
            <SubTitle>4. Service Modifications</SubTitle>
            <Text>
              We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice. We shall not be liable for any modification, suspension, or discontinuance of the service.
            </Text>
          </Section>

          <Section>
            <SubTitle>5. Contact Information</SubTitle>
            <Text>
              For any questions about these Terms of Service, please contact us at:
              <br />
              Email: support@gingr.chat
            </Text>
          </Section>
        </PageContainer>
      </ContentWrapper>
    </PageBackground>
  );
};

export default TermsOfService; 