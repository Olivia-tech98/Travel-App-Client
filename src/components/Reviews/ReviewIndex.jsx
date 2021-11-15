import React from "react";
import CountryIndex from "../Countries/CountryIndex";
import APIURL from "../helpers/enviroment";
import CountryTable from "./CountryTable";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      updatePressed: false,
      reviewToUpdate: {},
      review: "",
    };
  }

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

  componentDidMount() {
    this.fetchReviews();
  }

  handleFetch = () => {
    fetch(`${APIURL}/review/get`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((getData) => {
        this.setState({ reviews: getData });
      });
  };

  reviewToUpdate = (event, reviews) => {
    fetch(`${APIURL}/review/update/${this.props.countryToReviewUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({ update: reviews }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    }).then((res) => {
      this.setState({ updatePressed: false });
      this.fetchReviews();
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
      .then((data) => this.setState({ status: "Review Deleted" }));
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />

        {/* <CountryTable reviewDelete={this.reviewDelete} /> */}
        {/* <Button onClick={() => this.handleOpen()}>Leave Review</Button> */}
        {/* <ReviewCreate sessionToken={this.props.sessionToken} handleClose={this.handleClose.bind(this)} handleFetch={this.handleFetch} open={this.state.open} /> */}
        {/* <CountryIndex /> */}
      </div>
    );
  }
}

export default ReviewIndex;
