import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <Box component="header">
      <Container fixed>
        <Box sx={{ position: "fixed", width: "100%", top: "10px" }}>
          <Box>
            <Button variant="text">
              <SvgIcon>
                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
              </SvgIcon>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
