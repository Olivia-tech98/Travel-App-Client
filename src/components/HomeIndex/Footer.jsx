import React from 'react'
import {Typography, Link,} from '@mui/material'

class Copyright extends React.Component {
    render () {
        return (
            <Typography variant="body2" color="text.secondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="https://mui.com/">
                Traveler's Education
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
        )
    
    }
  
  }
  export default Copyright;