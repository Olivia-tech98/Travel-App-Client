//this needs to be the parent of reviewCreate and reviewEdit
//you can also display reviews (fetch GET) in here as well. Then pass function as props to reviewCreate/reviewEdit then call it in those components
import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CountryCreate from "./CountryCreate";
import CountryEdit from "./CountryEdit";
import Box from "@mui/material/Box";
// import {Route} from 'react-router-dom'
// import SecondPage from "../HomeIndex/SecondPage";
// import { Link } from 'react-router-dom';

export default class CountryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  cards = [1, 2, 3, 4, 5, 6];

  render() {
    return (
      <div>
        <CountryCreate
          token={this.props.token}
          updateCountryArray={this.props.fetchCountries}
        />
        <div>
          {this.props.updatePressed ? (
            <CountryEdit
              t={this.props.updatePressed}
              update={this.props.countryUpdate}
              country={this.props.countryToUpdate}
            />
          ) : (
            <div></div>
          )}
        </div>
        {this.props.countries.map((country) => (
          <Grid item key={country.id} xs={12} sm={6} md={4}>
            <Card 
              sx={{ height: "100%", display: "flex", flexDirection: "column", backgroundColor: "#FFFAF0"}}
            >
              {/* <CardMedia
                component="img"
                sx={{
                  pt: "5.25%",
                }}
                image="https://www.iabtravel.com/wp-content/uploads/2017/07/TURKEY-COUNTRY-IMAGE.jpg"
                alt="random"
              /> */}
              <Button
                id={country.id}
                onClick={(e) => this.props.countryDelete(e)}
              >
                Delete
              </Button>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {country.countryName}
                </Typography>
                <Typography>
                  {country.history}
                </Typography>
                <Typography>
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
                {country.reviews.map((review) => (
                  <Box>
                    <p>{review.reviews}</p>
                    <Button onClick={()=> {
                      this.props.handleReviewUpdate(review)
                      this.props.handleReviewUpdateOpen()
                    }}>Edit Review</Button>
                    <Button
                      onClick={() => {
                        this.props.reviewDelete(review);
                      }}
                    >
                      Delete Review
                    </Button>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => {
                    this.props.handleReviewOpen();
                    this.props.reviewToCreate(country);
                  }}
                >
                  Leave Review
                </Button>
                <Button size="small" href="/SecondPage">
                  View
                </Button>
                <Button
                  onClick={() => this.props.setUpdateCountry(country)}
                  size="small"
                >
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </div>
    );
  }
}
