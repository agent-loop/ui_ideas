import { Typography } from '@cred/neopop-web/lib/components';
import { colorPalette } from '../styles/colors';
import styled, { keyframes, css } from 'styled-components';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/Button';
import { useRouter } from 'next/router';
import { FontType } from '../types/FontType';

const glow = keyframes`
  0% { box-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 15px #FFA500; }
  50% { box-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFA500; }
  100% { box-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 15px #FFA500; }
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

const NavLogo = styled.div`
  width: 200px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  overflow: hidden;
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
  margin-right: 20px;

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

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #000000, #1a1a1a);
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

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 20px 40px;
  z-index: 1;
  position: relative;
`;

const Header = styled.div`
  text-align: center;
  position: relative;
  padding: 0 20px 20px;
  margin-bottom: 30px;

  h1 {
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
    letter-spacing: 1px;
  }
`;

const ChatOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 20px;
  position: relative;
  z-index: 2;
`;

const ChatCard = styled.div`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 215, 0, 0.08);
    border-color: ${colorPalette.yellow};
  }
`;

const ChatDescription = styled(Typography)`
  font-size: 18px !important;
  line-height: 1.6 !important;
  letter-spacing: 0.3px !important;
  font-weight: 500 !important;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2) !important;
  margin-bottom: 25px !important;
  padding: 0 15px !important;
`;

const IconPlaceholder = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 16px;
  background: rgba(255, 215, 0, 0.05);
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 215, 0, 0.2);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

  ${ChatCard}:hover & {
    transform: scale(1.05);
    border-color: #FFD700;
    box-shadow: 0 12px 28px rgba(255, 215, 0, 0.2);
  }

  img {
    width: 150px;
    height: 150px;
    transition: all 0.3s ease;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }

  ${ChatCard}:hover & img {
    transform: scale(1.1);
    filter: drop-shadow(0 6px 12px rgba(255, 215, 0, 0.3));
  }
`;

const LogoLink = styled(Link)`
  display: block;
  height: 100%;
  cursor: pointer;
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

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  padding: 30px 0;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

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
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
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

const ChatInterface = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: calc(100vh - 180px);
  height: calc(100vh - 180px);
`;

const VideoWindow = styled.div`
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(255, 215, 0, 0.2);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  height: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 215, 0, 0.05), rgba(255, 165, 0, 0.05));
  }
`;

const VideoLabel = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 4px;
  z-index: 1;
`;

const VideoChatContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  height: calc(100% - 80px);
  min-height: 500px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;

const VideoChatBox = styled.div`
  flex: 1;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(255, 215, 0, 0.2);
  border-radius: 16px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ChatInputStrip = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 215, 0, 0.2);
`;

const VideoControls = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
`;

const ControlButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #FFD700;
  background: rgba(0, 0, 0, 0.6);
  color: #FFD700;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 215, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const TextChatContainer = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  min-height: 500px;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(255, 215, 0, 0.2);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ChatWindow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Message = styled.div<{ isOwn?: boolean }>`
  max-width: 70%;
  align-self: ${props => props.isOwn ? 'flex-end' : 'flex-start'};
  background: ${props => props.isOwn ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid ${props => props.isOwn ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
`;

const MessageInput = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 215, 0, 0.2);
`;

const Input = styled.input`
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 215, 0, 0.2);
  border-radius: 8px;
  padding: 12px 16px;
  color: #FFFFFF;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #FFD700;
  }
`;

const VoiceChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;
  gap: 60px;
`;

const ParticipantAudio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const AudioVisualizer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 3px solid #FFD700;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: rgba(0, 0, 0, 0.4);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    border: 2px solid rgba(255, 215, 0, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 2px solid rgba(255, 215, 0, 0.2);
  }
`;

const AudioWaves = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const AudioBar = styled.div`
  width: 4px;
  height: 20px;
  background: #FFD700;
  border-radius: 2px;
  animation: wave 1s ease-in-out infinite;
  animation-delay: ${props => props.delay}ms;

  @keyframes wave {
    0%, 100% { height: 20px; }
    50% { height: 40px; }
  }
`;

const CommonControls = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  z-index: 5;
  backdrop-filter: blur(10px);
`;

const ControlGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const AudioChatLayout = styled.div`
  display: grid;
  grid-template-columns: auto 400px auto;
  gap: 40px;
  width: 100%;
  height: calc(100% - 80px);
  min-height: 500px;
  align-items: center;
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

export default function ChatPage() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

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

  const renderChatInterface = () => {
    const rightControls = (
      <ControlGroup>
        <Button className="small">
          Skip
        </Button>
        <Button className="small danger">
          End
        </Button>
      </ControlGroup>
    );

    switch (selectedMode) {
      case 'video':
        return (
          <ChatInterface>
            <VideoChatContainer>
              <VideoWindow>
                <VideoLabel>
                  <Typography color="#FFD700" fontSize={14}>
                    Stranger #1234
                  </Typography>
                </VideoLabel>
              </VideoWindow>
              <RightColumn>
                <VideoWindow>
                  <VideoLabel>
                    <Typography color="#FFD700" fontSize={14}>
                      You
                    </Typography>
                  </VideoLabel>
                </VideoWindow>
                <VideoChatBox>
                  <ChatMessages>
                    <Message>
                      <Typography color="#FFFFFF" fontSize={14}>
                        Hello! How are you?
                      </Typography>
                    </Message>
                    <Message isOwn>
                      <Typography color="#FFFFFF" fontSize={14}>
                        Hi! I'm good, thanks for asking.
                      </Typography>
                    </Message>
                  </ChatMessages>
                  <ChatInputStrip>
                    <Input placeholder="Type your message..." />
                    <Button className="small">
                      Send
                    </Button>
                  </ChatInputStrip>
                </VideoChatBox>
              </RightColumn>
            </VideoChatContainer>
            <CommonControls>
              <Button className="small">
                Add Friend
              </Button>
              {rightControls}
            </CommonControls>
          </ChatInterface>
        );

      case 'text':
        return (
          <ChatInterface>
            <TextChatContainer>
              <ChatWindow>
                <MessageList>
                  <Message>
                    <Typography color="#FFFFFF" fontSize={14}>
                      Hello! How are you?
                    </Typography>
                  </Message>
                  <Message isOwn>
                    <Typography color="#FFFFFF" fontSize={14}>
                      Hi! I'm good, thanks for asking. How about you?
                    </Typography>
                  </Message>
                </MessageList>
                <MessageInput>
                  <Input placeholder="Type your message..." />
                  <Button className="small">
                    Send
                  </Button>
                </MessageInput>
              </ChatWindow>
            </TextChatContainer>
            <CommonControls>
              <ControlGroup>
                <Button className="small">
                  Add Friend
                </Button>
                <Button className="small blue">
                  Switch to Video
                </Button>
              </ControlGroup>
              {rightControls}
            </CommonControls>
          </ChatInterface>
        );

      case 'audio':
        return (
          <ChatInterface>
            <AudioChatLayout>
              <ParticipantAudio>
                <AudioVisualizer>
                  <AudioWaves>
                    {[...Array(8)].map((_, i) => (
                      <AudioBar key={i} style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </AudioWaves>
                </AudioVisualizer>
                <Typography color="#FFD700" fontSize={16} style={{ opacity: 0.7 }}>
                  You
                </Typography>
              </ParticipantAudio>

              <VideoChatBox>
                <ChatMessages>
                  <Message>
                    <Typography color="#FFFFFF" fontSize={14}>
                      Hello! How are you?
                    </Typography>
                  </Message>
                  <Message isOwn>
                    <Typography color="#FFFFFF" fontSize={14}>
                      Hi! I'm good, thanks for asking.
                    </Typography>
                  </Message>
                </ChatMessages>
                <ChatInputStrip>
                  <Input placeholder="Type your message..." />
                  <Button className="small">
                    Send
                  </Button>
                </ChatInputStrip>
              </VideoChatBox>

              <ParticipantAudio>
                <AudioVisualizer>
                  <AudioWaves>
                    {[...Array(8)].map((_, i) => (
                      <AudioBar key={i} style={{ animationDelay: `${i * 150}ms` }} />
                    ))}
                  </AudioWaves>
                </AudioVisualizer>
                <Typography color="#FFD700" fontSize={16} style={{ opacity: 0.7 }}>
                  Stranger #1234
                </Typography>
              </ParticipantAudio>
            </AudioChatLayout>
            <CommonControls>
              <ControlGroup>
                <Button className="small">
                  Add Friend
                </Button>
                <Button className="small blue">
                  Switch to Video
                </Button>
              </ControlGroup>
              {rightControls}
            </CommonControls>
          </ChatInterface>
        );

      default:
        return (
          <ChatOptions>
            <ChatCard onClick={() => setSelectedMode('text')}>
              <IconPlaceholder>
                <Image
                  src="/3.png"
                  alt="Text Chat"
                  width={150}
                  height={150}
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </IconPlaceholder>
              <ChatDescription>
                Connect through instant messaging with students who share your interests
              </ChatDescription>
              <Button onClick={() => setSelectedMode('text')}>
                Text Chat
              </Button>
            </ChatCard>

            <ChatCard onClick={() => setSelectedMode('audio')}>
              <IconPlaceholder>
                <Image
                  src="/1.png"
                  alt="Voice Chat"
                  width={150}
                  height={150}
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </IconPlaceholder>
              <ChatDescription>
                Have meaningful conversations through crystal-clear voice calls
              </ChatDescription>
              <Button onClick={() => setSelectedMode('audio')}>
                Audio Chat
              </Button>
            </ChatCard>

            <ChatCard onClick={() => setSelectedMode('video')}>
              <IconPlaceholder>
                <Image
                  src="/2.png"
                  alt="Video Chat"
                  width={150}
                  height={150}
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </IconPlaceholder>
              <ChatDescription>
                Face-to-face interactions with fellow students in HD quality
              </ChatDescription>
              <Button onClick={() => setSelectedMode('video')}>
                Video Chat
              </Button>
            </ChatCard>
          </ChatOptions>
        );
    }
  };

  return (
    <MainContainer>
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
        <HamburgerIcon onClick={toggleSidebar}>
          <span />
          <span />
          <span />
        </HamburgerIcon>
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
            color="#FFD700"
            fontSize={24}
            fontWeight={600}
            fontType="title"
            style={{ marginBottom: '5px' }}
          >
            John Smith
          </Typography>
          <Typography
            color="#FFFFFF"
            fontSize={16}
            fontWeight={400}
            fontType="paragraph"
            style={{ opacity: 0.7 }}
          >
            Computer Science • Delhi University
          </Typography>
        </ProfileHeader>

        <ProfileOption onClick={() => router.push('/profile/edit')}>
          <Typography color="#FFD700" fontSize={16} fontWeight={400} fontType="paragraph">Profile</Typography>
        </ProfileOption>
        <ProfileOption onClick={() => router.push('/community')}>
          <Typography color="#FFD700" fontSize={16} fontWeight={400} fontType="paragraph">Community</Typography>
        </ProfileOption>
        <ProfileOption onClick={() => router.push('/settings')}>
          <Typography color="#FFD700" fontSize={16} fontWeight={400} fontType="paragraph">Settings</Typography>
        </ProfileOption>
        <ProfileOption onClick={() => router.push('/privacy')}>
          <Typography color="#FFD700" fontSize={16} fontWeight={400} fontType="paragraph">Privacy</Typography>
        </ProfileOption>
        <ProfileOption onClick={() => router.push('/support')}>
          <Typography color="#FFD700" fontSize={16} fontWeight={400} fontType="paragraph">Help & Support</Typography>
        </ProfileOption>
      </ProfileSidebar>

      <ContentWrapper>
        <DoodlePattern />
        {!selectedMode && (
          <>
            <Header>
              <Typography
                color="#FFD700"
                fontSize={48}
                fontWeight={700}
                style={{ marginBottom: '15px' }}
              >
                Choose Your Chat Mode
              </Typography>
              <Typography
                color={colorPalette.white}
                fontSize={20}
                style={{ opacity: 0.8 }}
              >
                Select how you want to connect with other students
              </Typography>
            </Header>
            {renderChatInterface()}
          </>
        )}
        {selectedMode && renderChatInterface()}
      </ContentWrapper>

      {!selectedMode && (
        <FooterContainer>
          <FooterContent>
            <FooterLinks>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/advertise">Advertise</Link>
            </FooterLinks>
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
              © {new Date().getFullYear()} Gingr Technologies, All Rights Reserved
            </Typography>
          </FooterContent>
        </FooterContainer>
      )}
    </MainContainer>
  );
} 