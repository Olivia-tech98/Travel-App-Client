import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Modal, IconButton } from "@mui/material";
import APIURL from "../helpers/enviroment";

class ReviewCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      countryId: "",
      reviews: "",
      favorites: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFetch = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/review/create/${this.props.countryToReview.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        },
        body: JSON.stringify({
          review: {
            reviews: this.state.reviews,
            // favorites: this.state.favorites,
          },
        }),
      }
    )
      .then((res) => res.json())
      .then((reviewData) => {
        // this.props.handleFetch();
        // this.props.updateReviewsArray();
        this.setState({
          countryId: "",
          reviews: "",
          favorites: "",
        });
      });
  };
  render() {
    return (
      <div>
        <Container>
          <Modal
            open={this.state.open}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "800",
                height: "800",
                maxWidth: "100%",
                maxHeight: "100%",
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Box
                component="form"
                  onSubmit={this.handleFetch}
                sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              >
                <IconButton
                  aria-label="close"
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                  }}
                ></IconButton>

                <TextField
                  autoFocus
                  value={this.state.reviews}
                  margin="dense"
                  onChange={(e) => this.setState({ reviews: e.target.value })}
                  id="title"
                  name="reviews"
                  label="Leave a Review"
                  type="text"
                  fullWidth
                  variant="outlined"
                  required
                />
                <div>
                  <Button
                    sx={{ mt: 4 }}
                    fullWidth
                    id="modal-description"
                    color="secondary"
                    variant="contained"
                    type="submit"
                  >
                    Post a Review
                  </Button>
                  <Button
                    sx={{ mt: 4 }}
                    fullWidth
                    id="modal-description"
                    color="secondary"
                    variant="contained"
                    onClick={() => this.props.handleClose()}
                  >
                    Cancel
                  </Button>
                </div>
              </Box>
            </Box>
          </Modal>
        </Container>
      </div>
    );
  }
}
export default ReviewCreate;
