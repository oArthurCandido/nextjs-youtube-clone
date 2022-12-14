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
import Icon from 'src/components/Icons/Icon';
import { AccountCircle } from '@mui/icons-material';
import { signIn, signOut, useSession } from 'next-auth/react';

const TopAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer + 100,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary
}));

function TopBar({ navBarToggle }) {
  const [isFocused, setIsFocused] = React.useState(false);

  const { data: session } = useSession();

  const borderSeter = () => {
    if (isFocused) {
      return '1px solid #175285';
    } else {
      return '1px solid #b8b8b8';
    }
  };

  const rightBorderSeter = () => {
    if (isFocused) {
      return '3px solid #000';
    } else {
      return 'none';
    }
  };

  return (
    <TopAppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box component={'span'} sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            sx={{ marginLeft: '-10px' }}
            color="inherit"
            onClick={navBarToggle}
          >
            <Icon name="bgMenu" />
          </IconButton>
          {/* <Image src={'/YouTube-Logo.png'} width={90} height={55} /> */}
          <Youtube
            sx={{ color: 'red', fontSize: '34.29px', marginLeft: '10px' }}
          />
          <Icon name={'youtubeFont'} color={'black'} />

          <Typography
            sx={{ marginTop: '-15px', paddingLeft: '10px' }}
            variant="overline"
            fontSize={8.5}
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
              maxWidth: 400,
              borderRadius: '20px 0 0 20px',
              boxShadow: 'none',
              border: borderSeter
              // borderRight: borderSeter,
              // borderLeft: borderSeter,
              // borderTop: borderSeter,
              // borderBottom: borderSeter
            }}
          >
            {isFocused ? (
              <Icon
                styleSheet={{ padding: '0 0 0 10px' }}
                name={'magnify'}
                color={'black'}
                size={'lg'}
              />
            ) : null}
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="Pesquisar"
              inputProps={{ 'aria-label': 'search google maps' }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </Paper>
          <Button
            color="inherit"
            type="button"
            sx={{
              p: '6px',
              backgroundColor: '#F6F6F6',
              marginLeft: '-10px',
              borderRadius: '0 20px 20px 0',
              border: '1px solid #b8b8b8',
              '&:hover': {
                backgroundColor: '#e6e6e6'
              }
            }}
            aria-label="search"
          >
            <Icon name={'magnify'} color={'black'} size={'md'} />
          </Button>

          <IconButton sx={{ marginLeft: '7px' }} color={'inherit'}>
            <Microphone sx={{ fontSize: '23px' }} />
          </IconButton>
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <IconButton color="inherit">
            <VideoPlusOutline />
          </IconButton>
          <IconButton color="inherit">
            <BellOutline />
          </IconButton>
          {!session ? (
            <Button
              color={'secondary'}
              component={'a'}
              variant={'outlined'}
              startIcon={<AccountCircle />}
              onClick={() => signIn('google')}
            >
              Fa??a login
            </Button>
          ) : (
            <Avatar
              vatiant={''}
              src={session.user.image}
              sx={{ width: 32, height: 32 }}
              onClick={() => signOut('google')}
            />
          )}
        </Box>
      </Toolbar>
    </TopAppBar>
  );
}

export default TopBar;
