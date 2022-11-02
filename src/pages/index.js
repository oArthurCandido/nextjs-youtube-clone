import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import Layout from '../components/Layout';
import VideoCard from 'src/components/VideoCard';

export default function Home() {
  const data = [
    {
      id: 1,
      title:
        'CONFIGURAÇÕES INICIAIS [PARTE #01] | RECRIANDO INTERFACE YOUTUBE COM NEXT.JS',
      thumb: 'https://i.ytimg.com/vi/qnXUcFBBZeQ/hqdefault.jpg',
      authorName: 'Sonny Sangha',
      authorAvatar:
        'https://yt3.ggpht.com/SR8vuJaae-IjOBv-3GOrGciTFWkL-JIfgOkSyLjE9ohjm99zxMMec0Oi2MVYK4weVebLDHNjMA=s240-c-k-c0x00ffffff-no-rj',
      views: '1.4M',
      date: '3 days ago'
    },
    {
      id: 2,
      title: 'React Tutorial for Beginners - 2021',
      thumb: 'https://i.ytimg.com/vi/qnXUcFBBZeQ/hqdefault.jpg',
      authorName: 'Sonny Sangha',
      authorAvatar:
        'https://yt3.ggpht.com/SR8vuJaae-IjOBv-3GOrGciTFWkL-JIfgOkSyLjE9ohjm99zxMMec0Oi2MVYK4weVebLDHNjMA=s240-c-k-c0x00ffffff-no-rj',
      views: '2.4M',
      date: '1 week ago'
    },
    {
      id: 3,
      title: 'Vue Tutorial for Beginners - 2021',
      thumb: 'https://i.ytimg.com/vi/qnXUcFBBZeQ/hqdefault.jpg',
      authorName: 'Sonny Sangha',
      authorAvatar:
        'https://yt3.ggpht.com/SR8vuJaae-IjOBv-3GOrGciTFWkL-JIfgOkSyLjE9ohjm99zxMMec0Oi2MVYK4weVebLDHNjMA=s240-c-k-c0x00ffffff-no-rj',
      views: '3.4M',
      date: '2 weeks ago'
    },
    {
      id: 4,
      title: 'Angular Tutorial for Beginners - 2021',
      thumb: 'https://i.ytimg.com/vi/qnXUcFBBZeQ/hqdefault.jpg',
      authorName: 'Sonny Sangha',
      authorAvatar:
        'https://yt3.ggpht.com/SR8vuJaae-IjOBv-3GOrGciTFWkL-JIfgOkSyLjE9ohjm99zxMMec0Oi2MVYK4weVebLDHNjMA=s240-c-k-c0x00ffffff-no-rj',
      views: '3.4M',
      date: '2 weeks ago'
    }
  ];

  return (
    <Layout title={'YouTube'}>
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map(item => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}
