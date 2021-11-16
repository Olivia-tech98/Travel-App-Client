import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { Box, Modal, IconButton} from "@mui/material";
import APIURL from "../helpers/enviroment";
// import Box from "@mui/material/Box";

class CountryCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      countryName: "",
      population: "",
      history: "",
      attractions: "",
      languages: "",
      safetyRates: "",
    };
  }

  //   handleClickOpen = () => {
  //     this.setState({
  //       open: true,
  //     });
  //   };

  handleFetch = (event) => {
    console.log(event);
    event.preventDefault();
    //surround this with a conditional that checks to see if the user is an admin or not.
    console.log("hello");
    fetch(`${APIURL}/country/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      },
      body: JSON.stringify({
        country: {
          countryName: this.state.countryName,
          population: this.state.population,
          history: this.state.history,
          attractions: this.state.attractions,
          languages: this.state.languages,
          safteyRates: this.state.safetyRates,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // this.props.updateToken(data.sessionToken);
        this.props.handleFetch();
        this.props.handleClose();
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <Container>
        <Modal
          open={this.props.open}
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
                value={this.state.countryName}
                margin="dense"
                onChange={(e) => this.setState({ countryName: e.target.value })}
                id="title"
                name="title"
                label="Country Name"
                type="text"
                fullWidth
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                value={this.state.population}
                autoFocus
                margin="dense"
                // sx={{ m: 1, width: "60ch" }}
                onChange={(e) => this.setState({ population: e.target.value })}
                variant="outlined"
                id="description"
                name="description"
                label="Population"
                type="number"
                multiline
                rows={5}
                required
              ></TextField>
              <TextField
                fullWidth
                value={this.state.history}
                autoFocus
                margin="dense"
                // sx={{ m: 1, width: "60ch" }}
                onChange={(e) => this.setState({ history: e.target.value })}
                variant="outlined"
                id="estimatedTime"
                name="estimatedTime"
                type="text"
                label="History"
                multiline
                rows={5}
                required
              ></TextField>
              <TextField
                fullWidth
                value={this.state.attractions}
                autoFocus
                margin="dense"
                // sx={{ m: 1, width: "60ch" }}
                onChange={(e) => this.setState({ attractions: e.target.value })}
                variant="outlined"
                id="tools"
                name="tools"
                label="Attractions"
                type="text"
                multiline
                rows={5}
                required
              ></TextField>
              <TextField
                fullWidth
                value={this.state.languages}
                autoFocus
                margin="dense"
                // sx={{ m: 1, width: "60ch" }}
                onChange={(e) => this.setState({ languages: e.target.value })}
                variant="outlined"
                id="directions"
                name="directions"
                label="Languages"
                type="text"
                multiline
                rows={20}
                required
              ></TextField>
              <TextField
                fullWidth
                value={this.state.safetyRates}
                autoFocus
                margin="dense"
                // sx={{ m: 1, width: "60ch" }}
                onChange={(e) => this.setState({ safetyRates: e.target.value })}
                variant="outlined"
                id="directions"
                name="directions"
                label="Safety Rates"
                type="text"
                multiline
                rows={20}
                required
              ></TextField>
              <div>
                <Button
                  sx={{ mt: 4 }}
                  fullWidth
                  id="modal-description"
                  color="secondary"
                  variant="contained"
                  type="submit"
                >
                  Post
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
    );
  }
}

export default CountryCreate;
