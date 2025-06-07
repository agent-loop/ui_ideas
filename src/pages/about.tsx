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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 24px 0;
`;

const FeatureCard = styled.div`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 12px;
  padding: 24px;
  height: 100%;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    background: rgba(255, 215, 0, 0.08);
    border-color: rgba(255, 215, 0, 0.3);
  }
`;

const FeatureTitle = styled.h3`
  color: #FFD700;
  margin-bottom: 12px;
  font-size: 1.25rem;
  font-weight: 500;
`;

const FeatureText = styled.p`
  color: #FFFFFF;
  opacity: 0.9;
  line-height: 1.5;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  color: #FFFFFF;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;

  &:before {
    content: "•";
    color: #FFD700;
    position: absolute;
    left: 0;
  }
`;

const AboutUs = () => {
  return (
    <PageBackground>
      <ContentWrapper>
        <PageContainer>
          <Title>About Gingr.chat</Title>
          
          <Section>
            <Text>
              Gingr.chat is a revolutionary platform designed to connect students worldwide through seamless communication. Our mission is to create a safe, engaging, and productive environment where students can collaborate, learn, and grow together.
            </Text>
          </Section>

          <Section>
            <SubTitle>Our Mission</SubTitle>
            <Text>
              To empower students by providing a modern, intuitive platform that breaks down communication barriers and fosters meaningful connections in the academic community.
            </Text>
          </Section>

          <Section>
            <SubTitle>Key Features</SubTitle>
            <FeaturesGrid>
              <FeatureCard>
                <FeatureTitle>Text Chat</FeatureTitle>
                <FeatureText>
                  Real-time messaging with rich text formatting, file sharing, and emoji support.
                </FeatureText>
              </FeatureCard>
              <FeatureCard>
                <FeatureTitle>Voice Chat</FeatureTitle>
                <FeatureText>
                  Crystal-clear audio calls with noise cancellation and echo reduction.
                </FeatureText>
              </FeatureCard>
              <FeatureCard>
                <FeatureTitle>Video Chat</FeatureTitle>
                <FeatureText>
                  HD video calls with screen sharing and virtual background options.
                </FeatureText>
              </FeatureCard>
            </FeaturesGrid>
          </Section>

          <Section>
            <SubTitle>Our Values</SubTitle>
            <List>
              <ListItem>Privacy & Security: Your data protection is our top priority</ListItem>
              <ListItem>Innovation: Constantly evolving to meet student needs</ListItem>
              <ListItem>Inclusivity: Creating a platform accessible to all</ListItem>
              <ListItem>Community: Fostering meaningful connections</ListItem>
              <ListItem>Excellence: Striving for the best user experience</ListItem>
            </List>
          </Section>

          <Section>
            <SubTitle>Contact Us</SubTitle>
            <Text>
              Have questions or suggestions? We'd love to hear from you!
              <br />
              Email: support@gingr.chat
            </Text>
          </Section>
        </PageContainer>
      </ContentWrapper>
    </PageBackground>
  );
};

export default AboutUs; 