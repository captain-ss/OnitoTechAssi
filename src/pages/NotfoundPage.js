import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const NotfoundPage = () => {
  const navigate = useNavigate();
  return (
    <h1>
      Maybe you lost
      <Button
        variant="contained"
        onClick={() => {
          navigate("/Form");
        }}
      >
        Go To Form Page
        <br />
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/table");
        }}
      >
        Go To Table Page
      </Button>
    </h1>
  );
};

export default NotfoundPage;
