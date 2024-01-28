import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonalDetailForm from "../PersonalDetailForm/PersonalDetailForm";
import AddressDetailForm from "../AddressDetailForm/AddressDetailForm";
import { useNavigate } from "react-router-dom";
import icon1 from "../../assets/animatedIcon/Icon1";
import Lottie from "react-lottie";
import { useState } from "react";
const steps = ["PersonalDetail", "Address Detail"];

const HorizontalNonLinearStepper = () => {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: icon1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div
      style={{
        paddingLeft: "15%",
        paddingTop: "2vw",
      }}
    >
      <Box sx={{ width: "80%" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit">{label}</StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                "All steps completed - you&apos;re finished"
                <Lottie options={defaultOptions} height={400} width={400} />
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button variant="contained" onClick={handleReset}>
                  Fill Again
                </Button>
                <Button
                  variant="contained"
                  sx={{ ml: 1 }}
                  onClick={() => {
                    navigate("/table");
                  }}
                >
                  Go To Table
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                {activeStep + 1 === 1 && (
                  <PersonalDetailForm
                    handleComplete={handleComplete}
                    setFormData={setFormData}
                  />
                )}
                {activeStep + 1 === 2 && (
                  <AddressDetailForm
                    handleComplete={handleComplete}
                    formData={formData}
                  />
                )}
              </Typography>
              {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  variant="contained"
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button variant="contained" onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button variant="contained" onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                  ))}
              </Box> */}
            </React.Fragment>
          )}
        </div>
      </Box>
    </div>
  );
};
export default HorizontalNonLinearStepper;
