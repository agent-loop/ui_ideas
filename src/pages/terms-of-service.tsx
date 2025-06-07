import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { colorPalette } from '../styles/colors';

const PageContainer = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  color: ${colorPalette.white};
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Title = styled(Typography)`
  color: #FFD700;
  margin-bottom: 24px !important;
`;

const SubTitle = styled(Typography)`
  color: #FFD700;
  margin: 20px 0 12px !important;
`;

const TermsOfService = () => {
  return (
    <PageContainer>
      <Title variant="h3" component="h1">Terms of Service</Title>
      
      <Section>
        <Typography variant="body1" paragraph>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
        
        <Typography variant="body1" paragraph>
          Welcome to Gingr.chat. By accessing or using our platform, you agree to be bound by these Terms of Service.
        </Typography>
      </Section>

      <Section>
        <SubTitle variant="h5">1. Acceptance of Terms</SubTitle>
        <Typography variant="body1" paragraph>
          By accessing and using Gingr.chat, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our service.
        </Typography>
      </Section>

      <Section>
        <SubTitle variant="h5">2. User Responsibilities</SubTitle>
        <Typography variant="body1" paragraph>
          • You must be at least 13 years old to use this service
          • You are responsible for maintaining the confidentiality of your account
          • You agree not to share inappropriate or illegal content
          • You will not engage in any activity that disrupts the service
          • You will not impersonate others or misrepresent your identity
        </Typography>
      </Section>

      <Section>
        <SubTitle variant="h5">3. Content Guidelines</SubTitle>
        <Typography variant="body1" paragraph>
          Users must not post content that is:
          • Illegal or promotes illegal activities
          • Harassing, abusive, or threatening
          • Spam or unauthorized commercial content
          • Violating intellectual property rights
          • Containing malware or malicious code
        </Typography>
      </Section>

      <Section>
        <SubTitle variant="h5">4. Service Modifications</SubTitle>
        <Typography variant="body1" paragraph>
          We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice. We shall not be liable for any modification, suspension, or discontinuance of the service.
        </Typography>
      </Section>

      <Section>
        <SubTitle variant="h5">5. Contact Information</SubTitle>
        <Typography variant="body1" paragraph>
          For any questions about these Terms of Service, please contact us at:
          <br />
          Email: support@gingr.chat
        </Typography>
      </Section>
    </PageContainer>
  );
};

export default TermsOfService; 