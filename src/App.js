import './App.css';
// import Signup from './components/Signup'
// import Login from './components/Auth/Login'
import React from 'react'
import Auth from './components/Auth/Auth'
import {BrowserRouter as Router} from 'react-router-dom'
// import HomeIndex from './components/HomeIndex/Home'
import CountryIndex from "./components/Countries/CountryIndex"
import Navbar from './components/HomeIndex/Navbar'
// import SecondPage from './components/HomeIndex/SecondPage'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      sessionToken: ''
    }
  }

  componentDidMount(){
    if(localStorage.getItem('sessionToken')){
      this.setState({sessionToken:localStorage.getItem('sessionToken')})
    }
  }

    updateToken= (newToken) => {
    if(newToken===undefined) {
      return
    }else{
      localStorage.setItem('sessionToken', newToken)
      this.setState({sessionToken: newToken})
    }
  }

  render (){
    return ( 
      <div>
      <Router>
          {this.state.sessionToken ? <CountryIndex sessionToken={this.state.sessionToken}/> : <Auth updateToken={this.updateToken}/>}
      </Router>
      <Navbar clearToken={this.state.clearToken}/>
      </div>
      )}
  }
 

export default App;