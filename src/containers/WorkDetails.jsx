import { Box, Container, Typography, Stack } from "@mui/material";
import React from "react";
import { work } from "../utils/content";

const { title, subtitle, items } = work;

const circleStyles = {
  display: "flex",
  width: { xs: "30px", sm: "30px", md: "30px", lg: "40px" },
  height: { xs: "30px", sm: "30px", md: "30px", lg: "40px" },
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "40.112px",
  background: "linear-gradient(137deg, #785DE9 37.87%, #CA33FF 100%)",
};

const WorkDetails = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        pt: "120px",
        pb: "120px",
        bgcolor: "background.default",
      }}
    >
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: { xs: "72px", sm: "80px", md: "88px" },
        }}
      >
        <Stack
          sx={{
            maxWidth: "1085px",
            width: "100%",
            margin: "0 auto",
            alignItems: "center",
          }}
          gap={{ xs: "16px", sm: "20px", md: "24px" }}
        >
          <Typography
            sx={{
              width: "100%",
              fontWeight: 700,
              fontSize: { xs: "25px", sm: "30px", md: "35px", lg: "40px" },
            }}
            lineHeight={"32px"}
            align="center"
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              maxWidth: "443px",
              width: "100%",
              fontWeight: 400,
              fontSize: { xs: "16px", sm: "17px", md: "18px" },
            }}
            align="center"
          >
            {subtitle}
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: "146px", sm: "156px", md: "176px" },
            position: "relative",
          }}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                width: { xs: "720px", sm: "740px", md: "760px", lg: "780px" },
                gap: { xs: "40px", sm: "80px", md: "160px" },
                flexDirection: {
                  xs: index % 2 === 0 ? "column" : "column-reverse",
                  sm: "row",
                },
                "@media screen and (max-width: 770px)": {
                  flexDirection: index % 2 === 0 ? "column-reverse" : "column",
                  width: "100%",
                },
                alignItems: "center",
              }}
            >
              {index % 2 === 0 ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",

                    width: {
                      xs: "306px",
                      sm: "316px",
                      md: "326px",
                      lg: "346px",
                    },
                    justifyContent: "flex-end",

                    gap: { xs: "4px", sm: "14px", md: "24px" },
                    p: { xs: "0 20px", sm: "0 30px", md: "0 40px" },
                  }}
                >
                  <Box
                    sx={{
                      ...circleStyles,
                      alignSelf: {
                        xs: "flex-start",
                        sm: "flex-end",
                        md: "flex-end",
                        lg: "flex-end",
                      },
                      "@media screen and (max-width: 770px)": {
                        alignSelf: "flex-start",
                      },
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography
                    sx={{
                      width: "100%",
                      fontWeight: 700,
                      fontSize: {
                        xs: "20px",
                        sm: "20px",
                        md: "20px",
                        lg: "24px",
                      },
                      textAlign: {
                        xs: "start",
                        sm: "end",
                        md: "end",
                        lg: "end",
                      },
                      "@media screen and (max-width: 770px)": {
                        textAlign: "start",
                      },
                    }}
                    lineHeight={"32px"}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      color: "text.secondary",
                      width: "100%",
                      fontSize: { xs: "14px", sm: "15px", md: "16px" },
                      textAlign: {
                        xs: "start",
                        sm: "end",
                        md: "end",
                        lg: "end",
                      },
                      "@media screen and (max-width: 770px)": {
                        textAlign: "start",
                      },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ) : (
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: {
                        xs: "min(75vw, 196px)",
                        sm: "min(50vw, 196px)",
                        md: "min(30vw, 196px)",
                        lg: "196px",
                      },
                      height: {
                        xs: "min(75vw, 196px)",
                        sm: "min(50vw, 196px)",
                        md: "min(30vw, 196px)",
                        lg: "196px",
                      },
                      borderRadius: "50%",
                      backgroundImage:
                        "radial-gradient(58.91% 74.96% at 42.41% 47.14%, rgba(202, 51, 255, 0.25) 17.19%, rgba(144, 118, 255, 0.25) 53.65%, rgba(41, 9, 175, 0.25) 93.75%)",
                      filter: "blur(90px)",
                      zIndex: 1,
                    }}
                  ></Box>

                  <img
                    src={item.image}
                    style={{
                      maxWidth: "90%",
                      maxHeight: "90%",
                      width: "auto",
                      height: "auto",
                      position: "relative",
                      zIndex: 2,
                    }}
                  />
                </Box>
              )}

              {index % 2 === 0 ? (
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: {
                        xs: "min(75vw, 196px)",
                        sm: "min(50vw, 196px)",
                        md: "min(30vw, 196px)",
                        lg: "196px",
                      },
                      height: {
                        xs: "min(75vw, 196px)",
                        sm: "min(50vw, 196px)",
                        md: "min(30vw, 196px)",
                        lg: "196px",
                      },
                      borderRadius: "50%",
                      backgroundImage:
                        "radial-gradient(58.91% 74.96% at 42.41% 47.14%, rgba(202, 51, 255, 0.25) 17.19%, rgba(144, 118, 255, 0.25) 53.65%, rgba(41, 9, 175, 0.25) 93.75%)",
                      filter: "blur(90px)",
                      zIndex: 1,
                    }}
                  ></Box>

                  <img
                    src={item.image}
                    style={{
                      maxWidth: "90%",
                      maxHeight: "90%",
                      width: "auto",
                      height: "auto",
                      position: "relative",
                      zIndex: 2,
                    }}
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: {
                      xs: "245px",
                      sm: "265px",
                      md: "285px",
                      lg: "305px",
                    },

                    justifyContent: "flex-start",
                    gap: { xs: "4px", sm: "14px", md: "24px" },
                  }}
                >
                  <Box sx={circleStyles} alignSelf={"flex-start"}>
                    {index + 1}
                  </Box>
                  <Typography
                    sx={{
                      width: "100%",
                      fontWeight: 700,
                      fontSize: {
                        xs: "20px",
                        sm: "20px",
                        md: "20px",
                        lg: "24px",
                      },
                    }}
                    lineHeight={"32px"}
                    align="left"
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      color: "text.secondary",
                      width: "100%",
                      fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    }}
                    align="left"
                  >
                    {item.text}
                  </Typography>
                </Box>
              )}

              {index < items.length - 1 && (
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    position: "absolute",
                    width: "1px",
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.10)",
                    right: "calc(50% - 0.5px)",
                    top: 0,
                    bottom: 0,
                    "@media screen and (max-width: 770px)": {
                      display: "none",
                    },
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WorkDetails;
