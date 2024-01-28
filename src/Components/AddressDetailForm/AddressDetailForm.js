import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Suggestions from "./Suggestions";
const AddressDetailForm = ({ setFormData }) => {
  const [dropDown, setDropDown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [countryArr, setCountryArr] = useState({
    country: [],
    filteredCountry: [],
  });
  const [countrySelected, setCountrySelected] = useState("");

  // will directly update input value
  const onSubmitHandler = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
      countrySelected,
    }));
    console.log({
      ...data,
      countrySelected,
    });
  };
  const handleOpen = () => setDropDown(true);
  const handleClose = (value) => {
    setCountrySelected(value);
    setDropDown(false);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setCountrySelected(value);
    if (!dropDown) {
      setDropDown(!dropDown);
    }
    const filterArr = countryArr?.country?.filter((item) =>
      item.name?.common.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filterArr);
    setCountryArr((prevData) => ({
      ...prevData,
      filteredCountry: filterArr,
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
        onSubmit={handleSubmit(onSubmitHandler)}
        action=""
      >
        <TextField
          {...register("Address")}
          placeholder="Address"
          label="Address"
          type="text"
          sx={{ minWidth: 260 }}
        />
        <TextField
          {...register("State")}
          placeholder="State"
          label="State"
          type="text"
          sx={{ minWidth: 260 }}
        />
        <TextField
          {...register("City")}
          placeholder="City"
          label="City"
          type="text"
          sx={{ minWidth: 250 }}
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
            value={countrySelected}
            onChange={handleFilter}
            label="Country"
            type="text"
            sx={{ minWidth: 400 }}
          />
          <div
            style={{
              display: dropDown ? "flex" : "none",
            }}
          >
            <Suggestions
              handleClose={handleClose}
              country={countryArr.filteredCountry}
            />
          </div>
        </div>
        <TextField
          {...register("Pincode")}
          placeholder="Pincode"
          label="Pincode"
          type="Number"
          sx={{ minWidth: 400 }}
        />

        <Button variant="contained" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default AddressDetailForm;
