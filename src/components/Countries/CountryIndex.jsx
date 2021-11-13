import React from "react";
import CountryTable from "./CountryTable";
import SecondPage from "../HomeIndex/SecondPage"
import { Route, Switch} from "react-router-dom";
import CountryCreate from "./CountryCreate";
import CountryEdit from "./CountryEdit";
import { Container, Button } from "@mui/material";
import ReviewCreate from "../Reviews/ReviewCreate";

export default class CountryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      open:false,
      updatePressed: false,
      countryToUpdate: {},
      countryToReview: {},
      reviewActive: false
    };
  }




  countryDelete = (event) => {
      console.log(event)
      fetch(`http://localhost:3000/country/delete/${event.target.id}`, {
          method:'DELETE',
          body: JSON.stringify({data: {id: event.target.id} }),
          headers: new Headers({
              'Content-Type' : 'application/json',
              'Authorization': this.props.sessionToken
          })
      })
      .then((res)=> this.handleFetch())
  }


  countryUpdate = (event, country) => {
    fetch(`http://localhost:3000/country/update/${country.id}`, {
      method: "PUT",
      body: JSON.stringify({ data: country }),
      headers: new Headers({
        "Content-Type": "application/json",
        Auhtorization: this.props.sessionToken,
      }),
    }).then((res) => {
      this.setState({ updatePressed: false });
      this.fetchCountries();
    });
  };

  setUpdateCountry = (event, country) => {
    this.setState({
      countryToUpdate: country,
      updatePressed: true,
    });
  };

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


  handleReviewOpen = () => {
    this.setState({reviewActive: true})
}


  reviewToCreate = (country) => {
    this.setState({countryToReview: country})
  }

  handleFetch = () => {
    fetch("http://localhost:3000/country/getAll", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((response) => response.json())
      .then((getData) => {
        this.setState({ countries: getData });
        console.log(getData);
      });
  };

  render() {
    // const countries = this.state.countries.length >= 1 ?    
    return (
        <div>
            {/* <CountryTable countries={this.state.countries} 
              update={this.setUpdatedCountry} />  */}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
     <Button onClick={() => this.handleOpen()}>Add Country</Button>
     <Button onClick={() => this.handleOpen()}>Edit Country</Button>
     {/* <Button onClick={() => this.handleOpen()}>Delete Country</Button> */}
          <Container>
              {this.state.open ? 
              <CountryCreate sessionToken={this.props.sessionToken} handleClose={this.handleClose.bind(this)} handleFetch={this.handleFetch} open={this.state.open} />
              : <></>}
          </Container>
                <Container>
                    {
                         this.state.updatePressed ? <CountryEdit t={this.state.updatePressed} update={this.countryUpdate} country={this.state.countryToUpdate} /> 
                         : <div></div>
                    }
                </Container>
        <Switch> 
          <Route exact path="/">
            <CountryTable
            handleReviewOpen={this.handleReviewOpen}
            reviewToCreate={this.reviewToCreate}
            countryDelete={this.countryDelete}
              token={this.props.sessionToken}
              t={this.state.updatePressed}
              update={this.countryUpdate}
              country={this.state.countryToUpdate}
              updateCountryArray={this.fetchCountries}
              countries={this.state.countries}
              />
          </Route>
          <Route exact path="/SecondPage">
            <SecondPage countries={this.state.countries} />
          </Route>
        </Switch>
        {this.state.reviewActive && (
               <ReviewCreate sessionToken={this.props.sessionToken} countryToReview={this.state.countryToReview}/> 
        )}
      </div>
            //   </div>
    );
  }
}
