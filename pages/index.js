import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => (
    <>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.22.2/antd.min.css" />
      </Head>
      <AppLayout>
        <div>Hello, Next!</div>
      </AppLayout>
    </>
);

export default Home;
