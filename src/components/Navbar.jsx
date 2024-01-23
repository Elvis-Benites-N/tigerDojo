import { useTheme } from "@emotion/react";
import {
  AppBar,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { NAVBAR_HEIGHT } from "../constants";
import useScrollPosition from "../hooks/useScrollPosition";
import { navbarContent } from "../utils/content";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
const { Logo, Buttons } = navbarContent;

const LinkButton = ({ children, ...props }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.2}
    sx={{
      cursor: "pointer",
      color: "text.primary",
      "&:hover": { color: "text.secondary" },
      whiteSpace: "nowrap",
    }}
    {...props}
  >
    {children}
  </Stack>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  const scrollPosition = useScrollPosition();
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:900px)");
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <AppBar
      elevation={0}
      sx={{
        py: 5,
        height: NAVBAR_HEIGHT,
        bgcolor: scrollPosition > 10 ? "rgba(7,7,16,.7)" : "transparent",
        backdropFilter: scrollPosition > 10 && "blur(60px)",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: "91.7%",
          maxWidth: "1253px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
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
          }}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          flexWrap="wrap"
        >
          {/* Logo */}
          <img src={Logo} style={{ height: "100%", objectFit: "contain" }} />

          {/* Links */}

          {isMobile ? (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              spacing={6}
              sx={{ flex: 1 }}
              flexWrap="wrap"
            >
              <IconButton onClick={toggleMenu}>
                <MenuIcon sx={{ color: "text.secondary" }} />
              </IconButton>

              {menuOpen && (
                <Stack
                  ref={menuRef}
                  direction="column"
                  alignItems="flex-end"
                  spacing={2}
                  sx={{
                    position: "absolute",
                    top: `${NAVBAR_HEIGHT}px`,
                    right: { xs: "5%", sm: "40px" },
                    zIndex: 1,
                    bgcolor: "rgba(7,7,16,.7)",
                    backdropFilter: "blur(60px)",
                    padding: "24px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <LinkButton onClick={closeMenu}>
                    <Typography variant="body2">{Buttons.item1}</Typography>
                  </LinkButton >
                  <Divider
                    sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", width: "100%" }}
                  />
                  <LinkButton onClick={closeMenu}>
                    <Typography variant="body2">{Buttons.item2}</Typography>
                  </LinkButton>
                </Stack>
              )}
            </Stack>
          ) : (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              spacing={6}
              sx={{ flex: 1 }}
              flexWrap="wrap"
            >
              <LinkButton>
                <Typography variant="body2">{Buttons.item1}</Typography>
              </LinkButton>

              <LinkButton spacing={0.5}>
                <Typography variant="body2">{Buttons.item2}</Typography>
              </LinkButton>
            </Stack>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
