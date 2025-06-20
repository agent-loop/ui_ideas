import React from 'react';
import styled from 'styled-components';
import { 
  Drawer, 
  List, 
  ListItemIcon,       // <-- Add this
  ListItemText,       // <-- And this
  IconButton, 
  Divider 
} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton'; // <-- ListItemButton import
import {
  Person as PersonIcon,
  Settings as SettingsIcon,
  Security as SecurityIcon,
  Help as HelpIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Groups as GroupsIcon
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import { colorPalette } from '../styles/colors';

const MenuButton = styled(IconButton)`
  color: #FFD700 !important;
  margin-right: 16px !important;
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: rgba(255, 215, 0, 0.05);
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 280px;
    background-color: ${colorPalette.black};
    color: ${colorPalette.white};
    border-right: 1px solid rgba(255, 215, 0, 0.2);
  }
`;

const StyledListItem = styled(ListItemButton)`
  margin: 8px 16px !important;
  border-radius: 8px !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: rgba(255, 215, 0, 0.1) !important;
  }

  .MuiListItemIcon-root {
    color: #FFD700 !important;
    min-width: 40px !important;
  }

  .MuiListItemText-primary {
    color: ${colorPalette.white} !important;
  }
`;

const StyledDivider = styled(Divider)`
  margin: 16px !important;
  background-color: rgba(255, 215, 0, 0.2) !important;
`;

const menuItems = [
  { text: 'Profile', icon: <PersonIcon />, path: '/profile/edit' },
  { text: 'Community', icon: <GroupsIcon />, path: '/community' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  { text: 'Privacy', icon: <SecurityIcon />, path: '/privacy' },
  { text: 'Help & Support', icon: <HelpIcon />, path: '/support' },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <>
      <MenuButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </MenuButton>

      <StyledDrawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <DrawerHeader>
          <img src="/logo.png" alt="Gingr Logo" height="32" />
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon style={{ color: '#FFD700' }} />
          </IconButton>
        </DrawerHeader>

        <StyledDivider />

        <List>
          {menuItems.map((item) => (
            <StyledListItem
              key={item.text}
              onClick={() => handleNavigation(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </StyledListItem>
          ))}
        </List>
      </StyledDrawer>
    </>
  );
};

export default HamburgerMenu;
