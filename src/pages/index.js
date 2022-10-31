import React from 'react';
import { Button } from '@mui/material';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title={'YouTube'}>
      <div>Clone youtube com nextjs e material ui</div>
      <div>teste</div>
      <Button variant="contained" color="secondary">
        Hello World
      </Button>
    </Layout>
  );
}
