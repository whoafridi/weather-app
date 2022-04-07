import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
});

interface Props {
  weather: object;
}

const Weather: React.FC<Props> = ({ weather }) => {
  const { current, location, success, error }: any | string = weather;
  const classes = useStyles();
  return (
    <>
      {success === false ? (
        <p>{error.code === 615 && "Search for desire city"}</p>
      ) : (
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <Box mx="auto">
                  <img
                    src={current?.weather_icons[0]}
                    alt={current?.weather_descriptions[0]}
                  />
                </Box>
                <p>{current?.weather_descriptions[0]} </p>

                <h3>{location?.country}</h3>
                <h6>{location?.name}</h6>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <h3>
                  Latitude: {location?.lat} Longitude: {location?.lon}
                </h3>
                <h5>
                  Temparature: <span>{current?.temperature}</span>
                </h5>
                <h5>
                  Wind Speed: <span>{current?.wind_speed}</span>
                </h5>
                <h5>
                  Precip: <span>{current?.precip}</span>
                </h5>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};

export default Weather;
