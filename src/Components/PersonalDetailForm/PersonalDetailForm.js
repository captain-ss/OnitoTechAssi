import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
const PersonalDetailForm = ({setFormData,handleComplete}) => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitHandler = (data) => {
   setFormData((prev)=>({
    ...prev,...data
   }))
   handleComplete();
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
            required: "Date or Age isrequired",
            validate: (value) => {
              if (!(parseInt(value, 10) > 0)) {
                return "Must be a positive number";
              }
              return true;
            },
          })}
          placeholder="DD/MM/YYYY or Age in years"
          label="DOB or Age "
          helperText={errors && errors.dateOfBirthorAge?.message}
          error={errors && errors.dateOfBirthorAge?.message}
        />

        <FormControl
          sx={{ minWidth: 180 }}
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
            <MenuItem value=""></MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>{" "}
          {errors.sex?.message && (
            <FormHelperText>{errors.sex?.message}</FormHelperText>
          )}
        </FormControl>
        <TextField
          {...register("mobile", {
            required: "Please Fill Valid Number",
            pattern: {
              value:/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
              message: "invalid Number"
            }
          })}
          placeholder="mobile"
          label="Mobile Number"
          helperText={errors && errors.mobile?.message}
          error={errors && errors.mobile?.message}
          type="number"
        />

        <FormControl sx={{ minWidth: 240 }}>
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
            <MenuItem value="AdharCard">AdharCard Number</MenuItem>
            <MenuItem value="Pan">PAN Number</MenuItem>
          </Select>
        </FormControl>
        <TextField
          {...register("GovermentIssueID",{
            required:"Id is required"
          })}
          placeholder="GovermentIssueID"
          label="GovermentIssueID"
          helperText={errors && errors.GovermentIssueID?.message}
          error={errors && errors.GovermentIssueID?.message}
        />

        <Button variant="contained" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default PersonalDetailForm;
