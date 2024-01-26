import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { styled } from "@mui/system";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";
import Suggestions from "./Suggestions";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E6",
  700: "#0059B3",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Listbox = styled("ul")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"
  };
  z-index: 1;
  `
);

const AddressDetailForm = () => {
  const [dropDown, setDropDown] = useState(false);
  const { register, handleSubmit } = useForm();
  const [countryArr, setCountryArr] = useState({
    country: [],
    filteredCountry: [],
  });

  const onSubmitHandler = (data) => {
    console.log(data);
  };
  const handleOpen = () => setDropDown(true);
  const handleClose = () => setDropDown(false);

  const handleFilter = (e) => {
    const value = e.target.value;
    const filterArr = countryArr?.country?.filter((item) =>
      item.name?.common.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filterArr);
    setCountryArr((prevData) => ({
      ...prevData,
      filteredCountry:filterArr,

    }));
  };

  const getCountry = async () => {
    const res = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name"
    );
    setCountryArr({ country: res?.data, filteredCountry: res.data });
    return res?.data;
  };

  const { data: country, isLoading } = useQuery({
    queryFn: () => getCountry(),
    queryKey: ["country"],
  });

  if (isLoading) {
    return <h5>Loading Countries</h5>;
  }
  console.log(country);
  return (
    <div>
      <form
        style={{
          display: "flex",
          gap: "2vw",
          flexWrap: "wrap",
        }}
        action=""
      >
        <TextField
          {...register("Address")}
          placeholder="Address"
          label="Address"
          type="text"
        />
        <TextField
          {...register("State")}
          placeholder="State"
          label="State"
          type="text"
        />
        <TextField
          {...register("City")}
          placeholder="City"
          label="City"
          type="text"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            onClick={handleOpen}
            placeholder="Country"
            onChange={handleFilter}
            label="Country"
            type="text"
          />
          <Suggestions
            handleClose={handleClose}
            country={countryArr.filteredCountry}
          />
        </div>
            <TextField
              {...register("Pincode")}
              placeholder="Pincode"
              label="Pincode"
              type="Number"
            />

<Button variant="contained" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default AddressDetailForm;
