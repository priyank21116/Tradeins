import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import './style.css'
import Container from '@material-ui/core/Container';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
const Carousell= () => {
//  https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60

// https://images.unsplash.com/photo-1614252368727-99517bc90d7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb24lMjBtZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
var item = [
            {
                  "id": 1,
                  "media": ' https://images.unsplash.com/photo-1614252368727-99517bc90d7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb24lMjBtZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            },
            {
                  "id": 2,
                  "media": 'https://images.unsplash.com/photo-1614252368727-99517bc90d7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb24lMjBtZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',     
            },
            {
                  "id": 3,
                  "media": 'https://images.unsplash.com/photo-1614252368727-99517bc90d7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb24lMjBtZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            
            },]






      return (
            <div>

                  <div style={{ position: 'relative', width: '100%',backgroundColor:'black' }}>
                  <Container maxWidth="lg">
                  <Carousel className="home-carousel">
            {
                item.map( (item, i) => <Item key={i} item={item} /> )
            }
                  </Carousel>
                  </Container>
                  </div>

            </div>
      )
}



function Item(props)
{
    return (
        <Paper>
        <img className="home-caro-image" src={props.item.media} alt="xyz" />
        </Paper>
    )
}

export default Carousell
