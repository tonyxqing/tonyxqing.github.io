import { Box, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
export default function Home() {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          alignSelf: "start",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
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
      <Box sx={{ marginTop: theme.spacing(6) }}>
        <About />
      </Box>
      <Box sx={{ paddingTop: theme.spacing(6) }}>
        <Portfolio />
      </Box>
      <Box sx={{ paddingTop: theme.spacing(6) }}>
        <Contact />
      </Box>
    </Box>
  );
}
