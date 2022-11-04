import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import Layout from '../components/Layout';
import VideoCard from 'src/components/VideoCard';
import { getVideos } from 'src/database/getVideos';

function Home({ data }) {
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

export async function getStaticProps() {
  const data = await getVideos();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data))
    },
    revalidate: 60
  };
}

export default Home;
