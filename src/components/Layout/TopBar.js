import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from 'mdi-material-ui/Menu';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Youtube from 'mdi-material-ui/Youtube';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Search from 'mdi-material-ui/Magnify';
import { Divider, InputBase } from '@mui/material';
import Microphone from 'mdi-material-ui/Microphone';
import VideoPlusOutline from 'mdi-material-ui/VideoPlusOutline';
import BellOutline from 'mdi-material-ui/BellOutline';
import Avatar from '@mui/material/Avatar';

const TopAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer + 100,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary
}));

function TopBar() {
  return (
    <TopAppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box component={'span'} sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <Menu sx={{ fontSize: '30px' }} />
          </IconButton>
          {/* <Image src={'/YouTube-Logo.png'} width={90} height={55} /> */}
          <Youtube
            sx={{ color: 'red', fontSize: '34.29px', marginLeft: '10px' }}
          />
          <Typography
            sx={{ letterSpacing: '-1.5px' }}
            variant={'h4'}
            fontSize={20}
            fontWeight={600}
          >
            Premium
          </Typography>
          <Typography
            sx={{ marginTop: '-15px' }}
            variant="overline"
            fontSize={9}
          >
            BR
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 400,
              borderRadius: '2px',
              boxShadow: 'none',
              border: '1px solid #e6e6e6'
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Pesquisar"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          </Paper>
          <Button
            color="inherit"
            type="button"
            sx={{
              p: '6px',
              backgroundColor: '#F6F6F6',
              borderRadius: '2px',
              border: '1px solid #e6e6e6'
            }}
            aria-label="search"
          >
            <Search color="inherit" />
          </Button>
          <IconButton sx={{ marginLeft: '7px' }} color={'inherit'}>
            <Microphone sx={{ fontSize: '23px' }} />
          </IconButton>
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          width={'140px'}
        >
          <IconButton color="inherit">
            <VideoPlusOutline />
          </IconButton>
          <IconButton color="inherit">
            <BellOutline />
          </IconButton>
          <Avatar
            vatiant={''}
            src="/avatar.jpg"
            sx={{ width: 32, height: 32 }}
          />
        </Box>
      </Toolbar>
    </TopAppBar>
  );
}

export default TopBar;
