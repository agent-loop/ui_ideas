import { Button, Typography } from '@cred/neopop-web/lib/components';
import { colorPalette } from '../styles/colors';
import styled, { keyframes, css } from 'styled-components';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FontType } from '../types/FontType';
import { Button as CustomButton } from '../components/Button';

const glow = keyframes`
  0% { box-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 15px #FFA500; }
  50% { box-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFA500; }
  100% { box-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 15px #FFA500; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const buttonGlow = keyframes`
  0% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.2), 0 0 30px rgba(255, 165, 0, 0.1); }
  50% { box-shadow: 0 0 15px rgba(255, 215, 0, 0.4), 0 0 25px rgba(255, 215, 0, 0.3), 0 0 35px rgba(255, 165, 0, 0.2); }
  100% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.2), 0 0 30px rgba(255, 165, 0, 0.1); }
`;

const MainContainer = styled.div`
  background: linear-gradient(135deg, #000000, #1a1a1a);
  min-height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #FFD700, #FFA500);
  }
`;

const DoodleOverlay = styled.div`
  position: absolute;
  width: 25vw;
  height: 100%;
  top: 0;
  z-index: 1;
  opacity: 0.15;
  background-image: url('/doodle.png');
  background-size: contain;
  background-repeat: repeat;
  pointer-events: none;

  &.left {
    left: 0;
    transform: scaleX(-1);
  }

  &.right {
    right: 0;
  }
`;

const HeroBackground = styled.div<{ opacity: number }>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 180vw;
  height: 90vh;
  z-index: 0;
  opacity: ${props => props.opacity};
  transition: opacity 0.3s ease-out;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;

  .doodle-left {
    position: absolute;
    top: 50%;
    left: 0;
    width: calc(50% - 40vw);
    height: 110vh;
    transform: translateY(-50%);
    background-image: url('/doodle.png');
    background-size: 300px;
    background-repeat: repeat;
    opacity: 0.35;
    z-index: 1;
  }

  .doodle-right {
    position: absolute;
    top: 50%;
    right: 0;
    width: calc(50% - 40vw);
    height: 110vh;
    transform: translateY(-50%);
    background-image: url('/doodle.png');
    background-size: 300px;
    background-repeat: repeat;
    opacity: 0.35;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 110vh;
    transform: translateY(-50%);
    background: radial-gradient(
      circle at center,
      transparent 30%,
      rgba(0, 0, 0, 0.4) 70%
    );
    z-index: 2;
  }

  .image-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    height: 110vh;
    z-index: 3;
    box-shadow: 0 0 100px 50px rgba(0, 0, 0, 0.8);
  }
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  padding: 80px 0 0 0;
  position: relative;
  min-height: 150vh;
`;

const DoodlePattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/doodle.png');
  background-size: 300px;
  background-repeat: repeat;
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  position: fixed;
  z-index: 10;
  width: 100%;
  left: 0;
  top: 0;
  height: 80px;
  background: rgba(0, 0, 0, 0.95);
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
`;

const NavLogo = styled.div`
  width: 200px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  overflow: hidden;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 20px;
  height: 100%;
`;

const NavLink = styled.a`
  color: #FFD700;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.2);

  &:hover {
    background: rgba(255, 215, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const LoginButton = styled.button`
  background: #FFD700;
  color: #000000;
  border: none;
  padding: 8px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);

  &:hover {
    transform: translateY(-2px);
    background: #FFE44D;
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
  }
`;

const HamburgerIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 215, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 215, 0, 0.3);
  margin-right: 0;

  &:hover {
    background: rgba(255, 215, 0, 0.2);
    animation: ${glow} 2s infinite;
  }

  span {
    width: 24px;
    height: 2px;
    background: #FFD700;
    transition: all 0.3s ease;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1500;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${props => props.isOpen && css`
    opacity: 1;
    pointer-events: auto;
  `}
`;

const ProfileSidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a1a, #000000);
  z-index: 2000;
  padding: 20px;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  border-left: 2px solid rgba(255, 215, 0, 0.3);

  ${props => props.isOpen && css`
    transform: translateX(0);
  `}
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  padding-top: 20px;
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #FFD700;
  overflow: hidden;
  margin-bottom: 15px;
  position: relative;
`;

const ProfileOption = styled.div`
  padding: 15px;
  border-radius: 10px;
  background: rgba(255, 215, 0, 0.1);
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 215, 0, 0.2);
    transform: translateX(5px);
  }
`;

const HeroSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  z-index: 2;
  padding: 0 20px;
`;

const MainContent = styled.div`
  text-align: center;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 15vh;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 0, 0, 0.2)
  );

  h1 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 35px;
  }
`;

const FeatureSection = styled.div`
  padding: 40px 20px;
  position: relative;
  z-index: 2;
  width: 100%;
  background: rgba(0, 0, 0, 0.85);
  min-height: 100vh;
  overflow: hidden;
`;

const FeatureRow = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px 0;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  gap: 60px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin: 60px 0;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const FeatureImage = styled.div`
  flex: 1;
  position: relative;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(255, 215, 0, 0.2);
  transition: all 0.5s ease;
  transform-style: preserve-3d;
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 215, 0, 0.1), transparent);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px) rotateY(5deg);
    border-color: ${colorPalette.yellow};
    box-shadow: 
      0 20px 40px rgba(255, 215, 0, 0.1),
      0 0 20px rgba(255, 215, 0, 0.05);

    &::before {
      opacity: 1;
    }

    img {
      transform: scale(1.1);
    }
  }

  img {
    transition: transform 0.5s ease;
  }
`;

const FeatureDescription = styled(Typography)`
  position: relative;
  padding: 20px;
  border-left: 3px solid ${colorPalette.yellow};
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0 10px 10px 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 10px;
`;

const SocialIcon = styled.a`
  color: ${colorPalette.white};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 215, 0, 0.2);
  transition: all 0.3s ease;
  opacity: 0.7;

  &:hover {
    color: ${colorPalette.yellow};
    opacity: 1;
    transform: translateY(-3px);
    border-color: ${colorPalette.yellow};
  }

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`;

const IconSvg = styled.svg`
  width: 16px;
  height: 16px;
  fill: currentColor;
`;

const StatsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 40px auto;
  max-width: 1200px;
  padding: 20px;
`;

const StatItem = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 215, 0, 0.2);
  border-radius: 20px;
  padding: 30px;
  width: 300px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    border-color: ${colorPalette.yellow};
    box-shadow: 0 20px 40px rgba(255, 215, 0, 0.1);

    &::before {
      opacity: 0.1;
    }

    img {
      transform: scale(1.1);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, ${colorPalette.yellow}, transparent);
    opacity: 0.05;
    transition: opacity 0.3s ease;
  }
`;

const StatImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 20px;
  position: relative;
  border-radius: 75px;
  overflow: hidden;
  border: 2px solid rgba(255, 215, 0, 0.3);
`;

const StatImage = styled(Image)`
  transition: transform 0.3s ease;
`;

const StatContent = styled.div`
  position: relative;
  z-index: 1;
`;

const Footer = styled.footer`
  position: relative;
  padding: 40px 0;
  background: rgba(0, 0, 0, 0.9);
  overflow: hidden;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 0 20px;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  a {
    color: ${colorPalette.white};
    text-decoration: none;
    font-size: 14px;
    opacity: 0.8;
    transition: all 0.2s ease;

    &:hover {
      color: ${colorPalette.yellow};
      opacity: 1;
    }
  }

  span {
    color: rgba(255, 215, 0, 0.3);
  }
`;

const PlayStoreButton = styled.a`
  display: block;
  transition: all 0.3s ease;
  margin-bottom: 10px;

  img {
    height: 50px;
    width: auto;
  }

  &:hover {
    transform: translateY(-3px);
    filter: brightness(1.1);
  }
`;

const LogoContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  margin: 0 auto 30px;
  animation: ${float} 6s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;

  > div {
    margin-bottom: 30px;
  }
`;

const SubheadingButton = styled.div`
  background: #FFFFFF;
  border: 2px solid #FFD700;
  padding: 12px 30px;
  font-size: 18px;
  border-radius: 4px;
  color: #000000;
  letter-spacing: 0.5px;
  margin: 20px auto 40px;
  display: inline-block;
  pointer-events: none;
  text-shadow: none;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SubheadingGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 15px;
  margin-bottom: 40px;
`;

const CTASection = styled.div`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 215, 0, 0.05) 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${colorPalette.yellow}, transparent);
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(45deg, ${colorPalette.yellow}, #FFA500);
  color: #000;
  border: none;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 30px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
    
    &::after {
      transform: scaleX(1.5) scaleY(1.6);
      opacity: 0;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, ${colorPalette.yellow}, #FFA500);
    z-index: 1;
    transition: all 0.4s ease;
    opacity: 1;
  }

  span {
    position: relative;
    z-index: 2;
  }
`;

const LanguageSelector = styled.div`
  position: relative;
  width: 200px;
  margin-bottom: 20px;
`;

const LanguageButton = styled.button`
  width: 100%;
  padding: 10px 15px;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 8px;
  color: ${colorPalette.white};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 215, 0, 0.1);
    border-color: ${colorPalette.yellow};
  }

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    margin-left: 8px;
  }
`;

const LanguageIcon = styled.span`
  font-size: 16px;
  margin-right: 8px;
`;

const socialLinks = [
  {
    href: "https://instagram.com",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    label: "Instagram"
  },
  {
    href: "https://facebook.com",
    path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
    label: "Facebook"
  },
  {
    href: "https://twitter.com",
    path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
    label: "Twitter"
  },
  {
    href: "https://linkedin.com",
    path: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
    label: "LinkedIn"
  }
];

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeStart = 50;
      const fadeEnd = 300;
      
      if (scrollPosition <= fadeStart) {
        setOpacity(1);
      } else if (scrollPosition >= fadeEnd) {
        setOpacity(0);
      } else {
        const newOpacity = 1 - ((scrollPosition - fadeStart) / (fadeEnd - fadeStart));
        setOpacity(newOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStart = async () => {
    try {
      setIsLoading(true);
      await router.push('/chat');
    } catch (error) {
      console.error('Navigation error:', error);
      setIsLoading(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSidebarOpen && !(event.target as Element).closest('.profile-sidebar')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <MainContainer>
      <HeroBackground opacity={opacity}>
        <div className="doodle-left" />
        <div className="doodle-right" />
        <div className="image-wrapper">
          <Image
            src="/back_home.png"
            alt="College Background"
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: 'center 40%',
              transform: 'scale(1.05)'
            }}
            sizes="180vw"
          />
        </div>
      </HeroBackground>

      <NavBar>
        <DoodlePattern />
        <NavLogo>
          <LogoLink href="/">
            <Image
              src="/app_logo.png"
              alt="Gingr Logo"
              width={180}
              height={40}
              style={{
                objectFit: 'contain'
              }}
              priority
            />
          </LogoLink>
        </NavLogo>
        <NavActions>
          <NavLink href="/community">Community</NavLink>
          <LoginButton onClick={() => router.push('/auth')}>Login / Sign Up</LoginButton>
          <HamburgerIcon onClick={toggleSidebar}>
            <span />
            <span />
            <span />
          </HamburgerIcon>
        </NavActions>
      </NavBar>

      <Overlay isOpen={isSidebarOpen} onClick={() => setIsSidebarOpen(false)} />
      
      <ProfileSidebar className="profile-sidebar" isOpen={isSidebarOpen}>
        <DoodlePattern style={{ opacity: 0.05 }} />
        <ProfileHeader>
          <ProfileImage>
            <div style={{ 
              width: '100%', 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '60px',
              background: 'rgba(255, 215, 0, 0.1)'
            }}>
              🦊
            </div>
          </ProfileImage>
          <Typography
            color={colorPalette.yellow}
            fontSize={24}
            fontWeight={600}
            fontType={FontType.HEADING}
            style={{ marginBottom: '5px' }}
          >
            John Smith
          </Typography>
          <Typography
            color={colorPalette.white}
            fontSize={16}
            fontWeight={400}
            fontType={FontType.BODY}
            style={{ opacity: 0.7 }}
          >
            Computer Science • Delhi University
          </Typography>
        </ProfileHeader>

        <ProfileOption onClick={() => router.push('/profile/edit')}>
          <Typography color={colorPalette.yellow} fontSize={16} fontWeight={400} fontType={FontType.BODY}>Profile</Typography>
        </ProfileOption>
        <ProfileOption onClick={() => router.push('/community')}>
          <Typography color={colorPalette.yellow} fontSize={16} fontWeight={400} fontType={FontType.BODY}>Community</Typography>
        </ProfileOption>
        <ProfileOption onClick={() => router.push('/settings')}>
          <Typography color={colorPalette.yellow} fontSize={16} fontWeight={400} fontType={FontType.BODY}>Settings</Typography>
        </ProfileOption>
        <ProfileOption onClick={() => router.push('/privacy')}>
          <Typography color={colorPalette.yellow} fontSize={16} fontWeight={400} fontType={FontType.BODY}>Privacy</Typography>
        </ProfileOption>
        <ProfileOption onClick={() => router.push('/support')}>
          <Typography color={colorPalette.yellow} fontSize={16} fontWeight={400} fontType={FontType.BODY}>Help & Support</Typography>
        </ProfileOption>
      </ProfileSidebar>

      <ContentWrapper>
        <HeroSection>
          <MainContent>
            <Typography
              color={colorPalette.white}
              fontSize={56}
              fontWeight={700}
              fontType={FontType.HEADING}
              style={{ textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000' }}
            >
              Connect with Your Campus
            </Typography>

            <SubheadingButton>
              Meet students • Share experiences • Build connections
            </SubheadingButton>

            <div style={{ 
              margin: '30px 0', 
              textAlign: 'center',
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <CustomButton
                onClick={handleStart}
                disabled={isLoading}
              >
                {isLoading ? 'CONNECTING...' : 'START CHAT'}
              </CustomButton>
            </div>
          </MainContent>
        </HeroSection>

        <FeatureSection>
          <DoodlePattern />
          <StatsSection>
            <StatItem>
              <StatImageWrapper>
                <StatImage
                  src="/active_users.png"
                  alt="Active Users"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </StatImageWrapper>
              <StatContent>
                <Typography 
                  color={colorPalette.yellow} 
                  fontSize={36} 
                  fontWeight={700} 
                  fontType={FontType.HEADING}
                  style={{ marginBottom: '10px' }}
                >
                  30K+
                </Typography>
                <Typography 
                  color={colorPalette.white} 
                  fontSize={16} 
                  fontWeight={400} 
                  fontType={FontType.BODY}
                >
                  Active Users
                </Typography>
              </StatContent>
            </StatItem>

            <StatItem>
              <StatImageWrapper>
                <StatImage
                  src="/college_list.png"
                  alt="Universities and Colleges"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </StatImageWrapper>
              <StatContent>
                <Typography 
                  color={colorPalette.yellow} 
                  fontSize={36} 
                  fontWeight={700} 
                  fontType={FontType.HEADING}
                  style={{ marginBottom: '10px' }}
                >
                  50+
                </Typography>
                <Typography 
                  color={colorPalette.white} 
                  fontSize={16} 
                  fontWeight={400} 
                  fontType={FontType.BODY}
                >
                  Universities/ College Communities
                </Typography>
              </StatContent>
            </StatItem>

            <StatItem>
              <StatImageWrapper>
                <StatImage
                  src="/connection_made.png"
                  alt="Connections Made"
                  fill
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: 'scale(1.2)'
                  }}
                />
              </StatImageWrapper>
              <StatContent>
                <Typography 
                  color={colorPalette.yellow} 
                  fontSize={36} 
                  fontWeight={700} 
                  fontType={FontType.HEADING}
                  style={{ marginBottom: '10px' }}
                >
                  500K+
                </Typography>
                <Typography 
                  color={colorPalette.white} 
                  fontSize={16} 
                  fontWeight={400} 
                  fontType={FontType.BODY}
                >
                  Connections Made
                </Typography>
              </StatContent>
            </StatItem>
          </StatsSection>

          <FeatureRow>
            <FeatureContent>
              <Typography
                color={colorPalette.yellow}
                fontSize={40}
                fontWeight={700}
                fontType={FontType.HEADING}
                style={{ marginBottom: '15px' }}
              >
                Only College Centric Community
              </Typography>
              <FeatureDescription 
                color={colorPalette.white}
                fontSize={18}
                fontWeight={400}
                fontType={FontType.BODY}
                style={{ opacity: 0.9 }}
              >
                A dedicated platform exclusively for college students to network, connect, and build meaningful relationships within their academic community.
              </FeatureDescription>
            </FeatureContent>
            <FeatureImage>
              <Image
                src="/college_centric.png"
                alt="College Community"
                fill
                style={{ objectFit: 'cover' }}
              />
            </FeatureImage>
          </FeatureRow>

          <FeatureRow reverse>
            <FeatureContent>
              <Typography
                color={colorPalette.yellow}
                fontSize={40}
                fontWeight={700}
                fontType={FontType.HEADING}
                style={{ marginBottom: '15px' }}
              >
                Multiple Chat Options
              </Typography>
              <FeatureDescription 
                color={colorPalette.white}
                fontSize={18}
                fontWeight={400}
                fontType={FontType.BODY}
                style={{ opacity: 0.9 }}
              >
                Choose your preferred way to connect - text, voice, or video chat. Express yourself freely and communicate effectively with fellow students.
              </FeatureDescription>
            </FeatureContent>
            <FeatureImage>
              <Image
                src="/chat_options.png"
                alt="Chat Options"
                fill
                style={{ objectFit: 'cover' }}
              />
            </FeatureImage>
          </FeatureRow>

          <FeatureRow>
            <FeatureContent>
              <Typography
                color={colorPalette.yellow}
                fontSize={40}
                fontWeight={700}
                fontType={FontType.HEADING}
                style={{ marginBottom: '15px' }}
              >
                Anonymous Chatting
              </Typography>
              <FeatureDescription 
                color={colorPalette.white}
                fontSize={18}
                fontWeight={400}
                fontType={FontType.BODY}
                style={{ opacity: 0.9 }}
              >
                Feel safe and comfortable with anonymous chat options. Share your thoughts and experiences without revealing your identity.
              </FeatureDescription>
            </FeatureContent>
            <FeatureImage>
              <Image
                src="/anym.png"
                alt="Anonymous Chat"
                fill
                style={{ objectFit: 'cover' }}
              />
            </FeatureImage>
          </FeatureRow>

          <FeatureRow reverse>
            <FeatureContent>
              <Typography
                color={colorPalette.yellow}
                fontSize={40}
                fontWeight={700}
                fontType={FontType.HEADING}
                style={{ marginBottom: '15px' }}
              >
                Zero Data Stored
              </Typography>
              <FeatureDescription 
                color={colorPalette.white}
                fontSize={18}
                fontWeight={400}
                fontType={FontType.BODY}
                style={{ opacity: 0.9 }}
              >
                Your privacy is our priority. We don't store any chat history or personal data, ensuring complete confidentiality and security.
              </FeatureDescription>
            </FeatureContent>
            <FeatureImage>
              <Image
                src="/secured.png"
                alt="Data Privacy"
                fill
                style={{ objectFit: 'cover' }}
              />
            </FeatureImage>
          </FeatureRow>

          <FeatureRow>
            <FeatureContent>
              <Typography
                color={colorPalette.yellow}
                fontSize={40}
                fontWeight={700}
                fontType={FontType.HEADING}
                style={{ marginBottom: '15px' }}
              >
                Interest-Based Chat Filters
              </Typography>
              <FeatureDescription 
                color={colorPalette.white}
                fontSize={18}
                fontWeight={400}
                fontType={FontType.BODY}
                style={{ opacity: 0.9 }}
              >
                Connect with students who share your interests. Our smart filters help you find the perfect chat partners based on common hobbies, courses, and activities.
              </FeatureDescription>
            </FeatureContent>
            <FeatureImage>
              <Image
                src="/interest_based.png"
                alt="Interest Filters"
                fill
                style={{ objectFit: 'cover' }}
              />
            </FeatureImage>
          </FeatureRow>

          <FeatureRow reverse>
            <FeatureContent>
              <Typography
                color={colorPalette.yellow}
                fontSize={40}
                fontWeight={700}
                fontType={FontType.HEADING}
                style={{ marginBottom: '15px' }}
              >
                Multiple Communities
              </Typography>
              <FeatureDescription 
                color={colorPalette.white}
                fontSize={18}
                fontWeight={400}
                fontType={FontType.BODY}
                style={{ opacity: 0.9 }}
              >
                Join various college communities, participate in group discussions, and expand your network across different universities and interest groups.
              </FeatureDescription>
            </FeatureContent>
            <FeatureImage>
              <Image
                src="/thread.png"
                alt="Communities"
                fill
                style={{ objectFit: 'cover' }}
              />
            </FeatureImage>
          </FeatureRow>
        </FeatureSection>

        <CTASection>
          <Typography
            color={colorPalette.yellow}
            fontSize={48}
            fontWeight={800}
            fontType={FontType.HEADING}
            style={{ 
              marginBottom: '20px',
              textShadow: '0 2px 10px rgba(255, 215, 0, 0.2)'
            }}
          >
            What Are You Waiting For?
          </Typography>
          <Typography
            color={colorPalette.white}
            fontSize={24}
            fontWeight={500}
            fontType={FontType.BODY}
            style={{ 
              opacity: 0.9,
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.5'
            }}
          >
            Be a Gingr and Start Making Meaningful Connections Today!
          </Typography>
          <CTAButton onClick={() => router.push('/chat')}>
            <span>Start Chat</span>
          </CTAButton>
        </CTASection>
      </ContentWrapper>

      <Footer>
        <DoodlePattern />
        <FooterContent>
          <FooterLeft>
            <LanguageSelector>
              <LanguageButton>
                <LanguageIcon>🌐</LanguageIcon>
                English (US)
                <svg viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </LanguageButton>
            </LanguageSelector>
            <FooterLinks>
              <a href="/privacy">Privacy Policy</a>
              <span>/</span>
              <a href="/terms">Terms of Service</a>
              <span>/</span>
              <a href="/about">About Us</a>
              <span>/</span>
              <a href="/contact">Contact Us</a>
              <span>/</span>
              <a href="/blogs">Blogs</a>
              <span>/</span>
              <a href="/careers">Careers</a>
              <span>/</span>
              <a href="/advertise">Advertise</a>
            </FooterLinks>
          </FooterLeft>
          <FooterRight>
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
            <SocialLinks>
              {socialLinks.map((social) => (
                <SocialIcon 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <IconSvg viewBox="0 0 24 24">
                    <path d={social.path} />
                  </IconSvg>
                </SocialIcon>
              ))}
            </SocialLinks>
            <Typography
              color={colorPalette.white}
              fontSize={14}
              fontWeight={400}
              fontType={FontType.BODY}
              style={{ opacity: 0.6 }}
            >
              © 2025 Gingr Technologies, All Rights Reserved
            </Typography>
          </FooterRight>
        </FooterContent>
      </Footer>
    </MainContainer>
  );
} 