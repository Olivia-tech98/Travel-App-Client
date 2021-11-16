import React from "react";
import APIURL from '../helpers/enviroment'
import {
  Container,
  Modal,
  Box,
  TextField,
  IconButton,
  Button,
} from "@mui/material";

class ReviewEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: "",
      favorites: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.update(event, this.state);
  };

  componentWillMount() {
    this.setState({
      reviews: this.props.workout.reviews,
      favorites: this.props.workout.favorites,
    });
  }


  reviewToUpdate = (review) => {
    fetch(`${APIURL}/review/update/${this.props.countryToReviewUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
          review: {
            reviews: this.state.reviews,
            favorites: this.state.favorites
          }
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    }).then((res) => {
      this.setState({ updatePressed: false });
      this.fetchReviews();
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Modal
            open={true}
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
                onSubmit={this.reviewToUpdate}
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
                  onChange={(e) =>
                    this.setState({ reviews: e.target.value })
                  }
                  id="title"
                  name="title"
                  label="Edit Review"
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
                    Update
                  </Button>
                  <Button
                    sx={{ mt: 4 }}
                    fullWidth
                    id="modal-description"
                    color="secondary"
                    variant="contained"
                    onClick={() => this.props.setUpdatePressed(false)}
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

export default ReviewEdit;
