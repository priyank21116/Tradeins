import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {
      showSelectedItem,
      removeSelectedItem,
      addToCart,
} from "../redux/actions/actionCreater";
import './containerStyle.css'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Navbar from "../components/Navbar"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';


const ItemDetails = () => {
      const [quantity, setQuantity] = useState(1)
      const[item ,setitem] =useState({})
     const[toAddOnCartitem,settoAddOn] =useState({})
     const [wishclicked,setwishclicked]=useState(false)
     const [add,setadd] =useState(false)
     

      const { itemid } = useParams();
   
      const getAllNotes =async () => {
            const url = `http://localhost:9000/item/${itemid}`
            await axios.get(url)
              .then((response) => {
                  //   console.log("RESSSSPONSE",response)
                  //   console.log("RESSDAATAA",response.data)


                   setitem(response.data)
                  // console.log("IIIIIIIITEM",item)
        
              })
              .catch(err => console.log(`Error came: ${err}`));
          };

      const updateDataBroweHIstry= async()=>{
            const url = `http://localhost:9000/user/${itemid}`
            // console.log("UPDATA",url)

            await axios.patch(url, { "browseHistory": itemid , "_uid":"60d6f9736102934ad071c430"})
            .then((res) => {
                  console.log("Added in History",res)

            }).catch(err => console.log(`Error came: ${err}`));

          }
          const updateDataWishlist= async()=>{
            const url = `http://localhost:9000/user/${itemid}/wishlist`
            console.log("WISHHHHHHHHHUPDATA",url)
            await axios.patch(url, {wishlist:itemid , _uid: "60d6f9736102934ad071c430"})
            .then((res) => {
                  console.log("Added Wish list",res)

            }).catch(err => console.log(`Error came: ${err}`));

          }

          const Addingtocart= async()=>{
            const url = `http://localhost:9000/user/${itemid}/addtocart`
            await axios.patch(url,{"iitem":toAddOnCartitem,_uid: "60d6f9736102934ad071c430"})
            .then((res) => {
                  console.log("Added Wish list",res)

            }).catch(err => console.log(`Error came: ${err}`));

          }

      //     const Liked=()=>{
      //           setwishclicked(!wishclicked)
               
      //           if(wishclicked===true){
      //             updateDataWishlist();
      //           }
      //     }
      
        
        
          useEffect(() => {
            getAllNotes();
            // updateDataBroweHIstry();
        
          }, [itemid])
      
      const { image, title, price, category, description } = item;
      // console.log("IIITEM",item)

      const addToCart = async ()=>{
           await settoAddOn({...toAddOnCartitem,"qunat":quantity},
                  
                 
            );
          
            console.log("CCCCAAAAARRRRRTTTT",toAddOnCartitem)
            Addingtocart();

      }

      const dispatch = useDispatch();

      // useEffect(() => {
      //       if (id && id !== "") dispatch(showSelectedItem(deatiledProd));
      //       return () => {
      //             dispatch(removeSelectedItem())
      //       }
      // }, [id]);

      const discount = 6;
      return (
            <div >
                  {Object.keys(item).length === 0 ? (
                        <div>...Loading</div>
                  ) : (

                        <section id="header" className="d-flex align-items-center">
                        <Navbar />
                              <Container maxWidth="md" id="detail_conatainer">
                                    <Grid container spacing={4} item >

                                          <div className="container-fluid nav_bg">
                                                <div className="row">
                                                      <Grid item xs={12} md={6}>
                                                            <div className="">
                                                                  <img className="details_img" alt="homeimg" src={image} />

                                                            </div>
                                                      </Grid>
                                                      <Grid item xs={12} md={6}>

                                                            <div className="detail_text">
                                                                  <h1>{title}</h1>
                                                                  <h4 className=""> <strong className="brand-name">#{category}</strong></h4>
                                                                  <h5>{description}</h5>
                                                                  <div className="rowprice">
                                                                        <div className="col-6">
                                                                              <Typography variant="body1" id="cardprice1">
                                                                                    ${price}
                                                                              </Typography>
                                                                              <span>6% off</span>
                                                                        </div>
                                                                        <div className="col-6">
                                                                              <Typography variant="body1" id="cardprice2">
                                                                                    ${(price - discount / 100 * price).toFixed(2)}
                                                                              </Typography>
                                                                        </div>


                                                                  </div>
                                                                  <Grid item md={4}>
                                                                  <div className="details_info_incdec xyz">
                                                                        <span className="dec" onClick={() => { if (quantity > 1) { setQuantity(quantity - 1) } }}><RemoveIcon /></span>
                                                                        <span className="quantity">{quantity}</span>
                                                                        <span className="inc" onClick={() => setQuantity(quantity + 1)}><AddIcon /></span>

                                                                        
                                                                  </div>
                                                                  </Grid>
                                                                  <Grid item md={8}>
                                                                  <div className="mt-6 xyz" id="detailaddtocartbuton">
                                                                        <button type="button" class="btn btn-primary" onClick={()=>{setadd(!add)}}> 
                                                                        {(add && addToCart)}
                                                                        ADD TO CART </button>
                                                                          
                                                                  </div>
                                                                  <button onClick={()=>{ setwishclicked(!wishclicked)}}>
                                                                      {(wishclicked) && updateDataWishlist
        
                                                                      (!wishclicked) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                                                   </button>
                                                                  </Grid>
                                                            </div>
                                                      </Grid>

                                                </div>
                                          </div>
                                    </Grid>
                              </Container>

                        </section>
                  )}

            </div>

      )
}

export default ItemDetails;