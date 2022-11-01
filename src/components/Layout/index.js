import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Head from 'next/head';
import TopBar from './TopBar';
import NavBar from './NavBar';

function Layout({ children, title }) {
  const theme = useTheme();

  const Root = styled(Box)({
    display: 'flex',
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    overflow: 'hidden'
  });
  const Wrapper = styled(Box)({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  });
  const ContentContainer = styled(Box)({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  });
  const Content = styled(Box)({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta charSet="utf-8" />
        <meta lang="pt-br" />
        <title>{title}</title>
      </Head>
      <Root id="BodyWrapper">
        <TopBar />
        <NavBar />
        <Wrapper>
          <ContentContainer>
            <Content>{children}</Content>
          </ContentContainer>
        </Wrapper>
      </Root>
    </>
  );
}

export default Layout;