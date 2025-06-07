import React from 'react';
import styled from 'styled-components';
import { Typography } from '@cred/neopop-web/lib/components';
import { colorPalette } from '../styles/colors';
import { FontType } from '../types/FontType';
import { PageBackground, ContentWrapper } from '../components/PageBackground';

const PageContainer = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  color: ${colorPalette.white};
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
    transform: translateY(-5px);
  }
`;

const AdTypeCard = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${colorPalette.yellow};
    transform: translateY(-3px);
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  background: ${colorPalette.yellow};
  color: #000;
  padding: 10px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  margin-top: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
  }
`;

const Feature = styled.li`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '•';
    color: ${colorPalette.yellow};
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0;
`;

const adTypes = [
  {
    title: "Banner Advertisements",
    description: "Strategic banner placements across our platform to reach your target audience effectively.",
    features: [
      "Premium placement options",
      "Multiple size formats available",
      "Targeted display based on user interests",
      "Real-time performance analytics",
      "A/B testing support"
    ]
  },
  {
    title: "Video Advertisements",
    description: "Engage users with immersive video content seamlessly integrated into their experience.",
    features: [
      "Pre-roll and mid-roll options",
      "Skippable and non-skippable formats",
      "Custom duration options",
      "Interactive video capabilities",
      "View-through rate tracking"
    ]
  }
];

export default function Advertise() {
  return (
    <PageBackground>
      <ContentWrapper>
        <PageContainer>
          <Typography
            color={colorPalette.yellow}
            fontSize={48}
            fontWeight={700}
            fontType={FontType.HEADING}
            style={{ marginBottom: '20px' }}
          >
            Advertise on Gingr
          </Typography>

          <Typography
            color={colorPalette.white}
            fontSize={20}
            fontWeight={400}
            fontType={FontType.BODY}
            style={{ opacity: 0.9, marginBottom: '40px' }}
          >
            Connect with the college demographic through targeted advertising opportunities
          </Typography>

          <Section>
            <Typography
              color={colorPalette.yellow}
              fontSize={28}
              fontWeight={600}
              fontType={FontType.HEADING}
              style={{ marginBottom: '20px' }}
            >
              Advertising Options
            </Typography>

            {adTypes.map((adType, index) => (
              <AdTypeCard key={index}>
                <Typography
                  color={colorPalette.yellow}
                  fontSize={24}
                  fontWeight={600}
                  fontType={FontType.HEADING}
                  style={{ marginBottom: '10px' }}
                >
                  {adType.title}
                </Typography>

                <Typography
                  color={colorPalette.white}
                  fontSize={16}
                  fontWeight={400}
                  fontType={FontType.BODY}
                  style={{ opacity: 0.9 }}
                >
                  {adType.description}
                </Typography>

                <FeatureList>
                  {adType.features.map((feature, idx) => (
                    <Feature key={idx}>
                      <Typography
                        color={colorPalette.white}
                        fontSize={16}
                        fontWeight={400}
                        fontType={FontType.BODY}
                        style={{ opacity: 0.8 }}
                      >
                        {feature}
                      </Typography>
                    </Feature>
                  ))}
                </FeatureList>

                <ContactButton href="mailto:ads@gingr.chat?subject=Advertising Inquiry">
                  Get in Touch
                </ContactButton>
              </AdTypeCard>
            ))}
          </Section>

          <Section>
            <Typography
              color={colorPalette.yellow}
              fontSize={28}
              fontWeight={600}
              fontType={FontType.HEADING}
              style={{ marginBottom: '20px' }}
            >
              Why Advertise with Us?
            </Typography>

            <Typography
              color={colorPalette.white}
              fontSize={16}
              fontWeight={400}
              fontType={FontType.BODY}
              style={{ opacity: 0.9, marginBottom: '20px', lineHeight: '1.6' }}
            >
              Reach a highly engaged audience of college students across 50+ universities. Our platform offers targeted advertising solutions that help you connect with the next generation of consumers in an authentic and meaningful way.
            </Typography>

            <FeatureList>
              <Feature>
                <Typography
                  color={colorPalette.white}
                  fontSize={16}
                  fontWeight={400}
                  fontType={FontType.BODY}
                  style={{ opacity: 0.8 }}
                >
                  30K+ Active Users
                </Typography>
              </Feature>
              <Feature>
                <Typography
                  color={colorPalette.white}
                  fontSize={16}
                  fontWeight={400}
                  fontType={FontType.BODY}
                  style={{ opacity: 0.8 }}
                >
                  50+ University Communities
                </Typography>
              </Feature>
              <Feature>
                <Typography
                  color={colorPalette.white}
                  fontSize={16}
                  fontWeight={400}
                  fontType={FontType.BODY}
                  style={{ opacity: 0.8 }}
                >
                  High Engagement Rates
                </Typography>
              </Feature>
              <Feature>
                <Typography
                  color={colorPalette.white}
                  fontSize={16}
                  fontWeight={400}
                  fontType={FontType.BODY}
                  style={{ opacity: 0.8 }}
                >
                  Targeted Demographic Reach
                </Typography>
              </Feature>
            </FeatureList>
          </Section>
        </PageContainer>
      </ContentWrapper>
    </PageBackground>
  );
} 