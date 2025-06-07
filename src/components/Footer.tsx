import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { colorPalette } from '../styles/colors';
import { LanguageSelector } from './LanguageSelector';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  padding: 40px 0;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const LinksSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LinkRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 12px;
  }
`;

const StyledLink = styled(Link)`
  color: ${colorPalette.white};
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
  white-space: nowrap;
  opacity: 0.8;

  &:hover {
    color: ${colorPalette.yellow};
    opacity: 1;
  }
`;

const Divider = styled.span`
  color: rgba(255, 255, 255, 0.3);
  margin: 0 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-top: 32px;
  font-size: 14px;
  opacity: 0.6;
`;

const PlayStoreButton = styled.a`
  display: block;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    filter: brightness(1.1);
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <TopSection>
          <LinksSection>
            <LinkRow>
              <StyledLink href="/privacy-policy">Privacy Policy</StyledLink>
              <Divider>/</Divider>
              <StyledLink href="/terms-of-service">Terms of Service</StyledLink>
              <Divider>/</Divider>
              <StyledLink href="/about-us">About Us</StyledLink>
              <Divider>/</Divider>
              <StyledLink href="/contact-us">Contact Us</StyledLink>
            </LinkRow>
            <LinkRow>
              <StyledLink href="/blogs">Blogs</StyledLink>
              <Divider>/</Divider>
              <StyledLink href="/careers">Careers</StyledLink>
              <Divider>/</Divider>
              <StyledLink href="/advertise">Advertise</StyledLink>
            </LinkRow>
          </LinksSection>
          <RightSection>
            <LanguageSelector />
            <PlayStoreButton 
              href="https://play.google.com/store/apps/details?id=com.gingr.chat" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image 
                src="/play_store-removebg-preview.png" 
                alt="Get it on Play Store"
                width={169}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </PlayStoreButton>
          </RightSection>
        </TopSection>
        <Copyright>
          © {new Date().getFullYear()} Gingr.chat. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}; 