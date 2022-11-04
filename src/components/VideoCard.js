import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import ImageNext from 'next/image';

const Image = styled(ImageNext)(({ theme }) => ({
  // maxWidth: '350px',
  width: '100%',
  // maxHeight: '200px',
  height: '100%',
  // objectFit: 'cover',
  // objectPosition: 'center',
  borderRadius: '13px'
}));

function videoCard({ item }) {
  const router = useRouter();

  return (
    <Box sx={{ width: '100%', maxWidth: '100%' }}>
      <Image
        alt={item.title}
        src={item.thumb}
        width={350}
        height={200}
        layout="intrinsic"
        onClick={() =>
          router.push({ pathname: '/video/[id]', query: { id: item._id } })
        }
      />
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
          <Typography mr={5} sx={{ maxWidth: '100%' }} variant={'h5'} noWrap>
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
