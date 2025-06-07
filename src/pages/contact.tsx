import React from 'react';
import styled from 'styled-components';
import { PageBackground, ContentWrapper } from '../components/PageBackground';

const PageContainer = styled.div`
  padding: 40px;
  max-width: 800px;
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

const ContactCard = styled.div`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 215, 0, 0.08);
    border-color: rgba(255, 215, 0, 0.3);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 1rem;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    border-color: rgba(255, 215, 0, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 1rem;
  margin-bottom: 20px;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    border-color: rgba(255, 215, 0, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Button = styled.button`
  background-color: #FFD700;
  color: #000000;
  padding: 12px 32px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #E6C200;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

const ContactMethod = styled.div`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background: rgba(255, 215, 0, 0.08);
    border-color: rgba(255, 215, 0, 0.3);
  }
`;

const SubTitle = styled.h2`
  color: #FFD700;
  margin-bottom: 16px;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Text = styled.p`
  color: #FFFFFF;
  line-height: 1.6;
  margin-bottom: 8px;
  opacity: 0.9;
`;

const SmallText = styled.p`
  color: #FFFFFF;
  opacity: 0.7;
  font-size: 0.9rem;
  margin-top: 8px;
`;

const ContactUs = () => {
  return (
    <PageBackground>
      <ContentWrapper>
        <PageContainer>
          <Title>Contact Us</Title>
          
          <Section>
            <Text>
              We're here to help! Choose your preferred way to reach us below.
            </Text>
          </Section>

          <Grid>
            <div>
              <ContactCard>
                <SubTitle>Quick Contact</SubTitle>
                
                <ContactMethod>
                  <SubTitle as="h3" style={{ fontSize: '1.25rem' }}>Email Support</SubTitle>
                  <Text>support@gingr.chat</Text>
                  <SmallText>Response time: Within 24 hours</SmallText>
                </ContactMethod>

                <ContactMethod>
                  <SubTitle as="h3" style={{ fontSize: '1.25rem' }}>Technical Support</SubTitle>
                  <Text>tech@gingr.chat</Text>
                  <SmallText>For technical issues and bug reports</SmallText>
                </ContactMethod>
              </ContactCard>
            </div>

            <div>
              <ContactCard>
                <SubTitle>Send us a Message</SubTitle>
                
                <form>
                  <Input
                    type="text"
                    placeholder="Name"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                  />
                  <TextArea
                    placeholder="Message"
                    rows={4}
                  />
                  <Button type="submit">
                    Send Message
                  </Button>
                </form>
              </ContactCard>
            </div>
          </Grid>

          <Section>
            <SmallText style={{ textAlign: 'center' }}>
              Our support team is available Monday through Friday, 9:00 AM to 6:00 PM IST.
              <br />
              For urgent matters outside these hours, please email support@gingr.chat
            </SmallText>
          </Section>
        </PageContainer>
      </ContentWrapper>
    </PageBackground>
  );
};

export default ContactUs; 