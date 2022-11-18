import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Head from 'next/head';
import TopBar from './TopBar';
import NavBar from './NavBar';
import userWindowSize from 'src/hooks/userWindowSize';

function Layout({ children, title }) {
  const [navBarHyde, setNavBarHyde] = useState(false);
  const [navBarDesktopOpen, setNavBarDesktopOpen] = useState(true);
  const [navBarSetter, setNavBarSetter] = useState(true);

  const windowSize = userWindowSize();
  var w = windowSize.width;

  const navBarToggle = () => {
    if (w > 650) {
      setNavBarDesktopOpen(!navBarDesktopOpen);
    } else {
      setNavBarSetter(!navBarSetter);
    }
  };

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
      // maxWidth: '85%'
      // marginLeft: 106,
      paddingRight: 50
    }
  });
  const ContentContainer = styled(Box)({
    display: 'flex',
    flex: '1 1 auto',
    flexWrap: 'wrap',
    overflow: 'hidden'
  });
  const Content = styled(Box)({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'hidden'
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
        <TopBar navBarToggle={navBarToggle} />
        <NavBar
          navBarHyde={navBarHyde}
          setNavBarHyde={setNavBarHyde}
          navBarToggle={navBarToggle}
          navBarDesktopOpen={navBarDesktopOpen}
          navBarSetter={navBarSetter}
          setNavBarSetter={setNavBarSetter}
        />
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
