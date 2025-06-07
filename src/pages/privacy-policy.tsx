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

const PrivacyPolicy = () => {
  return (
    <PageContainer>
      <Title variant="h3" component="h1">Privacy Policy</Title>
      
      <Section>
        <Typography variant="body1" paragraph>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
        
        <Typography variant="body1" paragraph>
          At Gingr.chat, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
        </Typography>
      </Section>

      <Section>
        <SubTitle variant="h5">Information We Collect</SubTitle>
        <Typography variant="body1" paragraph>
          • Personal Information: Name, email address, and profile information
          • Usage Data: Chat logs, interaction patterns, and platform preferences
          • Technical Data: IP address, browser type, and device information
        </Typography>
      </Section>

      <Section>
        <SubTitle variant="h5">How We Use Your Information</SubTitle>
        <Typography variant="body1" paragraph>
          • To provide and maintain our service
          • To notify you about changes to our service
          • To provide customer support
          • To gather analysis or valuable information to improve our service
          • To monitor the usage of our service
          • To detect, prevent and address technical issues
        </Typography>
      </Section>

      <Section>
        <SubTitle variant="h5">Data Security</SubTitle>
        <Typography variant="body1" paragraph>
          We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your information. However, no method of transmission over the Internet is 100% secure.
        </Typography>
      </Section>

      <Section>
        <SubTitle variant="h5">Contact Us</SubTitle>
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          Email: support@gingr.chat
        </Typography>
      </Section>
    </PageContainer>
  );
};

export default PrivacyPolicy; 