import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import { NavLink, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import ListSubheader from '@mui/material/ListSubheader';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import "./Navbar.css"




const Navbar = (props) => {
    // Notification state stuff
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Chat modal state stuff
    const [open, setOpen] = React.useState(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);
  
    

    const messages = [
        {
          id: 1,
          primary: 'Brunch this week?',
          secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
          person: '/static/images/avatar/5.jpg',
        },
        {
          id: 2,
          primary: 'Birthday Gift',
          secondary: `Do you have a suggestion for a good present for John on his work
            anniversary. I am really confused & would love your thoughts on it.`,
          person: '/static/images/avatar/1.jpg',
        },
        {
          id: 3,
          primary: 'Recipe to try',
          secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
          person: '/static/images/avatar/2.jpg',
        },
        {
          id: 4,
          primary: 'Yes!',
          secondary: 'I have the tickets to the ReactConf for this year.',
          person: '/static/images/avatar/3.jpg',
        },
        {
          id: 5,
          primary: "Doctor's Appointment",
          secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
          person: '/static/images/avatar/4.jpg',
        },
        {
          id: 6,
          primary: 'Discussion',
          secondary: `Menus that are generated by the bottom app bar (such as a bottom
            navigation drawer or overflow menu) open as bottom sheets at a higher elevation
            than the bar.`,
          person: '/static/images/avatar/5.jpg',
        },
        {
          id: 7,
          primary: 'Summer BBQ',
          secondary: `Who wants to have a cookout this weekend? I just got some furniture
            for my backyard and would love to fire up the grill.`,
          person: '/static/images/avatar/1.jpg',
        },
      ];

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
      });
      

    return (

        
    <div>
        {/* //Chats offCanvas  */} 
        <div>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Chats</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {/* App bar within offcanvas */}
        <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Inbox
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}

              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}

              <ListItem button onClick={handleModalOpen}>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
    <NavLink className="nav-link"  to="/Chats"><Button variant="dark">See all</Button></NavLink>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
      {/* end of offcanvas */}

      {/* modal which pops up with chats between users */}
    <div>
<Modal
  open={open}
  onClose={handleModalClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Your chats with userX
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>
</div>
        <nav className="navbar navbar-expand-lg navbar-white bg-white" style={{ height: "55px"}}>
            <Link className="navbar-brand" to="/" >spiel</Link>
            <NavLink className="nav-link"  to="/group">groups</NavLink>

             {/* Notification Dropdown */}
            <Dropdown>
      <Dropdown.Toggle variant="failure" id="dropdown-basic">
        Notifications
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Notification 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Notification 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Notification 3</Dropdown.Item>
        <Dropdown.Item href="/Notifications">See All</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

            <Button variant="none" onClick={handleShow}>Chats  </Button>
            <NavLink className="nav-link"  to="/group">Settings</NavLink>

                {
                    props.isAuth 
                    ? 
                    <>
                        <NavLink className="nav-link"  to="/profile">profile</NavLink>
                        <NavLink className="nav-link"  to="/logout">logout</NavLink>
                        <span onClick={props.handleLogout} className="logout">↪️</span>
                        < SearchBar />
                    </>
                    : 
                    <>
                        <NavLink className="nav-link"  to="/signup">Create Account</NavLink>
                        <NavLink className="nav-link"  to="/login">Login</NavLink>
                        
                    </>
                  
                }
        </nav>
        </div>
    );
}


export default Navbar;