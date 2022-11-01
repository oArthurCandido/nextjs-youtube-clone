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
  objectPosition: 'center',
  borderRadius: '13px'
}));

function videoCard({ item }) {
  return (
    <Box m={3} sx={{ maxWidth: '320px' }}>
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
        <Box pl={2}>
          <Typography sx={{ maxWidth: '280px' }} variant={'h5'} noWrap>
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
