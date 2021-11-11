import React from 'react'
import Signup from './Signup'
import Login from './Login'
import { useState } from "react";
import {Button} from '@mui/material'




export default function Auth(props) {
    const [loginShowing, setLoginShowing] =useState(false);


    const toggleView = () => setLoginShowing(!loginShowing);
    return(
        <div>
            {loginShowing ? (
                <Signup updateToken={props.updateToken} toggleView={toggleView} />
            ) : (
                <Login updateToken={props.updateToken} toggleView={toggleView}/>
            )
           
        
       
   }
            <Button onClick={toggleView}
              variant="contained"
              sx={{ mt: 3, mb: 2, left: 800 }}
            >
              Don't have an account? Signup
            </Button>
     </div>
)
}