import {
  Box,
  Stack,
  Typography,
  IconButton,
  Modal,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { footer, modalInfo } from "../utils/content";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LockIcon from "@mui/icons-material/Lock";
import EditedButtons from "./Buttons/EditedButtons";

const { logo, title, copyright } = footer;
const { titleM, date, introduction, sections, buttontext } = modalInfo;

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true); // Función para abrir el modal
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        p: "80px 0",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: { xs: "50vw", sm: "40vw", md: "30vw", lg: "37.4vw" },
          height: { xs: "33.8vw", sm: "27vw", md: "22vw", lg: "33.8vw" },
          flexShrink: 0,
          borderRadius: { xs: "50vw", sm: "40vw", md: "30vw", lg: "37.4vw" },
          background: "special.footer_background",
          filter: "blur(100px)",
          right: { xs: "-12.5vw", sm: "-15vw", md: "-20vw", lg: "-12.5vw" },
          top: { xs: "-22vw", sm: "-25vw", md: "-30vw", lg: "-22vw" },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: "70vw", sm: "65vw", md: "60vw", lg: "71.5vw" },
          height: { xs: "59.1vw", sm: "55.6vw", md: "52.2vw", lg: "60vw" },
          flexShrink: 0,
          borderRadius: { xs: "70vw", sm: "65vw", md: "60vw", lg: "71.5vw" },
          background: "special.footer_background",
          filter: "blur(100px)",
          bottom: { xs: "-35vw", sm: "-40vw", md: "-45vw", lg: "-35.2vw" },
          left: { xs: "-35vw", sm: "-32.5vw", md: "-30vw", lg: "-35.8vw" },
        }}
      />
      <Stack>
        <img src={logo} alt="" />
      </Stack>

      <Stack sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography
          sx={{
            maxWidth: "640px",
            width: "100%",
            fontWeight: 600,
            lineHeight: "16px",
            fontSize: { xs: "12px", sm: "12px", md: "14px", lg: "16px" },
          }}
          lineHeight={"48px"}
          align="center"
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "text.secondary",
            maxWidth: "933px",
            width: "100%",
            fontSize: "12px",
            lineHeight: "16px",
          }}
          align="center"
        >
          {copyright}
        </Typography>
      </Stack>
      <Box textAlign="center" display={"flex"}>
        <a>
          <IconButton fontSize="24px" onClick={handleOpenModal}>
            <LockIcon />
          </IconButton>
        </a>

        <a
          href="https://www.linkedin.com/company/tiger-dojo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton fontSize="24px">
            <LinkedInIcon />
          </IconButton>
        </a>
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 300, sm: 300, md: 400, lg: 500 },
            height: { xs: 500, sm: 500, md: 600, lg: 700 },
            bgcolor: "background.default",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            overflow: "hidden",
          }}
        >
          <Typography
            alignSelf={"start"}
            sx={{ fontWeight: 700 }}
            id="modal-title"
            component="h2"
            fontSize={{ xs: "20px", sm: "20px", md: "25px", lg: "25px" }}
            color="#785DE9"
          >
            {titleM}
          </Typography>
          <Divider sx={{ width: "100%", my: 2 }} />

          <Stack
            id="modal-description"
            sx={{ mt: 2, maxHeight: 995, width: "100%", overflowY: "auto" }}
            alignSelf={"self-start"}
          >
            <Typography
              fontSize={{ xs: "15px", sm: "15px", md: "16px", lg: "16px" }}
            >
              {date}
            </Typography>

            <Typography
              sx={{ mt: 2, mb: 2 }}
              fontSize="14px"
              color="text.secondary"
            >
              {introduction}
            </Typography>

            {sections.map((section) => (
              <Stack key={section.id} sx={{ mb: 2 }}>
                <Typography
                  sx={{ fontWeight: "bold", mb: 1 }}
                  fontSize={{ xs: "12px", sm: "12px", md: "14px", lg: "14px" }}
                  color="text.secondary"
                >
                  {section.id + ". "}
                  {section.title}
                </Typography>
                <Typography
                  fontSize={{ xs: "12px", sm: "12px", md: "14px", lg: "14px" }}
                  color="text.secondary"
                >
                  {section.id !== 7 ? (
                    section.content
                  ) : (
                    <>
                      {section.content.substring(
                        0,
                        section.content.indexOf("at") + 3
                      )}
                      <a
                        href={`mailto:${section.content.substring(
                          section.content.indexOf("at") + 3
                        )}`}
                        style={{ color: "#785DE9", textDecoration: "none" }}
                      >
                        {section.content.substring(
                          section.content.indexOf("at") + 3
                        )}
                      </a>
                    </>
                  )}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Divider sx={{ width: "100%", my: 2 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <EditedButtons onClick={handleCloseModal}>{buttontext}</EditedButtons>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Footer;
