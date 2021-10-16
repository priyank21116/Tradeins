import React,{useState} from 'react'
import './style.css'
import  {useSelector} from 'react-redux'
   

const AddressForm = () => {

      const [clientAddress,setclientAddress]=useState({
            Addline1:"",
            Addline2:"",
            City:"",
            State:"",
            Pincode:"",
            contactno:"",
            landMark:"",
      })

      function updateclient(event){
            let key=event.target.name;
            let value=event.target.value;
            setclientAddress({
                  ...clientAddress,
                  [key]:value,
            })


      }




      return (
            <div >
                  <form>
                        <div className="signup-head">
                              <h2>Fill address details below</h2>
                        </div>
                        <div className="signup-form">
                              <label>Address line 1*</label>
                              <input onChange={updateclient} type ="text"  name="Addline1" value={clientAddress.Addline1} required></input>
                              <label>Address line 2*</label>
                              <input onChange={updateclient} type ="text"  name="Addline2" value={clientAddress.Addline2} required></input>          
                              <label>City*</label>
                              <input onChange={updateclient} type ="text"  name="City" value={clientAddress.City} required></input>
                              <label>State</label>
                              <input onChange={updateclient} type ="text"  name="State" value={clientAddress.State} ></input>
                              <label>Pincode*</label>
                              <input onChange={updateclient} type ="number"  name="Pincode" value={clientAddress.Pincode} required></input>
                              <label>landMark*</label>
                              <input onChange={updateclient} type ="text"  name="landMark" value={clientAddress.landMark} required></input>
                              <label>Mobile no.*</label>
                              <input onChange={updateclient} type ="number"  name="contactno" value={clientAddress.contactno} required></input>

                        </div>
                  </form>
            </div>
      )
}

export default AddressForm
