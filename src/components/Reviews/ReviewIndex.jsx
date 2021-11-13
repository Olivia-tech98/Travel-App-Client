import React from 'react'
import { Button } from '@mui/material';
import CountryIndex from '../Countries/CountryIndex';

class ReviewIndex extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }


    componentWillMount() {
        this.handleFetch();
      }


    handleClose = () => {
        console.log("button firing");
        this.setState({ open: false });
      };
    
      handleOpen = () => {
          this.setState({open: true})
      }

      componentDidMount() {
        this.fetchReviews()
    }

      handleFetch = () => {
        fetch('http://localhost:3000/review/get', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken,
            }),
        })
        .then((res)=> res.json())
        .then((getData)=> {
            this.setState({reviews: getData});
        })
      }


    render (){
        return(
            <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <Button onClick={() => this.handleOpen()}>Leave Review</Button>
                {/* <ReviewCreate sessionToken={this.props.sessionToken} handleClose={this.handleClose.bind(this)} handleFetch={this.handleFetch} open={this.state.open} /> */}
                <CountryIndex />
            </div>
        )
    }
}


export default ReviewIndex;