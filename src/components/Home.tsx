import { Box, Typography, Divider } from "@mui/material";
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
      <Divider sx={{ margin: theme.spacing(2) }} />
      <Box>
        <About />
      </Box>
      <Divider sx={{ margin: theme.spacing(2) }} />

      <Box>
        <Portfolio />
      </Box>
      <Divider sx={{ margin: theme.spacing(2) }} />

      <Box>
        <Contact />
      </Box>
    </Box>
  );
}
