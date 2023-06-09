import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Download,
} from "@mui/icons-material";
import "./Navbar.css";
import { grey } from "material-ui-colors";

function Navbar(props) {

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: grey[900],
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        position="fixed"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 0,
              paddingRight: 2,
              display: "block",
              whiteSpace: "nowrap",
            }}
            color="#fff"
          >
            Andrew Michael Gay
          </Typography>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Button
              href="https://drive.google.com/uc?export=download&id=1Ma-I8uRJlIQbACOQr7QoCEX76hiGXsXX"
              startIcon={<Download />}
              sx={{ color: "#fff", ml: "auto" }}
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
