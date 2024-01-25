import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";


const PersonalDetailForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <form action="" 
      
      style={{
        display:"flex",
        flexWrap:"wrap",
        gap:"4vw"
      }}
      onSubmit={handleSubmit(onSubmitHandler)}>
        <TextField
          {...register("name", {
            required: true,
          })}
          placeholder="Name"
          label="Name"
        />
        <TextField
          {...register("dateOfBirthorAge")}
          placeholder="DD/MM/YYYY or Age in years"
          label="DOB or Age "
        />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Sex</InputLabel>
          <Select
            {...register("sex")}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sex"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>{" "}
        </FormControl>
        <TextField
          {...register("mobile")}
          placeholder="mobile"
          label="mobile"
        />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">GovermentIssueIDType</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            {...register("GovermentIssueIDType")}
            label="GovermentIssueIDType"
          >
            <MenuItem value={10}>AdharCard Number</MenuItem>
            <MenuItem value={20}>PAN Number</MenuItem>
          </Select>
        </FormControl>
        <TextField
          {...register("GovermentIssueID")}
          placeholder="GovermentIssueID"
          label="GovermentIssueID"
        />

        <br />
        <Button variant="contained" type="submit">submit</Button>
      </form>
    </div>
  );
};

export default PersonalDetailForm;
