import React, { useState } from 'react';
import styled from 'styled-components';
import { PageBackground } from '../components/PageBackground';

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
  color: #FFFFFF;
`;

const Title = styled.h1`
  color: #FFD700;
  margin-bottom: 24px;
  font-size: 2.5rem;
  text-align: center;
`;

const SearchContainer = styled.div`
  margin-bottom: 40px;
  position: relative;
  max-width: 600px;
  margin: 0 auto 40px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px 16px 16px 50px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFD700;
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 215, 0, 0.7);
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #FFD700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FAQSection = styled.div`
  margin-top: 40px;
`;

const FAQItem = styled.div`
  margin-bottom: 16px;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
`;

const FAQHeader = styled.div<{ isOpen: boolean }>`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.isOpen ? 'rgba(255, 215, 0, 0.1)' : 'transparent'};

  &:hover {
    background: rgba(255, 215, 0, 0.1);
  }
`;

const Question = styled.h3`
  color: #FFD700;
  font-size: 1.1rem;
  margin: 0;
  flex: 1;
`;

const ToggleIcon = styled.span<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  position: relative;
  margin-left: 16px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: #FFD700;
    transition: all 0.3s ease;
  }

  &::before {
    width: 2px;
    height: 16px;
    left: 11px;
    top: 4px;
    transform: ${props => props.isOpen ? 'scaleY(0)' : 'scaleY(1)'};
  }

  &::after {
    width: 16px;
    height: 2px;
    left: 4px;
    top: 11px;
  }
`;

const Answer = styled.div<{ isOpen: boolean }>`
  padding: ${props => props.isOpen ? '0 20px 20px' : '0 20px'};
  color: #FFFFFF;
  line-height: 1.6;
  max-height: ${props => props.isOpen ? '500px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: all 0.3s ease;
  overflow: hidden;
`;

const ContactSection = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const ContactCard = styled.div`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 12px;
  padding: 32px;
  margin-top: 20px;
  text-align: left;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 16px;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #FFD700;
`;

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const faqs = [
    {
      question: "How do I start a chat?",
      answer: "To start a chat, simply click on the chat option you prefer (text, audio, or video) from the main screen. You'll be matched with another student based on your interests and preferences."
    },
    {
      question: "How can I update my profile?",
      answer: "Click on the menu icon in the top-left corner, then select 'Edit Profile'. Here you can update your photo, personal information, and interests."
    },
    {
      question: "Is my data secure?",
      answer: "Yes! We use industry-standard encryption and security measures to protect your data. You can review our privacy settings in the menu under 'Privacy'."
    },
    {
      question: "How do I report inappropriate behavior?",
      answer: "During a chat, you can click the 'Report' button to flag inappropriate behavior. Our moderation team will review the report within 24 hours."
    },
    {
      question: "Can I delete my account?",
      answer: "Yes, you can delete your account in the Settings page. Please note that this action is permanent and cannot be undone."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageBackground>
      <ContentWrapper>
        <Title>Help & Support</Title>

        <SearchContainer>
          <SearchIconWrapper>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SearchIconWrapper>
          <SearchInput
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>

        <FAQSection>
          {filteredFAQs.map((faq, index) => (
            <FAQItem key={index}>
              <FAQHeader 
                isOpen={openFAQs.includes(index)}
                onClick={() => toggleFAQ(index)}
              >
                <Question>{faq.question}</Question>
                <ToggleIcon isOpen={openFAQs.includes(index)} />
              </FAQHeader>
              <Answer isOpen={openFAQs.includes(index)}>
                {faq.answer}
              </Answer>
            </FAQItem>
          ))}
        </FAQSection>

        <ContactSection>
          <Title style={{ fontSize: '2rem' }}>Still Need Help?</Title>
          <ContactCard>
            <h3 style={{ color: '#FFD700', marginBottom: '16px' }}>Contact Our Support Team</h3>
            <p style={{ color: '#FFFFFF', opacity: 0.8 }}>
              We're here to help! Reach out to us through any of these channels:
            </p>
            <ContactInfo>
              <ContactMethod>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>support@gingr.chat</span>
              </ContactMethod>
              <ContactMethod>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Response Time: Within 24 hours</span>
              </ContactMethod>
            </ContactInfo>
          </ContactCard>
        </ContactSection>
      </ContentWrapper>
    </PageBackground>
  );
};

export default Support; 