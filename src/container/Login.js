import React, { useState } from 'react'
import xx from '../images/planeReg.png'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router'
import axios from 'axios'
const Login = () => {
      const history = useHistory
      const [Logdat, setLogdat] = useState({

            "Lpass": "",
            "Lemail": "",

      })

      function Setdat(event) {
            const key = event.target.name
            const val = event.target.value
            setLogdat({ ...Logdat, [key]: val })
            console.log(Logdat)

      }
      const LogdataSend = async (e) => {
            e.preventDefault();

            const { Lemail, Lpass } = Logdat;
            
           
            //       body: JSON.stringify({
            //             Lemail,Lpass
            //       })
            console.log("i axios")
            await axios({
                 method:"post",
                  url: 'http://localhost:9000/user/login',
                  data: { Lemail, Lpass },
            })
                  .then((res) => {
                        console.log("inside thren")
                        history.push("http://localhost:3000/");
                  })
                  .catch((err) => { console.log("errrrrrrrrr",err) });
      
}

      //       const data = await res.json();
      //       if(data.status===422 || !data){window.alert("Invalid registertion")}
      //       else if (data.status===201){
      //       history.push("http://localhost:3000/");
      //       }

      // }
      //history.push("/home")
      //  action="http://localhost:9000/user" action="http://localhost:9000/user/login" method="POST"
      return (
            <>
                  <form action="user/login" method="POST">
                        <div className="signup-head">
                              <h2>Login</h2>
                        </div>
                        <div className="signup-form">

                              <label>Email</label>
                              <input type="email" onChange={Setdat} placeholder="email" name="Lemail" value={Logdat.Lemail}></input>

                              <label>Pass</label>
                              <input type="text" onChange={Setdat}  placeholder="password" name="Lpass" value={Logdat.Lpass}></input>
                              {/* <button type="submit">Submit</button> */}
                              <button type="submit">Submit</button>


                        </div>
                  </form>

            </>
      )
}

export default Login
