import React from 'react'
import ReviewCreate from './ReviewCreate';
import { Button } from '@mui/material';
import CountryIndex from '../Countries/CountryIndex';

class ReviewIndex extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }



    handleClose = () => {
        console.log("button firing");
        this.setState({ open: false });
      };
    
      handleOpen = () => {
          this.setState({open: true})
      }

    render (){
        return(
            <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <Button onClick={() => this.handleOpen()}>Leave Review</Button>
                <ReviewCreate />
                <CountryIndex />
            </div>
        )
    }
}


export default ReviewIndex;