import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './containerStyle.css'
import CancelIcon from '@material-ui/icons/Cancel';
import { red, green } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AddressForm from '../components/AddressForm'
import PaymentOptions from '../components/PaymentOptions';
import './containerStyle.css'
import Finallist from '../components/Finallist';
import Navbar from '../components/Navbar';
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles((theme) => ({
      root: {
            width: '100%',
           
            backgroundColor: theme.palette.background.paper,
      },
      nested: {
            paddingLeft: theme.spacing(4),
      },
      cross: {
            color: red,
            backgroundColor: red,
      },
      tick: {
            color: green,
            backgroundColor: green,
      }
}));


// (isFilled ?<CancelIcon className={classes.cross} />:<CheckCircleIcon className={classes.tick} />)


export default function Checkout() {
      const classes = useStyles();
      const [Aopen, setAOpen] = useState(false);
      const [Popen, setPOpen] = useState(false);
      const [PisFilled, setPisFilled] = useState(false);
      const [AisFilled, setAisFilled] = useState(false);

      const Afilled = () => { setAisFilled(!AisFilled) }
      const Pfilled = () => { setPisFilled(!PisFilled) }

      const AhandleClick = () => { setAOpen(!Aopen); };
      const PhandleClick = () => { setPOpen(!Popen); };


      return (
            <>
            <Navbar />
            
            <Container maxWidth="md" className="checkout">
                  <Grid container spacing={3} item >

                        <Grid item xs={8}>



                              <List
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    subheader={
                                          <ListSubheader component="div" id="nested-list-subheader">
                                                Fill the requirements below
                             </ListSubheader>
                                    }
                                    className={classes.root}
                              >
                                    <ListItem button>
                                          <ListItemIcon>
                                                <CheckCircleIcon className={classes.tick} />

                                          </ListItemIcon>
                                          <ListItemText primary="Cart Finalised" />
                                    </ListItem>
                                    <ListItem button onClick={AhandleClick}>
                                          <ListItemIcon>
                                                {(AisFilled ? <CancelIcon className={classes.cross} /> : <CheckCircleIcon className={classes.tick} />)}

                                          </ListItemIcon>
                                          <ListItemText primary="Delivery Address" onClick={Afilled} />
                                          {Aopen ? <ExpandLess /> : <ExpandMore />}

                                    </ListItem>
                                    <Collapse in={Aopen} timeout="auto" unmountOnExit>
                                          <List component="div" disablePadding>
                                                <ListItem button className={classes.nested}>
                                                      <AddressForm />
                                                </ListItem>
                                          </List>
                                    </Collapse>



                                    <ListItem button onClick={PhandleClick} >
                                          <ListItemIcon>
                                                {(PisFilled ? <CancelIcon className={classes.cross} /> : <CheckCircleIcon className={classes.tick} />)}

                                          </ListItemIcon>
                                          <ListItemText primary="Inbox" onClick={Pfilled} />
                                          {Popen ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                    <Collapse in={Popen} timeout="auto" unmountOnExit>
                                          <List component="div" disablePadding>
                                                <ListItem button className={classes.nested}>
                                                      <PaymentOptions />
                                                </ListItem>
                                          </List>
                                    </Collapse>
                              </List>


                        </Grid>
                        <Grid  item xs={4}>
                                 <Finallist className="finalbill"/>

                        </Grid>
                 
                        </Grid>
             </Container>
           
             </>

      );
}
