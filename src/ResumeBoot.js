import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { Phone, Envelope, Laptop, Linkedin, Download } from 'react-bootstrap-icons'
import './Resume.css'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import EngineeringIcon from '@mui/icons-material/Engineering';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: -drawerWidth,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function Resume() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                        Andrew Michael Gay
                    </Typography>
                    <Button variant="outlined" color='warning' href="#outlined-buttons">
                        Resume <Download />
                    </Button>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Main open={open} className='p-0'>
                <DrawerHeader />
                <div className="container-fluid">
                    <div className="row firstRow align-items-start justify-content-between p-2">
                        <div className="about col-12 col-lg-4 order-lg-1 text-md-left py-4 px-lg-4 px-xl-5 align-items-center">
                            <img src="https://res.cloudinary.com/deuft4auk/image/upload/v1665117910/Personal%20Website/canyon_ibikw8.jpg"
                                className='headshot roundedCorners mb-3' alt="" />
                            <h1 className="name mb-auto fw-bold">Andrew Gay</h1>
                            <h3 className="title fw-normal">Software Engineer</h3>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 py-4 px-lg-4 px-xl-5 order-lg-3 justify-content-center">
                            <h2 className="text-primary">Contact</h2>
                            <hr className="text-muted"></hr>
                            <div className="link col-12 mb-4">
                                <h4><a href="mailto: andrwmg@gmail.com">
                                    <Envelope className='text-primary me-1' />
                                    <i className="text-primary bi bi-envelope me-1"></i>
                                    andrwmg@gmail.com</a>
                                </h4>
                            </div>
                            <div className="link col-12 mb-4">
                                <h4><a href="tel:6108884468">
                                    <Phone className='text-primary me-1' />
                                    <i className="text-primary bi bi-phone me-1"></i>
                                    610-888-4468</a></h4>
                            </div>
                            <div className="link col-12 mb-4">
                                <h4>
                                    <a href="http://www.andrewmichaelgay.com">
                                        <Laptop className='text-primary me-1' />
                                        <i className="text-primary bi bi-laptop me-1"></i>
                                        andrewmichaelgay.com
                                    </a>
                                </h4>
                            </div>
                            <div className="link col-12">
                                <h4><a href="http://www.linkedin.com/in/andrwmg">
                                    <Linkedin className='text-primary me-1' />
                                    <i className="text-primary bi bi-linkedin me-1"></i>
                                    linkedin.com/in/andrwmg</a>
                                </h4>
                            </div>
                        </div>


                        <div className="col-12 col-md-6 col-lg-4 py-4 px-lg-4 px-xl-5 order-lg-2 justify-content-center">
                            <div>
                                <h2 className="text-primary mb-3">About</h2>
                                <hr className="text-muted"></hr>

                                <p className="mb-3">I’m a hopeful Software Engineer shifting over from over 8 years of Mechanical
                                    Engineering experience. I've completed a 65+ hour web development bootcamp, where I learned
                                    HTML5, CSS, JavaScript, Node.js, MongoDB, and Express. Right now I'm working through a React.js
                                    bootcamp with a Java bootcamp on deck.
                                </p>
                                <p className="mb-3">I enjoy learning new skills and honing them through real-world applications. I’m
                                    excited to apply my mechanical engineering and product development experience to my career as a
                                    Software Engineer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-white p-2 justify-content-center justify-content-sm-between justify-content-md-evenly">
                        <div className="col-12 col-md-4 skills py-4 px-2 px-lg-4 px-xl-5">
                            <h2 className="text-primary">Skills</h2>
                            <hr className="text-muted"></hr>

                            <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-between">
                                <div className="col-6 col-sm-6 col-md-6">
                                    <h5>HTML/CSS</h5>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                                    <div className="progress" style={{ height: 10 }}>
                                        <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                                            style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
                                <div className="col-6 col-sm-6 col-md-6">
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                                    <div className="progress" style={{ height: 10 }}>
                                        <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                                            style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
                                <div className="col-6 col-sm-6 col-md-6">
                                    <h5>React.js</h5>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                                    <div className="progress" style={{ height: 10 }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                            aria-label="Animated striped example" aria-valuenow="60" aria-valuemin="0"
                                            aria-valuemax="100" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
                                <div className="col-6 col-sm-6 col-md-6">
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                                    <div className="progress" style={{ height: 10 }}>
                                        <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                                            style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
                                <div className="col-6 col-sm-6 col-md-6">
                                    <h5>Node.js</h5>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                                    <div className="progress" style={{ height: 10 }}>
                                        <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                                            style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
                                <div className="col-6 col-sm-6 col-md-6">
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                                    <div className="progress" style={{ height: 10 }}>
                                        <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                                            style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-between">
                                <div className="col-6 col-sm-6 col-md-6">
                                    <h5>Illustrator</h5>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 text-primary my-auto">
                                    <div className="progress" style={{ height: 10 }}>
                                        <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                                            style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-start justify-content-sm-center justify-content-md-start">
                                <div className="col-6 col-sm-6 col-md-6">
                                    <h5>Photoshop</h5>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                                    <div className="progress" style={{ height: 10 }}>
                                        <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                                            style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 py-4 px-2 px-lg-4 px-xl-5">
                            <h2 className="text-primary">Experience</h2>
                            <hr className="text-muted"></hr>
                            <div className="my-4 mt-md-0">
                                <h3>Inseego Corp.</h3>
                                <h4 className="subTitle">Senior Mechanical Engineer</h4>
                                <h4 className="text-muted">Aug 2020 - Oct 2022</h4>
                                <ul className="mt-2 mb-0 ps-3">
                                    <li>Designed 5G wireless device plastic housings and electromechanical assemblies.</li>
                                    <li>Performed environmental and mechanical QA testing to validate production candidates.</li>
                                    <li>Optimized rework process for regulatory testing to increase output by 50%.</li>
                                    <li>Led cross-functional collaboration to simplify designs while maintaining performance.</li>
                                    <li>Managed OEM-designed product development.</li>
                                </ul>
                            </div>
                            <div className="">

                                <h3>HM Electronics</h3>
                                <h4 className="subTitle">Senior Mechanical Engineer</h4>
                                <h4 className="text-muted">Mar 2014 - Aug 2020</h4>
                                <ul className="mt-2 mb-0 ps-3">
                                    <li>Served as Lead Mechanical Engineer on several design and sustaining projects simultaneously.
                                    </li>
                                    <li>Conducted cost reduction efforts to reduce BOM by 20% and streamline manufacturing.
                                    </li>
                                    <li>Led sustaining efforts with root cause analysis and 50+ design improvements to legacy
                                        products.
                                    </li>
                                    <li>Managed and trained interns with an 80% success rate retaining them as full-time engineers.
                                    </li>
                                    <li>Developed product ID and QA test equipment.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 py-4 px-2 px-lg-4 px-xl-5">
                            <h2 className="text-primary">Education</h2>
                            <hr className='text-muted'></hr>
                            <div className="my-4 mt-md-0">
                                <h3 className="">Udemy</h3>
                                <h4 className="subTitle">Java Bootcamp</h4>
                                <h4 className="text-muted">Upcoming</h4>
                            </div>
                            <div className="my-4">
                                <h3 className="">Udemy</h3>
                                <h4 className="subTitle">The Modern React Bootcamp</h4>
                                <h4 className="text-muted">Sep 2022 - Current</h4>
                            </div>
                            <div className="my-4">
                                <h3 className="">Udemy</h3>
                                <h4 className="subTitle">The Web Developer Bootcamp 2022</h4>
                                <h4 className="text-muted">Jun 2022 - Aug 2022</h4>
                            </div>
                            <div className="my-4">
                                <h3 className="">UCSD Extension</h3>
                                <h4 className="subTitle">Adobe Illustrator</h4>
                                <h4 className="text-muted">Oct 2016 - Dec 2016</h4>
                            </div>
                            <div className="mt-4">
                                <h3 className="">University of Delaware</h3>
                                <h4 className="subTitle">B.S. Mechanical Engineering</h4>
                                <h4 className="text-muted">Aug 2008 - Dec 2012</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </Main>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem key='Resume' disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Download />
                            </ListItemIcon>
                            <ListItemText primary='Resume' />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {['SW Portfolio', 'SW Resume', 'ME Portfolio', 'ME Resume'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index === 0 && <Download />}
                                    {index === 1 && <Download />}
                                    {index === 2 && <EngineeringIcon />}
                                    {index === 3 && <EngineeringIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}






// class Resume extends Component {
//     render() {
//         return (
//             <div>
//                 <nav className="navbar navbar-dark sticky-top bg-dark">
//                     <div className="container-fluid">
//                         <span className="navbar-brand mb-0 h1">Andrew Michael Gay</span>
//                         <div className="ms-auto">
//                             <a href='https://drive.google.com/uc?export=download&id=1c5h5l5OCQQFk5nGes1T1lF33prVWRiZC'
//                                 className="btn btn-outline-light">
//                                 <h4 className="d-inline"><b>Resume</b></h4>
//                                 <Download className='ms-2'/>
//                                 {/* <i className="bi bi-download ms-2"></i> */}
//                             </a>
//                         </div>
//                     </div>
//                 </nav>
//                 <div className="container-fluid">
//                     <div className="row firstRow align-items-start justify-content-between p-2">
//                         <div className="about col-12 col-lg-4 order-lg-1 text-md-left py-4 px-lg-4 px-xl-5 align-items-center">
//                             <img src="https://res.cloudinary.com/deuft4auk/image/upload/v1665117910/Personal%20Website/canyon_ibikw8.jpg"
//                                 className='headshot roundedCorners mb-3' alt="" />
//                                 <h1 className="name mb-auto fw-bold">Andrew Gay</h1>
//                                 <h3 className="title fw-normal">Software Engineer</h3>
//                         </div>
//                         <div className="col-12 col-md-6 col-lg-4 py-4 px-lg-4 px-xl-5 order-lg-3 justify-content-center">
//                             <h2 className="text-primary">Contact</h2>
//                             <hr className="text-muted"></hr>
//                                 <div className="link col-12 mb-4">
//                                     <h4><a href="mailto: andrwmg@gmail.com">
//                                         <Envelope className='text-primary me-1' />
//                                         <i className="text-primary bi bi-envelope me-1"></i>
//                                         andrwmg@gmail.com</a>
//                                     </h4>
//                                 </div>
//                                 <div className="link col-12 mb-4">
//                                     <h4><a href="tel:6108884468">
//                                         <Phone className='text-primary me-1' />
//                                         <i className="text-primary bi bi-phone me-1"></i>
//                                         610-888-4468</a></h4>
//                                 </div>
//                                 <div className="link col-12 mb-4">
//                                     <h4>
//                                         <a href="http://www.andrewmichaelgay.com">
//                                             <Laptop className='text-primary me-1' />
//                                             <i className="text-primary bi bi-laptop me-1"></i>
//                                             andrewmichaelgay.com
//                                         </a>
//                                     </h4>
//                                 </div>
//                                 <div className="link col-12">
//                                     <h4><a href="http://www.linkedin.com/in/andrwmg">
//                                         <Linkedin className='text-primary me-1' />
//                                         <i className="text-primary bi bi-linkedin me-1"></i>
//                                         linkedin.com/in/andrwmg</a>
//                                     </h4>
//                                 </div>
//                         </div>


//                         <div className="col-12 col-md-6 col-lg-4 py-4 px-lg-4 px-xl-5 order-lg-2 justify-content-center">
//                             <div>
//                                 <h2 className="text-primary mb-3">About</h2>
//                                 <hr className="text-muted"></hr>

//                                     <p className="mb-3">I’m a hopeful Software Engineer shifting over from over 8 years of Mechanical
//                                         Engineering experience. I've completed a 65+ hour web development bootcamp, where I learned
//                                         HTML5, CSS, JavaScript, Node.js, MongoDB, and Express. Right now I'm working through a React.js
//                                         bootcamp with a Java bootcamp on deck.
//                                     </p>
//                                     <p className="mb-3">I enjoy learning new skills and honing them through real-world applications. I’m
//                                         excited to apply my mechanical engineering and product development experience to my career as a
//                                         Software Engineer.
//                                     </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row bg-white p-2 justify-content-center justify-content-sm-between justify-content-md-evenly">
//                         <div className="col-12 col-md-4 skills py-4 px-2 px-lg-4 px-xl-5">
//                             <h2 className="text-primary">Skills</h2>
//                             <hr className="text-muted"></hr>

//                                 <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-between">
//                                     <div className="col-6 col-sm-6 col-md-6">
//                                         <h5>HTML/CSS</h5>
//                                     </div>
//                                     <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
//                                         <div className="progress" style={{height: 10}}>
//                                             <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
//                                                 style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
//                                     <div className="col-6 col-sm-6 col-md-6">
//                                         <h5>JavaScript</h5>
//                                     </div>
//                                     <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
//                                         <div className="progress" style={{height: 10}}>
//                                             <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
//                                                 style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
//                                     <div className="col-6 col-sm-6 col-md-6">
//                                         <h5>React.js</h5>
//                                     </div>
//                                     <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
//                                         <div className="progress" style={{height: 10}}>
//                                             <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
//                                                 aria-label="Animated striped example" aria-valuenow="60" aria-valuemin="0"
//                                                 aria-valuemax="100" style={{width: '60%'}}></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
//                                     <div className="col-6 col-sm-6 col-md-6">
//                                         <h5>Bootstrap</h5>
//                                     </div>
//                                     <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
//                                         <div className="progress" style={{height: 10}}>
//                                             <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
//                                                 style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
//                                     <div className="col-6 col-sm-6 col-md-6">
//                                         <h5>Node.js</h5>
//                                     </div>
//                                     <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
//                                         <div className="progress" style={{height: 10}}>
//                                             <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
//                                                 style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
//                                     <div className="col-6 col-sm-6 col-md-6">
//                                         <h5>MongoDB</h5>
//                                     </div>
//                                     <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
//                                         <div className="progress" style={{height: 10}}>
//                                             <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
//                                                 style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-between">
//                                     <div className="col-6 col-sm-6 col-md-6">
//                                         <h5>Illustrator</h5>
//                                     </div>
//                                     <div className="col-6 col-sm-6 col-md-6 col-lg-6 text-primary my-auto">
//                                         <div className="progress" style={{height: 10}}>
//                                             <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
//                                                 style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="row justify-content-start justify-content-sm-center justify-content-md-start">
//                                     <div className="col-6 col-sm-6 col-md-6">
//                                         <h5>Photoshop</h5>
//                                     </div>
//                                     <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
//                                         <div className="progress" style={{height: 10}}>
//                                             <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
//                                                 style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                         </div>
//                         <div className="col-12 col-md-4 py-4 px-2 px-lg-4 px-xl-5">
//                             <h2 className="text-primary">Experience</h2>
//                             <hr className="text-muted"></hr>
//                                 <div className="my-4 mt-md-0">
//                                     <h3>Inseego Corp.</h3>
//                                     <h4 className="subTitle">Senior Mechanical Engineer</h4>
//                                     <h4 className="text-muted">Aug 2020 - Oct 2022</h4>
//                                     <ul className="mt-2 mb-0 ps-3">
//                                         <li>Designed 5G wireless device plastic housings and electromechanical assemblies.</li>
//                                         <li>Performed environmental and mechanical QA testing to validate production candidates.</li>
//                                         <li>Optimized rework process for regulatory testing to increase output by 50%.</li>
//                                         <li>Led cross-functional collaboration to simplify designs while maintaining performance.</li>
//                                         <li>Managed OEM-designed product development.</li>
//                                     </ul>
//                                 </div>
//                                 <div className="">

//                                     <h3>HM Electronics</h3>
//                                     <h4 className="subTitle">Senior Mechanical Engineer</h4>
//                                     <h4 className="text-muted">Mar 2014 - Aug 2020</h4>
//                                     <ul className="mt-2 mb-0 ps-3">
//                                         <li>Served as Lead Mechanical Engineer on several design and sustaining projects simultaneously.
//                                         </li>
//                                         <li>Conducted cost reduction efforts to reduce BOM by 20% and streamline manufacturing.
//                                         </li>
//                                         <li>Led sustaining efforts with root cause analysis and 50+ design improvements to legacy
//                                             products.
//                                         </li>
//                                         <li>Managed and trained interns with an 80% success rate retaining them as full-time engineers.
//                                         </li>
//                                         <li>Developed product ID and QA test equipment.
//                                         </li>
//                                     </ul>
//                                 </div>
//                         </div>
//                         <div className="col-12 col-md-4 py-4 px-2 px-lg-4 px-xl-5">
//                             <h2 className="text-primary">Education</h2>
//                             <hr className='text-muted'></hr>
//                                 <div className="my-4 mt-md-0">
//                                     <h3 className="">Udemy</h3>
//                                     <h4 className="subTitle">Java Bootcamp</h4>
//                                     <h4 className="text-muted">Upcoming</h4>
//                                 </div>
//                                 <div className="my-4">
//                                     <h3 className="">Udemy</h3>
//                                     <h4 className="subTitle">The Modern React Bootcamp</h4>
//                                     <h4 className="text-muted">Sep 2022 - Current</h4>
//                                 </div>
//                                 <div className="my-4">
//                                     <h3 className="">Udemy</h3>
//                                     <h4 className="subTitle">The Web Developer Bootcamp 2022</h4>
//                                     <h4 className="text-muted">Jun 2022 - Aug 2022</h4>
//                                 </div>
//                                 <div className="my-4">
//                                     <h3 className="">UCSD Extension</h3>
//                                     <h4 className="subTitle">Adobe Illustrator</h4>
//                                     <h4 className="text-muted">Oct 2016 - Dec 2016</h4>
//                                 </div>
//                                 <div className="mt-4">
//                                     <h3 className="">University of Delaware</h3>
//                                     <h4 className="subTitle">B.S. Mechanical Engineering</h4>
//                                     <h4 className="text-muted">Aug 2008 - Dec 2012</h4>
//                                 </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Resume