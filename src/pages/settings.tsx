import React, { useState } from 'react';
import styled from 'styled-components';
import { PageBackground } from '../components/PageBackground';

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  color: #FFFFFF;
`;

const Title = styled.h1`
  color: #FFD700;
  margin-bottom: 24px;
  font-size: 2.5rem;
  text-align: center;
`;

const SettingsCard = styled.div`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
  backdrop-filter: blur(10px);
`;

const Section = styled.section`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  color: #FFD700;
  font-size: 1.5rem;
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;

const ToggleWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(255, 215, 0, 0.1);
  }
`;

const ToggleLabel = styled.span`
  margin-left: 12px;
  color: #FFFFFF;
  font-size: 1rem;
`;

const ToggleSwitch = styled.div<{ isOn: boolean }>`
  width: 48px;
  height: 24px;
  background: ${props => props.isOn ? '#FFD700' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 12px;
  padding: 2px;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    border-radius: 50%;
    position: absolute;
    left: ${props => props.isOn ? '26px' : '2px'};
    transition: all 0.3s ease;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 1rem;
  cursor: pointer;
  appearance: none;
  transition: all 0.3s ease;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FFD700' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  padding-right: 2.5rem;

  &:focus {
    outline: none;
    border-color: #FFD700;
    background-color: rgba(255, 255, 255, 0.1);
  }

  option {
    background: #1a1a1a;
    color: #FFFFFF;
    padding: 8px;
  }
`;

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    soundNotifications: false,
    messageDisplay: 'compact',
    theme: 'dark'
  });

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <PageBackground>
      <ContentWrapper>
        <Title>Settings</Title>

        <SettingsCard>
          <Section>
            <SectionTitle>Notifications</SectionTitle>
            <Grid>
              <ToggleWrapper onClick={() => handleToggle('emailNotifications')}>
                <ToggleSwitch isOn={settings.emailNotifications} />
                <ToggleLabel>Email Notifications</ToggleLabel>
              </ToggleWrapper>

              <ToggleWrapper onClick={() => handleToggle('pushNotifications')}>
                <ToggleSwitch isOn={settings.pushNotifications} />
                <ToggleLabel>Push Notifications</ToggleLabel>
              </ToggleWrapper>

              <ToggleWrapper onClick={() => handleToggle('soundNotifications')}>
                <ToggleSwitch isOn={settings.soundNotifications} />
                <ToggleLabel>Sound Notifications</ToggleLabel>
              </ToggleWrapper>
            </Grid>
          </Section>

          <Section>
            <SectionTitle>Chat Settings</SectionTitle>
            <Grid>
              <SelectWrapper>
                <Select
                  name="messageDisplay"
                  value={settings.messageDisplay}
                  onChange={handleSelect}
                >
                  <option value="compact">Compact</option>
                  <option value="comfortable">Comfortable</option>
                  <option value="cozy">Cozy</option>
                </Select>
              </SelectWrapper>

              <SelectWrapper>
                <Select
                  name="theme"
                  value={settings.theme}
                  onChange={handleSelect}
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="system">System Default</option>
                </Select>
              </SelectWrapper>
            </Grid>
          </Section>
        </SettingsCard>
      </ContentWrapper>
    </PageBackground>
  );
};

export default Settings; 