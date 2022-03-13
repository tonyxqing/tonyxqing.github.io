import { Box, Typography, TextField, Button } from "@mui/material";

export default function PageNotFound() {
  return (
    <Box sx={{ paddingTop: "20vh" }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Page was not found.
      </Typography>
    </Box>
  );
}
