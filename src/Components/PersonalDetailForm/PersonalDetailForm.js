import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from "@mui/material/FormControl";

const PersonalDetailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <form
        action=""
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "4vw",
        }}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <TextField
          {...register("name", {
            required: "Name length should be greater then 3",
            minLength: 3,
          })}
          placeholder="Name"
          label="Name"
          helperText={errors && errors.name?.message}
          error={errors && errors.name?.message}
        />
        <TextField
          {...register("dateOfBirthorAge", {
            required: "Date or Age must be a positive number",
            validate: (value) => parseInt(value, 10) > 0,
          })}
          placeholder="DD/MM/YYYY or Age in years"
          label="DOB or Age "
          helperText={errors && errors.dateOfBirthorAge?.message}
          error={errors && errors.dateOfBirthorAge?.message}
        />

        <FormControl sx={{ m: 1, minWidth: 120 }} 
        
        error={errors && errors.sex?.message}

        >
          <InputLabel id="demo-simple-select-label">Sex</InputLabel>
          <Select
            {...register("sex", {
              required: "Please select one",
            })}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sex"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>{" "}
          {errors.sex?.message && <FormHelperText>{errors.sex?.message}</FormHelperText>}
        </FormControl>
        <TextField
          {...register("mobile", {
            required: "Please Fill Valid Number",
            pattern: /^[6-9]d{9}$/,
          })}
          placeholder="mobile"
          label="Mobile Number"
          type="number"
          helperText={errors && errors.mobile?.message}
          error={errors && errors.mobile?.message}
        />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">
            GovermentIssueIDType
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            {...register("GovermentIssueIDType", {
              required: true,
            })}
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
        <Button variant="contained" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default PersonalDetailForm;
