import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import Home from '@mui/icons-material/HomeOutlined';
import Icon from 'src/components/Icons/Icon';

import { createSvgIcon } from '@mui/material/utils';

function NavBar() {
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

  return (
    <Paper sx={{ paddingTop: 7, width: 240, maxWidth: '100%' }}>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem>
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
    </Paper>
  );
}

export default NavBar;
