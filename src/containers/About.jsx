import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { about } from "../utils/content";

const { PadlockA, WrapperA, title, subtitle } = about;

const About = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "110vh", sm: "105vh", md: "90vh" },
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            zIndex: 1,
          },
        }}
      >
        <img
          src={WrapperA}
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
          sx={{ maxWidth: "1085px", width: "100%", margin: "0 auto" }}
          alignItems="center"
          gap={{ xs: "20px", sm: "30px", md: "40px" }}
        >
          <Typography
            sx={{
              maxWidth: "640px",
              width: "100%",
              fontWeight: "600px",

              fontSize: { xs: "18px", sm: "24px", md: "30px", lg: "36px" },
            }}
            lineHeight={"48px"}
            align="center"
          >
            <Box >  
              <img src={PadlockA} alt="" />
            </Box>
            {title}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              maxWidth: "933px",
              width: "100%",
              fontSize: { xs: "12px", sm: "13px", md: "14px" },
            }}
            align="center"
          >
            {subtitle}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
