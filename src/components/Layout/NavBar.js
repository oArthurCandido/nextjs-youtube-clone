import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Cloud from '@mui/icons-material/Cloud';
import useWindowSize from 'src/hooks/useWindowSize';

import Icon from 'src/components/Icons/Icon';
import styled from '@mui/material/styles/styled';

import { createSvgIcon } from '@mui/material/utils';
import theme from 'src/theme';
import { Wisdom } from 'aws-sdk';
import { useState } from 'react';
import { useEffect } from 'react';

function NavBar({
  navBarHyde,
  navBarDesktopOpen,
  navBarSetter,
  setNavBarSetter,
  setNavBarHyde,
  isDesktop,
  w
}) {
  const menuItems = [
    {
      name: 'home',
      text: 'Início'
    },
    {
      name: 'shorts',
      text: 'Shorts'
    },
    {
      name: 'subscribes',
      text: 'Inscrições'
    }
  ];

  var desktop = true;

  if (w < 650) {
    desktop = false;
  }

  if (w > 650) {
    setNavBarSetter(true);

    desktop = true;
  }

  const PaperG = styled(Paper)(({ theme }) => ({
    paddingTop: '60px',
    width: 240,
    height: '100%',
    // [theme.breakpoints.down('md')]: {
    //   display: 'block'
    // },
    boxShadow: 'none'
  }));

  return (
    <PaperG hidden={desktop ? navBarDesktopOpen : navBarSetter}>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <ListItemIcon sx={{ paddingLeft: '6px' }}>
              <Icon name={item.name} size={'md'} color={'black'} />
            </ListItemIcon>
            <ListItemText sx={{ paddingLeft: '14px' }}>
              <Typography fontSize={14} color="text.youtube">
                {item.text}
              </Typography>
            </ListItemText>
          </MenuItem>
        ))}

        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </PaperG>
  );
}

export default NavBar;
