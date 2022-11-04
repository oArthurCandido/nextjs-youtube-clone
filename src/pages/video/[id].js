import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'src/components/Layout';
import Button from '@mui/material/Button';

function video() {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.id}</h1>
    </Layout>
  );
}

export default video;
