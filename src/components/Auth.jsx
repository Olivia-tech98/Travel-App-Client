import React from 'react'
import { Route} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'

export default function Auth() {
    return(
        <div>
            <Route exact path="/auth/signup">
                <Signup />
            </Route>
            <Route exact path="/">
                <Login />
            </Route>
        </div>
    )
}