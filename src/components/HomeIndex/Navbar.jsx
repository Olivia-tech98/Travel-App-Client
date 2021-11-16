import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clearToken = () => {
    localStorage.clear()
  }

  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar top="null">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Traveler's Education
            </Typography>
            <Button href="/" onClick={()=> {
              this.clearToken();
            }} color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Navbar;
