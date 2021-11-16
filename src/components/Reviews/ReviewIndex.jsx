// import React from "react";
// import APIURL from "../helpers/enviroment";
// import ReviewEdit from "./ReviewEdit";
// import Container from '@mui/material'

// class ReviewIndex extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       reviews: [],
//       favorites: true,
//       updatePressed: false,
//       reviewToUpdate: {},
//       review: "",
//     };
//   }

//   componentWillMount() {
//     this.handleFetch();
//   }

//   handleClose = () => {
//     console.log("button firing");
//     this.setState({ open: false });
//   };

//   handleOpen = () => {
//     this.setState({ open: true });
//   };

//   componentDidMount() {
//     this.fetchReviews();
//   }

//   setUpdateReview = (event, review) => {
//       this.setState({
//           reviewTpUpdate: review,
//           updatePressed: true
//       })
//   }

//   setUpdatePressed = (boolean) => {
//     this.setState({
//       updatePressed: boolean,
//     });
//   };

//   handleFetch = () => {
//     fetch(`${APIURL}/review/get`, {
//       method: "GET",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: this.props.sessionToken,
//       }),
//     })
//       .then((res) => res.json())
//       .then((getData) => {
//         this.setState({ reviews: getData });
//       });
//   };

// //   reviewToUpdate = (review) => {
// //     fetch(`${APIURL}/review/update/${this.props.countryToReviewUpdate.id}`, {
// //       method: "PUT",
// //       body: JSON.stringify({
// //           review: {
// //             reviews: this.state.reviews,
// //             favorites: this.state.favorites
// //           }
// //       }),
// //       headers: new Headers({
// //         "Content-Type": "application/json",
// //         Authorization: this.props.sessionToken,
// //       }),
// //     }).then((res) => {
// //       this.setState({ updatePressed: false });
// //       this.fetchReviews();
// //     });
// //   };


//   render() {
//     return (
//       <div>
//           <Container>
//           {this.state.updatePressed ? (
//             <ReviewEdit
//               t={this.state.updatePressed}
//               setUpdatereview={this.setUpdateReview}
//               update={this.reviewUpdate}
//               setUpdatePressed={this.setUpdatePressed}
//               sessionToken={this.props.sessionToken}
//             />
//           ) : (
//             <div></div>
//           )}
//         </Container>
//       </div>
//     );
//   }
// }

// export default ReviewIndex;
