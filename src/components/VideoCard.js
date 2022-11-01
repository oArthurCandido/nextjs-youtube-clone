import {
  Box,
  Typography,
  Button,
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';

import React from 'react';

const Image = styled('img')(({ theme }) => ({
  width: '350px',
  height: '200px',
  objectFit: 'cover',
  objectPosition: 'center'
}));

function videoCard({ item }) {
  return (
    <Box m={4} sx={{ maxWidth: '320px' }}>
      <Image alt={item.title} src={item.thumb} />
      <Box display={'flex'} alignItems={'center'} mt="1">
        <Avatar alt={item.authorName} src={item.authorAvatar}>
          SS
        </Avatar>
        <Typography p={2} variant={'h6'} noWrap>
          {item.title}
        </Typography>
      </Box>
      <Box>
        <Typography variant={'body2'} noWrap>
          {item.authorName}
        </Typography>
        <Typography variant={'body2'} noWrap>
          {item.views} views • {item.date}
        </Typography>
      </Box>
    </Box>
  );
}

export default videoCard;
