import React from "react";
import { Box, Typography } from "@mui/material";

export default function Portfolio() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        height: "80vh",
        padding: 1,
      }}
    >
      <Typography variant="h3">Portfolio</Typography>
      <hr></hr>
      <Box>
        <Typography variant="h6">Academic Projects</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Work Projects</Typography>
      </Box>
      <Box>
        <Typography variant="h6">For fun</Typography>
      </Box>
    </Box>
  );
}
