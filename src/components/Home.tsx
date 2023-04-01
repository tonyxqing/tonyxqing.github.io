import {Box, Typography, Divider} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { useEffect, useState } from "react";
export default function Home() {
  const theme = useTheme();
  return (
    <Box>
      <Box display="flex" justifyContent={"center"}>
        <Box display="inline-block">
          <Typography
            sx={{ alignSelf: 'start'}}
            color="text.primary">
              Hello, my name is
          </Typography>
          <Typography
            variant="h1"
            color="text.primary"
            textAlign={"center"}>

            Tony Qing
            </Typography>
            <Typography
            sx={{ alignSelf: 'end'}}
            textAlign={'end'}
            color="text.primary"
            >
              and I'm learning to code.
            </Typography>
        </Box>
      </Box>
      <Divider sx={{margin: theme.spacing(2)}} />
      <Box>
        <About />
      </Box>
      <Divider sx={{margin: theme.spacing(2)}} />

      <Box>
        <Portfolio />
      </Box>
      <Divider sx={{margin: theme.spacing(2)}} />
      <Box>
        <Contact />
      </Box>
    </Box>
  );
}
