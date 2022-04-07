import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Weather from "../Weather/Weather";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

const SearchBar = () => {
  const classes = useStyles();

  const [inputchange, setInputChange] = useState<string>("");
  const [weather, setWeather] = useState<object>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputChange(e.target.value);
    console.log(inputchange);
  };

  const handleClick = async () => {
    await fetch(
      `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=/${inputchange}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <Box component="span" m={2}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Enter city"
          onChange={handleChange}
        />
        <Button
          variant="outlined"
          color="primary"
          size="medium"
          disabled={!inputchange}
          onClick={handleClick}
        >
          Search
        </Button>
      </form>
      <Weather weather={weather}></Weather>
    </Box>
  );
};

export default SearchBar;
