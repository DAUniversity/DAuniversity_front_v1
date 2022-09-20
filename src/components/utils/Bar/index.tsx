import React, { useState, MouseEvent } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CommentIcon from '@mui/icons-material/Comment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { To, useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import './index.scss';


const pages = [
  {
    icon: <CommentIcon />,
    title: 'DAO',
    linkTo: '/dao'
  },
  {
    icon: <MenuBookIcon />,
    title: 'Docs',
    linkTo: '/docs'
  },
  {
    icon: <FavoriteIcon />,
    title: 'Projects',
    linkTo: '/projects'
  },
  {
    icon: <AddToHomeScreenIcon />,
    title: 'Join the DAO',
    linkTo: '/join_the_dao'
  },
];
const settings = [
  { name: 'Profile', linkTo: '/profile' },
  { name: 'Logout' }
];


const Bar = () => {
  const [anchorElNav, setAnchorElNav] = useState<HTMLButtonElement>();
  const [anchorElUser, setAnchorElUser] = useState<HTMLSpanElement>();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(undefined);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(undefined);
  };

  const navRedirectTo = (path = '') => {
    navigate(path);
  }

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#FAFAFA',
      },
    },
  });

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={lightTheme}>
        <AppBar position="static">
          <Container>
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                onClick={(event) => {
                  navRedirectTo('/')
                }
                }
              >
                <img className="logo-dau" src={'https://dau-resources.s3.amazonaws.com/logo.jpg'} alt="Logo" />
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  className="menu-sx-container"
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem className="menu-sx" key={page.title}
                      onClick={() => {
                        navRedirectTo(page.linkTo)
                        handleCloseNavMenu()
                      }
                      }
                    >
                      <div className="menu-icon">{page.icon}</div>
                      <Typography className="menu-text">{page.title}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                onClick={() => {
                  navRedirectTo('/')
                }
                }
              >
                <img className="logo-dau" src={'https://dau-resources.s3.amazonaws.com/logo.jpg'} alt="Logo" />
              </Typography>

              <Box className="menu-md-container" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    className="menu-md"
                    key={page.title}
                    onClick={(event) => {
                      navRedirectTo(page.linkTo)
                      handleOpenNavMenu(event)
                    }
                    }
                    sx={{ my: 2, color: '#333333', display: 'block' }}
                  >
                    <div className="menu-icon">{page.icon}</div>
                    <div className="menu-text">{page.title}</div>
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                  >
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={(event) => {
                          navRedirectTo(setting.linkTo)
                          handleOpenUserMenu(event)
                        }
                        }
                      >
                        {setting.name}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
};

export default Bar;
