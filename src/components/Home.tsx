import { Box, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
export default function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "grid",
        alignSelf: "start",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box
        component="form"
        sx={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ whiteSpace: "nowrap", textAlign: "start" }}
          variant="h1"
          color="text.primary"
        >
          Howdy
        </Typography>
      </Box>
    </Box>
  );
}
