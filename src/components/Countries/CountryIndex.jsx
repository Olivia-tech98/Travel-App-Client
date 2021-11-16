import React from "react";
import CountryTable from "./CountryTable";
import SecondPage from "../HomeIndex/SecondPage";
import { Route, Switch } from "react-router-dom";
import CountryCreate from "./CountryCreate";
import CountryEdit from "./CountryEdit";
import { Container, Button } from "@mui/material";
import ReviewCreate from "../Reviews/ReviewCreate";
import APIURL from "../helpers/enviroment";
import ReviewEdit from "../Reviews/ReviewEdit";

export default class CountryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      open: false,
      updatePressed: false,
      countryToUpdate: {},
      countryToReview: {},
      reviewActive: false,
      reviewToUpdate: {},
      reviewUpdateActive: false
    };
  }

  countryDelete = (event) => {
    console.log(event);
    fetch(`${APIURL}/country/delete/${event.target.id}`, {
      method: "DELETE",
      body: JSON.stringify({ data: { id: event.target.id } }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    }).then((res) => this.handleFetch());
  };

  setUpdateCountry = (country) => {
    this.setState({
      countryToUpdate: country,
      updatePressed: true,
    });
  };

  setUpdatePressed = (boolean) => {
    this.setState({
      updatePressed: boolean,
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
    this.setState({ open: true });
  };

  handleReviewOpen = () => {
    this.setState({ reviewActive: true });
  };

  handleReviewUpdateOpen = () => {
    this.setState({ reviewUpdateActive: true });
  };

  handleReviewClose = () => {
    this.setState({ reviewActive: false });
  };

  reviewToCreate = (country) => {
    this.setState({ countryToReview: country });
  };

  handleReviewUpdate = (review) => {
    this.setState({ reviewToUpdate: review });
  };

  handleFetch = () => {
    fetch(`${APIURL}/country/getAll`, {
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

  reviewDelete = (review) => {
    fetch(`${APIURL}/review/delete/${review.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ status: "Review Deleted" });
        this.handleFetch();
      });
  };





  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button onClick={() => this.handleOpen()}>Add Country</Button>
        <Container>
          {this.state.open ? (
            <CountryCreate
              sessionToken={this.props.sessionToken}
              handleClose={this.handleClose.bind(this)}
              handleFetch={this.handleFetch}
              open={this.state.open}
            />
          ) : (
            <></>
          )}
        </Container>
        <Container>
          {this.state.updatePressed ? (
            <CountryEdit
              t={this.state.updatePressed}
              update={this.countryUpdate}
              country={this.state.countryToUpdate}
              setUpdatePressed={this.setUpdatePressed}
              sessionToken={this.props.sessionToken}
            />
          ) : (
            <div></div>
          )}
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
              setUpdateCountry={this.setUpdateCountry}
              setUpdatePressed={this.setUpdatePressed}
              reviewDelete={this.reviewDelete}
              handleReviewUpdate={this.handleReviewUpdate}
              reviewToUpdate={this.state.reviewToUpdate}
              handleReviewUpdateOpen={this.handleReviewUpdateOpen}

              />
          </Route>
          <Route exact path="/SecondPage">
          <SecondPage countries={this.state.countries} />
        </Route>
        </Switch>
        {this.state.reviewActive && (
          <ReviewCreate
            sessionToken={this.props.sessionToken}
            countryToReview={this.state.countryToReview}
            handleFetch={this.handleFetch}
            handleReviewClose={this.handleReviewClose}
          />

        )}
        {this.state.reviewUpdateActive && (
          <ReviewEdit
          sessionToken={this.props.sessionToken}
          reviewToUpdate={this.state.reviewToUpdate} />
        )}
      </div>
    );
  }
}
