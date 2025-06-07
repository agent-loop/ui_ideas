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

const JobCard = styled.div`
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

const ApplyButton = styled.a`
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

const Tag = styled.span`
  background: rgba(255, 215, 0, 0.1);
  color: ${colorPalette.yellow};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  display: inline-block;
`;

const TagContainer = styled.div`
  margin: 10px 0;
`;

const positions = [
  {
    title: "Marketing & PR Intern",
    description: "Join our marketing team to help spread the word about Gingr across college campuses. Create engaging content, manage social media, and develop PR strategies.",
    type: "Remote / Hybrid",
    duration: "3-6 months",
    skills: ["Social Media Marketing", "Content Creation", "Public Relations", "Communication"]
  },
  {
    title: "Web Developer Intern",
    description: "Work on our next-gen web platform using React, Next.js, and modern web technologies. Help build features that connect thousands of students.",
    type: "Remote",
    duration: "6 months",
    skills: ["React", "Next.js", "TypeScript", "UI/UX"]
  },
  {
    title: "App Developer Intern",
    description: "Develop and maintain our mobile applications. Work with latest mobile technologies and help shape the future of college networking.",
    type: "Remote",
    duration: "6 months",
    skills: ["React Native", "Android", "iOS", "Mobile UI"]
  },
  {
    title: "College Outreach Coordinator",
    description: "Be our voice on campus! Connect with student organizations, plan events, and help grow the Gingr community at your college.",
    type: "Part-time",
    duration: "Ongoing",
    skills: ["Event Planning", "Networking", "Leadership", "Communication"]
  },
  {
    title: "Campus Ambassador",
    description: "Represent Gingr at your campus. Organize meetups, promote the platform, and help us understand student needs better.",
    type: "Part-time",
    duration: "Semester-based",
    skills: ["Leadership", "Event Management", "Marketing", "Community Building"]
  }
];

export default function Careers() {
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
            Join the Gingr Team
          </Typography>

          <Typography
            color={colorPalette.white}
            fontSize={20}
            fontWeight={400}
            fontType={FontType.BODY}
            style={{ opacity: 0.9, marginBottom: '40px' }}
          >
            Help us revolutionize college networking and build meaningful connections
          </Typography>

          <Section>
            <Typography
              color={colorPalette.yellow}
              fontSize={28}
              fontWeight={600}
              fontType={FontType.HEADING}
              style={{ marginBottom: '20px' }}
            >
              Internship Opportunities
            </Typography>

            {positions.map((position, index) => (
              <JobCard key={index}>
                <Typography
                  color={colorPalette.yellow}
                  fontSize={24}
                  fontWeight={600}
                  fontType={FontType.HEADING}
                  style={{ marginBottom: '10px' }}
                >
                  {position.title}
                </Typography>

                <Typography
                  color={colorPalette.white}
                  fontSize={16}
                  fontWeight={400}
                  fontType={FontType.BODY}
                  style={{ opacity: 0.9, marginBottom: '10px' }}
                >
                  {position.description}
                </Typography>

                <Typography
                  color={colorPalette.white}
                  fontSize={14}
                  fontWeight={500}
                  fontType={FontType.BODY}
                  style={{ opacity: 0.7 }}
                >
                  {position.type} • {position.duration}
                </Typography>

                <TagContainer>
                  {position.skills.map((skill, idx) => (
                    <Tag key={idx}>{skill}</Tag>
                  ))}
                </TagContainer>

                <ApplyButton href={`mailto:careers@gingr.chat?subject=Application for ${position.title}`}>
                  Apply Now
                </ApplyButton>
              </JobCard>
            ))}
          </Section>
        </PageContainer>
      </ContentWrapper>
    </PageBackground>
  );
} 