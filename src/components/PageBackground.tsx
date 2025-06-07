import styled from 'styled-components';

export const PageBackground = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #000000;
  background-image: 
    radial-gradient(circle at 25px 25px, rgba(255, 215, 0, 0.1) 2%, transparent 0%),
    radial-gradient(circle at 75px 75px, rgba(255, 215, 0, 0.05) 2%, transparent 0%);
  background-size: 100px 100px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(45deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 215, 0, 0.05) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`; 