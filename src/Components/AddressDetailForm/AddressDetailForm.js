import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const AddressDetailForm = () => {
  
  const { register, handleSubmit } = useForm();
  const onSubmitHandler = (data) => {
    console.log(data);
  };
  const [countryArr, setCountryArr] = useState();
  
  const getCountry = async () => {
    const res = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name"
      );
      setCountryArr(res?.data)
      return res?.data;
    };
    const { data: country, isLoading } = useQuery({
      queryFn: () => getCountry(),
      queryKey: ["country"],
    });
    if(isLoading){
      return <h5>Loading Countries</h5>
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
          {...register("mobile")}
          placeholder="mobile"
          label="mobile"
          type="text"
        />
        <TextField
          {...register("mobile")}
          placeholder="mobile"
          label="mobile"
          type="text"
        />
        <TextField
          {...register("mobile")}
          placeholder="mobile"
          label="mobile"
          type="text"
        />
        <TextField
          {...register("mobile")}
          placeholder="mobile"
          label="mobile"
          type="text"
        />
        <TextField
          {...register("mobile")}
          placeholder="mobile"
          label="mobile"
          type="text"
        />
      </form>
    </div>
  );
};

export default AddressDetailForm;
