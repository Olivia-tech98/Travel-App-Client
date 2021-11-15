import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import{Box, Modal, IconButton} from  "@mui/material";
import APIURL from '../helpers/enviroment'

class CountryEdit extends React.Component {
    constructor(props){
        super(props)
        this.state={
            id: '',
            countryName: '',
            population: '',
            history: '',
            attractions: '',
            languages: '',
            safteyRates:''
        }
    }

    componentWillMount() {
        this.setState({ 
            id: this.props.country.id, 
            countryName: this.props.country.countryName,
            population: this.props.country.population,
            history: this.props.country.history,
            attractions: this.props.country.attractions,
            languages: this.props.country.languages,
            safteyRates: this.props.country.safteyRates
        })
    }
    
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }


    countryUpdate = (event) => {
      fetch(`${APIURL}/country/update/${this.state.id}`, {
        method: "PUT",
        body: JSON.stringify({ country: {...this.state} }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      }).then((res) => {
        this.props.setUpdatePressed(false);
        this.fetchCountries();
      });
    };

    render(){
        return(
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
              onSubmit={this.countryUpdate}
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
              label="Title"
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
              label="Description"
              type="text"
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
              label="Estimated Time to Complete (hrs)"
              // multiline
              // rows={5}
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
              label="Tools"
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
              label="Directions"
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
              label="Directions"
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
        )
    }
}

export default CountryEdit;