import React, { useState } from 'react';
import styled from 'styled-components';
import { colorPalette } from '../styles/colors';
import { useLanguage, languages } from '../contexts/LanguageContext';

const LanguageButton = styled.button`
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 20px;
  color: ${colorPalette.white};
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;

  &:hover {
    background: rgba(255, 215, 0, 0.2);
    border-color: ${colorPalette.yellow};
  }

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`;

const Dropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 12px;
  padding: 8px;
  margin-top: 8px;
  width: 200px;
  max-height: 300px;
  overflow-y: auto;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isOpen ? '0' : '-10px'});
  transition: all 0.3s ease;
  z-index: 1000;
  backdrop-filter: blur(10px);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 215, 0, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 215, 0, 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 215, 0, 0.3);
  }
`;

const LanguageOption = styled.button<{ isSelected: boolean }>`
  width: 100%;
  padding: 8px 12px;
  background: ${props => props.isSelected ? 'rgba(255, 215, 0, 0.1)' : 'transparent'};
  border: none;
  border-radius: 6px;
  color: ${colorPalette.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;

  &:hover {
    background: rgba(255, 215, 0, 0.1);
  }

  .native-name {
    opacity: 0.7;
    margin-left: 8px;
  }
`;

const Container = styled.div`
  position: relative;
`;

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <Container>
      <LanguageButton onClick={() => setIsOpen(!isOpen)}>
        <svg viewBox="0 0 24 24">
          <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
        </svg>
        {currentLanguage.name}
      </LanguageButton>
      <Dropdown isOpen={isOpen}>
        {languages.map((lang) => (
          <LanguageOption
            key={lang.code}
            isSelected={currentLanguage.code === lang.code}
            onClick={() => {
              setLanguage(lang);
              setIsOpen(false);
            }}
          >
            <span>{lang.name}</span>
            <span className="native-name">{lang.nativeName}</span>
          </LanguageOption>
        ))}
      </Dropdown>
    </Container>
  );
}; 