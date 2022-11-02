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
  // maxWidth: '350px',
  width: '100%',
  maxHeight: '200px',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: '13px'
}));

function videoCard({ item }) {
  return (
    <Box m={3} sx={{ width: '100%', maxWidth: '100%' }}>
      <Image alt={item.title} src={item.thumb} />
      <Box display={'flex'} alignItems={'start'} mt={1}>
        <Avatar
          width={8}
          height={8}
          alt={item.authorName}
          src={item.authorAvatar}
        >
          SS
        </Avatar>
        <Box pl={2} sx={{ maxWidth: '100%' }}>
          <Typography mr={6} sx={{ maxWidth: '100%' }} variant={'h5'} noWrap>
            {item.title}
          </Typography>
          <Typography variant={'body2'} noWrap>
            {item.authorName}
          </Typography>
          <Typography variant={'body2'} noWrap>
            {item.views} views • {item.date}
          </Typography>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default videoCard;
