import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Download, DownloadOutlined, FolderSharedOutlined, HomeOutlined } from '@mui/icons-material';
import './Navbar.css'
import { grey } from 'material-ui-colors';
import { ListItemIcon } from '@mui/material';

const drawerWidth = 240;
const navItems = [{ name: 'Home', url: '/sw/resume', icon:  <HomeOutlined /> }, { name: 'Portfolio', url: '/sw/portfolio', icon: <FolderSharedOutlined /> }];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton href={item.url} sx={{ textAlign: 'left' }}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem key='download' disablePadding>
                        <ListItemButton href='https://drive.google.com/uc?export=download&id=1SAl3IETWPAUNfNY_v_2slQu_A56g1EF5' sx={{ textAlign: 'left' }}>
                            <ListItemIcon sx={{justifyContent: 'left'}}>
                                <DownloadOutlined />
                            </ListItemIcon>
                            <ListItemText primary='Resume' />
                        </ListItemButton>
                    </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{backgroundColor: grey[900], zIndex: (theme) => theme.zIndex.drawer + 1 }} position='fixed'>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 0, paddingRight: 2, display: 'block', whiteSpace: 'nowrap' }}
                        color='#fff'
                    >
                        Andrew Michael Gay
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ ml:'auto', display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}>
                        <Button href='/sw/resume' key='Resume'>
                            <NavLink to='/sw/resume'>
                                Home
                            </NavLink>
                        </Button>
                        <Button href='/sw/portfolio' key='Portfolio'>
                            <NavLink to='/sw/portfolio'>
                                Portfolio
                            </NavLink>
                        </Button>
                        <Button href='https://drive.google.com/uc?export=download&id=1SeYpa9XunwQ_nGADlYSYnS5mQc418c9y' startIcon={<Download />} sx={{ color: '#fff', ml: 'auto' }}>
                            Resume
                        </Button>
                    </Box>
                </Toolbar>
                
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    anchor='right'
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginRight: 0 },
                    }}
                >
                    <Toolbar />
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 0 }}>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;