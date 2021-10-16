import React, { useEffect } from 'react'
import '../components/style.css'
import axios from 'axios'
import Navbar from '../components/Navbar'
import ItemCard from '../components/ItemCard'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Carousell from '../components/Carousel'
import { useSelector, useDispatch } from 'react-redux'
import { } from "../redux/actions/actionCreater"
import {showAllProduct} from '../redux/actions/actionCreater'




const Home = () => {
  
  const dispatch = useDispatch();
  

  const getAllNotes =async () => {
    const url = "http://localhost:9000/item"
    await axios.get(url)
      .then((response) => {
        const allNotes = response.data;
        console.log(response.data)
        dispatch(showAllProduct(allNotes));

      })
      .catch(err => console.log(`Error came: ${err}`));
  };

  useEffect(() => {
    getAllNotes();

  }, [])


  const prodfRedu = useSelector(state => state.allItems.listarray)
  console.log(prodfRedu)



  return (

    <>
      <div className="discout-home-top"> 20% cashback for new users | Code : OGB24379#Q</div>
      <Navbar />
      <Carousell />


      <div style={{margin: '100px'}} >
        <Container maxWidth="lg" >
          <Grid container spacing={5} item >
            {prodfRedu.map((item,index) =>
              <Grid item xs={12} sm={6} md={3}>
               
                  <ItemCard i ={item} key={index} />
              
              </Grid>
            )}
          </Grid>
        </Container>
      </div>
    </>

  )
}

export default Home
