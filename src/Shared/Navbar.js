import React, { useContext } from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { AuthContext } from '../Context/Context';
import logo from '../logo.png'
import Lottie from "lottie-react";
import './navbar.css'


const pages = ['Home', 'Add Task', 'My Task', 'Completed Task'];
const menu = <>
<Link to='/home' className='m-3 '>Home</Link>
<Link to='/addTask' className='m-3 ' >Add Task</Link>
<Link to='/myTask' className='m-3 '>My Task</Link>
<Link  to='/completedTask' className='m-3 '>Completed Task</Link>
</>
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ marginBottom: '8px', }}>
      <AppBar position="static" sx={{ bgcolor: '#6A5ACD' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} className=' p-1 large mr-2'>
              <img style={{width: "30px", height:"30px"}} src={logo}/>
            </div>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',

                textTransform: 'none',
                textDecoration: 'none',
              }}
            >
              ToDo
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
                
                <MenuItem key={menu} onClick={handleCloseNavMenu}>
                    <Typography className='flex flex-col'  >
                      {menu}
                      
                    </Typography>
                  </MenuItem>
              </Menu>
            </Box>


            <div sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} className='p-1 small mr-2'>
            <img style={{width: "30px", height:"30px"}} src={logo}/>
            </div>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex ', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',

              }}
            >
              ToDo
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', textDecoration:"none", font:"normal-case" }}
                >
                  <Link to={`/${page}`} >{page}</Link>
                </Button>
              ))} */}
              {menu}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <NotificationsActiveIcon sx={{ mr: '8px' }} ></NotificationsActiveIcon>
              
              {
                user?.uid ?
                  <>


                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <Tooltip title="Register">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Stack direction="row" spacing={2}>

                            <StyledBadge
                              overlap="circular"
                              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                              variant="dot"
                            >
                              <Avatar
                                src={user?.photoURL} />
                            </StyledBadge>

                          </Stack>
                        </IconButton>
                      </Tooltip>
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={logOut}>Log out</MenuItem>
                    </Menu>

                  </>
                  :
                  <>
                    {user?.photoURL ?


                      <>
                        <Button
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                        >
                          <Avatar

                            alt="Remy Sharp" src={user?.photoURL} />
                        </Button>
                      </>
                      :
                      <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        <Avatar

                           src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.behance.net%2Fsearch%2Fprojects%3Fsearch%3Ddoremon&psig=AOvVaw25kKfNICLpOoc-UGDZAL9Y&ust=1672393039498000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKDGmNrDnvwCFQAAAAAdAAAAABAE" />
                      </Button>

                    }
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={logOut}><Link to="/register">Sign in</Link></MenuItem>
                    </Menu>
                  </>
              }
          


              {/* <Menu
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
         <MenuItem key={setting} onClick={handleCloseUserMenu}>
           <Typography textAlign="center">{setting}</Typography>
         </MenuItem>
       ))}
     </Menu> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;