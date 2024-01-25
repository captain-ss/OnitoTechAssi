import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const AddressDetailForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmitHandler = (data) => {
    console.log(data);
  };
  
  const getCountry = async () => {
    const res = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name"
    );
    return res?.data;
  };
  const { data: country, isPending } = useQuery({
    queryFn: () => getCountry(),
    queryKey: ["country"],
  });
  console.log(country);
  return (
    <div>
      <form action="">
        <TextField
          {...register("mobile")}
          placeholder="mobile"
          label="mobile"
        />
      </form>
    </div>
  );
};

export default AddressDetailForm;
