import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NavBar from './NavBar/NavBar.jsx';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SegmentIcon from '@mui/icons-material/Segment';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SubjectIcon from '@mui/icons-material/Subject';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import DiamondIcon from '@mui/icons-material/Diamond';
import OpenInBrowserRoundedIcon from '@mui/icons-material/OpenInBrowserRounded';
import { Routes ,Route} from 'react-router-dom';
import Paraphraser from './SideBar/Paraphraser.jsx';
import Premium from './SideBar/Premium/Premium.jsx';
import { NavLink } from 'react-router-dom';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props) {

    //list of products
    const [show,setShow] = React.useState(true);
    const itemsList1=["Paraphraser","Grammar Checker","Plagiarism Checker","Co-Writer","Summarizer","Citation Generator"];
    const itemsList2=["QuillBot Premium"];
    const itemsList3=["Chrome Extension","Word Extension"]
    const itemList4 = ["Help Center","Contact Us"];
    // List of icons or logo for products
    const logoList1=[<SegmentIcon/>,<SpellcheckIcon/>,<ContentPasteSearchIcon/>,<HistoryEduIcon/>,<SubjectIcon/>,<AlignVerticalCenterIcon/>];
    const logoList2=[<DiamondIcon/>];
    const logoList3=[<OpenInBrowserRoundedIcon/>,<OpenInBrowserRoundedIcon/>];
    const logoList4=[<ContactSupportIcon/>,<MailIcon/>];
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setShow(!show);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setShow(!show);
  };

  const [sidebar,setsidebar] = React.useState(false);
  const sidebarHandler=()=>{
    setsidebar(!sidebar);
    alert("clicked");
  } 

 const link = `/${props.passPage}`;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar space={theme.zIndex.drawer} sidebarHandler={sidebarHandler} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}></NavBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar/>
        <List>
          {itemsList1.map((text, index) => (
            
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {logoList1[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            
          ))}
          </List>
        <Divider/>
        <List> 
          {itemsList2.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {logoList2[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {itemsList3.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {logoList3[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {itemList4.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {logoList4[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, pl:0,pr:0}}>
        <Premium>
           <DrawerHeader/>
        </Premium>
      </Box>
    </Box>
  );
}
