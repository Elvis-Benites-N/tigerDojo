import { useTheme } from "@emotion/react";
import {
  AppBar,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import React from "react";
import { NAVBAR_HEIGHT } from "../constants";
import useScrollPosition from "../hooks/useScrollPosition";
import { navbarContent } from "../utils/content";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import LinkButton from "./Buttons/LinkButton";
import useCloseMenu from "../hooks/useCloseMenu";

const { Logo, Buttons } = navbarContent;

const Navbar = ({ onAboutClick, onServicesClick, onHomeClick }) => {
  const scrollPosition = useScrollPosition();
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:900px)");
  const { menuOpen, toggleMenu, closeMenu, menuRef } = useCloseMenu(false);
  return (
    <AppBar
      elevation={0}
      sx={{
        py: 5,
        height: NAVBAR_HEIGHT,
        bgcolor: scrollPosition > 10 ? "special.background" : "transparent",
        backdropFilter: scrollPosition > 10 && "blur(60px)",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: "91.7%",
          maxWidth: "1253px",
          borderBottom: "1px solid",
          borderBottomColor: "special.border",
          transform: "translateX(-50%)",
        },
      }}
    >
      <Container
        sx={{
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1380px!important",
          },
        }}
      >
        <Stack
          sx={{
            pl: { xs: "5%", sm: "8%", md: "10%", lg: "120px" },
            pr: { xs: "5%", sm: "8%", md: "10%", lg: "120px" },
            alignItems: "center",
          }}
          direction="row"
          justifyContent="flex-end"
          flexWrap="wrap"
        >
          {/* Logo */}
          <img src={Logo} style={{ height: "100%", objectFit: "contain", cursor:"pointer" }} onClick={onHomeClick}/>

          {/* Links */}

          {isMobile ? (
            <Stack
              direction="row"
              justifyContent="flex-end"
              spacing={6}
              sx={{ flex: 1, alignItems: "center" }}
              flexWrap="wrap"
            >
              <IconButton onClick={toggleMenu}>
                <MenuIcon sx={{ color: "text.secondary" }} />
              </IconButton>

              {menuOpen && (
                <Stack
                  ref={menuRef}
                  direction="column"
                  spacing={2}
                  sx={{
                    position: "absolute",
                    alignItems: "flex-end",
                    top: `${NAVBAR_HEIGHT}px`,
                    right: { xs: "5%", sm: "40px" },
                    zIndex: 1,
                    bgcolor: "rgba(7,7,16,.7)",
                    backdropFilter: "blur(60px)",
                    padding: "24px",
                    border: "1px solid",
                    borderColor: "special.border",
                  }}
                >
                  <LinkButton onClick={onAboutClick}>
                    <Typography variant="body2">{Buttons.item1}</Typography>
                  </LinkButton>
                  <Divider sx={{ bgcolor: "special.border", width: "100%" }} />
                  <LinkButton onClick={onServicesClick}>
                    <Typography variant="body2">{Buttons.item2}</Typography>
                  </LinkButton>
                </Stack>
              )}
            </Stack>
          ) : (
            <Stack
              direction="row"
              justifyContent="flex-end"
              spacing={6}
              sx={{ flex: 1, alignItems: "center" }}
              flexWrap="wrap"
            >
              <LinkButton onClick={onAboutClick}>
                <Typography variant="body2"  fontSize= '18px'>{Buttons.item1}</Typography>
              </LinkButton>

              <LinkButton spacing={0.5} onClick={onServicesClick}>
                <Typography variant="body2"   fontSize= '18px'>{Buttons.item2}</Typography>
              </LinkButton>
            </Stack>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
