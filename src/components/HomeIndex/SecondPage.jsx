import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default class SecondPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

cards = [1, 2, 3, 4, 5, 6];

render() {
  return (
      <div>
      {this.props.countries.map((country) => (
        <Grid item key={country.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              component="img"
              sx={{
                pt: "5.25%",
              }}
              image="https://www.varietycruises.com/images/cruises_in_between/spain_portugal/variety_cruises_slideshow_spain_3.jpg"
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {country.population}
              </Typography>
              <Typography>
                {country.attractions}
              </Typography>
              <Typography>
                {country.languages}
              </Typography>
              <Typography>
                {country.safteyRates}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
            </CardActions>
          </Card>
        </Grid>
        //  <div>
        //      <p>
        //       {country.countryName}
        //   </p>
        //   <p>
        //       {country.population}
        //   </p>
        //   <p>
        //       {country.history}
        //   </p>
        //   <p>
        //       {country.attractions}
        //   </p>
        //   <p>
        //       {country.languages}
        //   </p>
        //   <p>
        //       {country.safteyRates}
        //   </p>
        //   </div>
      ))}
    </div>
  );
}
}
