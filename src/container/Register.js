import React,{useState} from 'react'
import '../components/style.css'
import  {useSelector} from 'react-redux'
import axios from 'axios'
import { useHistory } from 'react-router'

      
      const Register = () => {
      const history = useHistory

    
          const [Cdet,setCdet]= useState({
                "name": "",
                "pass":"",
                "email":"",
                "phone": Number,
                "cpass":""
          })

           function Setdat (event) {
                const key = event.target.name
                const val= event.target.value
                setCdet({...Cdet ,[key] : val})
                
          }

          const sendJSON = async (e)=>{
            e.preventDefault();
            const { name,email, pass ,phone,cpass} = Cdet;
            console.log("This is CCCCdetfe",Cdet)
            await axios.post({
                  method:"POST",
                  url: "http://localhost:9000/user",
                  data: { name,email, pass ,phone,cpass},
            })
                  .then((res) => {
                        console.log("inside thren",res.status)
                        // history.push("http://localhost:3000");
                  })
                  .catch((err) => { console.log("errrrrrrrrr",err) });
                
          }
//action="http://localhost:9000/user/register"

      return (
            <div className="signup">
                  <form  method ="POST" >
                        <div className="signup-head">
                              <h2>sign up</h2>
                        </div>
                        <div className="signup-form">
                              <label>Name</label>
                              <input type ="text" onChange={Setdat} id="a" placeholder="name" name="name" value={Cdet.name} ></input>
                            
                              <label>Email</label>
                              <input type ="email" onChange={Setdat} id="b" placeholder="email" name="email" value={Cdet.email}></input>
                             
                              <label>phone</label>
                              <input type ="Number" onChange={Setdat}  id="c" placeholder="email" name="phone" value={Cdet.phone}></input>
                              <label>Pass</label>
                              <input type ="text" onChange={Setdat} id="d" placeholder="password" name="pass" value={Cdet.pass}></input>
                              <label> Confrim Pass</label>
                              <input type ="text" onChange={Setdat} id="e" placeholder="Confirm password" name="cpass" value={Cdet.cpass}></input>
                  {/* <button type="submit">Submit</button> */}
                              
                              <button onclick={sendJSON}>Submit</button>
                        </div>
                  </form>
                  {/* <form action="http://localhost:9000/user" method="POST">
                       
                  <button type="submit">Submit</button>
                 </form> */}
            </div>
      )
}

export default Register
