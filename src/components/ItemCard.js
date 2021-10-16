import React from 'react';
import Rating from 'material-ui-rating';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './style.css'
import { Typography, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';


export default function ItemCard(props) {
  var discount=6;
  return (
    
    <Card className="home-card" key={props.i._id}>
      <CssBaseline />
      <main>
        <div className='container' >
          <Container className='cardGrid' maxWidth="md" style={{ padding: 0, }}>
            <Grid container >
              <Card className='card' >
              <Link to={`/details/${props.i._id}`}>
                <CardMedia
                  className='CardMedia'

                  image={props.i.image}

                  title="image here"
                  id="cardimg"

                />
                </Link>
                <CardContent className='CardContent' >
                <Typography variant="body2">
                    #{props.i.category}
                  </Typography>
                  <Typography gutterBottom variant="h6">
                    {props.i.title}

                  </Typography>
                  <div className="row">
                  <div className="col-6">
                  <Typography variant="body1" id="cardprice1">
                     ${props.i.price}
                  </Typography>
                  <span>6% off</span>
                  </div>
                  <div className="col-6">
                  <Typography variant="body1" id="cardprice2">
                     ${(props.i.price-discount/100*props.i.price).toFixed(2)}
                  </Typography>
                  </div>


                  </div>
                  </CardContent>


                  <div className="row">
                  {/* <div className="col-6">
                  <Rating
                  size="small"
                    value={3.5}
                    max={5}
                    onChange={(i) => console.log('onChange ' + i)}
                    readOnly
                    id="itemrating"
                    row= '1'
                  />
                  </div> */}
                  <div className="col-6">
              
               
        
                
                  <Link to={`/details/${props.i._id}`}>
                    <Button variant="outlined" color="primary">
                    
                      Details
                    </Button>
                    </Link>
                   
                 
                     <Button variant="contained" color="primary">
                      Buy now
                    </Button>
                     
               


                </div>
                </div>
              </Card>




            </Grid>
          </Container>
        </div>
      </main>



    </Card>
  );
}



