import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import HelpIcon from '@material-ui/icons/Help';
import CallIcon from '@material-ui/icons/Call';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import CategoryIcon from '@material-ui/icons/Category';
import StorefrontIcon from '@material-ui/icons/Storefront';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Sidebar() {
  const classes = useStyles();
  const [state, setState] = React.useState(null);
//
  // const toggleDrawer = (open) => (event) => {
  //   if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setState( open );
  // };
  


  const list = () => (
    <div
      // className={clsx(classes.list)}
      // role="presentation"
      // onClick={toggleDrawer( false)}
      // onKeyDown={toggleDrawer( false)}
    >
      <List>
       
          <ListItem button >
            <ListItemIcon><AccountBoxIcon/></ListItemIcon>
            <ListItemText primary="Your Account" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><CategoryIcon/></ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><StorefrontIcon/></ListItemIcon>
            <ListItemText primary="In your Bag" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><FeedbackIcon/></ListItemIcon>
            <ListItemText primary="Feedback" />
          </ListItem>
        
      </List>
      <Divider />
      <List>
       
         <ListItem button>
            <ListItemIcon><HelpIcon/></ListItemIcon>
            <ListItemText primary="Help" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><MailIcon/></ListItemIcon>
            <ListItemText primary="Write it to us" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><CallIcon/></ListItemIcon>
            <ListItemText primary="Ask for a callback" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ReportProblemIcon/></ListItemIcon>
            <ListItemText primary="Report store" />
          </ListItem>
          
        
      </List>
    </div>
  );

  return (
    <div>
    
        <React.Fragment >
          
          <SwipeableDrawer
            
            // onClose={toggleDrawer( false)}
            // onOpen={toggleDrawer( true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}