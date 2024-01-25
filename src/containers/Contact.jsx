import {
  Box,
  Container,
  TextField,
  Typography,
  Stack,
  Alert,
} from "@mui/material";
import { contact } from "../utils/content";
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditedButtons from "../components/Buttons/EditedButtons";

const { title, fields, button, WrapperC, alert } = contact;

const Contact = () => {
  const [alertOpacity, setAlertOpacity] = useState(0);
  const [ContactData, setContactData] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    let isValid = true;

    fields.forEach((field) => {
      if (!ContactData || !ContactData[field]) {
        newErrors[field] = "Campo requerido";
        isValid = false;
      } else if (field === "Email" && !validateEmail(ContactData[field])) {
        newErrors[field] = "Email no válido";
        isValid = false;
      }
    });

    setErrors(newErrors);
    if (isValid) {
      console.log(ContactData);
      setShowAlert(true);
      setAlertOpacity(1);

      setTimeout(() => {
        setAlertOpacity(0); // Comenzar a hacer la alerta transparente
      }, 2000);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "110vh", sm: "105vh", md: "90vh" },
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={WrapperC}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "relative",
            zIndex: 0,
          }}
        />
      </Box>

      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            maxWidth: "1085px",
            width: "100%",
            margin: "0 auto",
            alignItems: "center",
          }}
          gap={{ xs: "36px", sm: "46px", md: "56px" }}
        >
          <Typography
            sx={{
              maxWidth: "640px",
              width: "100%",
              fontWeight: 600,
              fontSize: { xs: "25px", sm: "30px", md: "35px", lg: "40px" },
            }}
            lineHeight={"48px"}
            align="center"
          >
            {title}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              maxWidth: "753px",
              width: "100%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: { xs: "16px", sm: "20px", md: "24px" },
            }}
          >
            {fields.map((field, index) => (
              <Box key={index} style={{ width: "100%", marginBottom: "20px" }}>
                <label
                  htmlFor={field}
                  style={{
                    marginBottom: "5px",
                    width: "100%",
                    color: "text.primary",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  {field}
                </label>
                {index === 2 ? (
                  <TextField
                    id={field}
                    name={field}
                    multiline
                    rows={4}
                    fullWidth
                    required
                    onChange={handleChange}
                    error={!!errors[field]}
                    helperText={errors[field]}
                    sx={{
                      "& .MuiInputBase-root": {
                        alignItems: "flex-start",
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.70)",
                        border: "2px solid transparent",
                        "&.Mui-focused": {
                          borderColor: "#785DE9",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderWidth: "0",
                          },
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#131313",
                        fontSize: "18px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "0",
                      },
                      width: "100%",
                    }}
                  />
                ) : (
                  <TextField
                    id={field}
                    name={field}
                    type={index == 1 ? "email" : "text"}
                    fullWidth
                    required
                    onChange={handleChange}
                    error={!!errors[field]}
                    helperText={errors[field]}
                    sx={{
                      "& .MuiInputBase-root": {
                        height: "48px",
                        alignItems: "center",
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.70)",
                        border: "2px solid transparent",
                        "&.Mui-focused": {
                          borderColor: "#785DE9",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderWidth: "0",
                          },
                        },
                      },
                      "& .MuiInputBase-input": {
                        padding: "0px 16px",
                        color: "#131313",
                        fontSize: "18px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "0",
                      },
                      width: "100%",
                    }}
                  />
                )}
              </Box>
            ))}

            <EditedButtons type="submit" sx={{ width: "100%" }}>
              {button}
            </EditedButtons>
            {showAlert && (
              <Alert
                sx={{
                  position: "absolute",
                  opacity: alertOpacity,
                  transition: "opacity 0.5s ease-in-out",
                  zIndex: 10,
                  bottom: 60,
                  display: "inline-flex",
                  padding: "12px 32px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  background: "rgba(0, 0, 0, 0.90)",
                  marginTop: "20px",
                }}
                icon={
                  <CheckCircleIcon
                    sx={{ color: "#785DE9", fontSize: "20px" }}
                  />
                }
              >
                <Typography
                  sx={{
                    color: "#785DE9",
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  {alert}
                </Typography>
              </Alert>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
