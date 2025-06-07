import styled from 'styled-components';

export const Button = styled.button`
  background: #FFD700;
  color: #000000;
  border: none;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-width: 200px;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);

  &:hover {
    transform: translateY(-2px);
    background: #FFE44D;
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 10px rgba(255, 215, 0, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  &.small {
    padding: 12px 24px;
    font-size: 14px;
    min-width: 140px;
  }

  &.danger {
    background: #FF4444;
    box-shadow: 0 4px 15px rgba(255, 68, 68, 0.3);

    &:hover {
      background: #FF6666;
      box-shadow: 0 6px 20px rgba(255, 68, 68, 0.4);
    }

    &:active {
      box-shadow: 0 2px 10px rgba(255, 68, 68, 0.2);
    }
  }

  &.blue {
    background: #2196F3;
    box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);

    &:hover {
      background: #42A5F5;
      box-shadow: 0 6px 20px rgba(33, 150, 243, 0.4);
    }

    &:active {
      box-shadow: 0 2px 10px rgba(33, 150, 243, 0.2);
    }
  }
`; 