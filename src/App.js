import './App.css';
// import Signup from './components/Signup'
// import Login from './components/Login'
import {useState} from 'react'
import Auth from './components/Auth'
import {Switch, BrowserRouter as Router} from 'react-router-dom'


function App() {
  const [sessionToken, setSessionToken] = useState('')

  const updateToken= (newToken) => {
    if(newToken===undefined) {
      return
    }else{
      localStorage.setItem('sessionToken', newToken)
      setSessionToken(newToken)
    }
  }
  return ( 
  <Router>
  <Switch >
  <Auth updateToken={updateToken} />
   </Switch>
  </Router>

  )}

export default App;
