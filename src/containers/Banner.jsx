import { Box, Container, Typography, Stack } from "@mui/material";
import React from "react";
import { banner } from "../utils/content";
import EditedButtons from "../components/EditedButtons";

const {
  Atlassian,
  AWS,
  Azure,
  GCloud,
  SNYK,
  MainBackground,
  title,
  subtitle,
  button,
} = banner;

const Banner = () => {
  const coloredTitle = title.replace(
    "Development",
    (match) => `<span class="highlighted">${match}</span>`
  );
  return (
    <Box sx={{overflowX: "hidden"}}>
      
      
       {/* Círculo decorativo */}
       <Box
        sx={{
          position: "absolute",
          width: { xs: "50%", sm: "75%", md: "85%", lg: "95%", xl: "100%" },
          maxWidth: "1045px",
          height: "1020px",
          top: "-656px",
          left: { xs: "160px", md: "calc(50% - 522.5px)" },
          background: "radial-gradient(67.38% 52.95% at 42.41% 47.14%, rgba(202, 51, 255, 0.4) 30.21%, rgba(107, 72, 255, 0.4) 77.6%, rgba(41, 9, 175, 0.4) 100%)",
          borderRadius: "50%", 
          filter: "blur(92.5px)",
          zIndex:-9
        }}
      />

      {/* Background */}

      <Box sx={{position:"fixed", zIndex:-10, width:"100%", top:0, left:0, right:0, minWidth:"800px"}}>
        <img src={MainBackground} alt="" style={{ width: "100%" }} />
      </Box>

      {/* Banner elements */}

      {/* Content */}
      <Container sx={{ height: "80vh", pt: "max(228px, 10vh)" , px: 2, width:"100%"}} alignItems="center">
        <Stack sx={{ maxWidth: "1085px", width:"100%", margin:"0 auto" }} alignItems="center" gap="40px">
          <Typography
            sx={{
              maxWidth: "543px",
              width: "100%",
              fontSize: { xs: "50px", sm: "60px", md: "70px",lg: '80px' },
              "& .highlighted": {
                color: "#785DE9",
                fontSize: { xs: "50px", sm: "60px", md: "70px",lg: '80px' },
                fontWeight: 500,
                lineHeight: "1.1",
              },
            }}
            variant="h2"
            align="center"
            dangerouslySetInnerHTML={{ __html: coloredTitle }}
          />
          <Typography
            variant="h5"
            sx={{ 
              color: "text.secondary", 
              maxWidth: "600px", 
              width: "100%",
              fontSize: { xs: '16px', sm: '17px', md: '18px' },
            }}
            align="center"
          >
            {subtitle}
          </Typography>

          <EditedButtons
          >
            {button}
          </EditedButtons>
        </Stack>
      </Container>
    </Box>
  );
};

export default Banner;
