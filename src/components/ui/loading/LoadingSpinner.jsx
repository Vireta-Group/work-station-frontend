// components/ui/LoadingSpinner.jsx
import React from "react";
import { Box, CircularProgress, Modal as MuiModal } from "@mui/material";
import virat_logo from "../../../assets/logo/vireta-small-logo.png";

const LoadingSpinner = ({ open }) => {
  return (
    <MuiModal open={open} onClose={() => {}} hideBackdrop>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          // backgroundColor: "rgba(0,0,0,0.3)", ❌ এটা আর দরকার হবে না
        }}
      >
        <Box sx={{ position: "relative", width: 100, height: 100 }}>
          {/* Logo */}
          <img
            src={virat_logo}
            alt="Logo"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              zIndex: 1,
              position: "relative",
            }}
          />
          {/* Spinner */}
          <CircularProgress
            size={100}
            thickness={4}
            sx={{
              color: "primary.main",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 2,
            }}
          />
        </Box>
      </Box>
    </MuiModal>
  );
};

export default LoadingSpinner;
