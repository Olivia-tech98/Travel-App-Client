import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Modal } from '@mui/material';

class ReviewCreate extends React.Component {
    constructor(props){
        super(props)
        this.state={
            open: false,
            reviews:"",
            favorites: ""
        }
    }



    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFetch = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/review/create/1`, {
            method: 'POST',
            body: JSON.stringify({data: this.state}),
            headers: new Headers ({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.sessionToken
            })

        })
        .then((res)=> res.json())
        .then((data) => {
            this.props.handlefetch()
            this.props.updateReviewsArray();
            this.setState({
                id:'',
                reviews:'',
                favorites:''
            })
        })
    }

    render (){
        return(
            <Container>
                 <Modal
            open={this.props.open}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
              <Button onClick={this.handleFetch}>Leave Review</Button>
            <TextField id="outlined-basic" value={this.state.reviews} label="Outlined" variant="outlined" onChange={(e)=> this.setState({reviews:e.target.value})}/>
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
          </Box>
          </Modal>
            </Container>
           
        )
    }
}


export default ReviewCreate;