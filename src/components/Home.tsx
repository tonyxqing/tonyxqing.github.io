import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import greyhorse from "./Images/grey-horse.jpg";
import moon from "./Images/moon.jpg";

import yellowleaf from "./Images/yellow-leaf.jpg";
import yellowvalley from "./Images/yellow-valley.jpg";
import { useEffect, useState } from "react";
import { useThemeUpdate } from "../ThemeContext";
export default function Home() {
  const theme = useTheme();
  const [mode, setMode] = useState(theme.palette.mode);
  const heroImages = {dark: [greyhorse, moon], light: [yellowvalley, yellowleaf]}
  const [heroIndex, setHeroIndex] = useState(0);
  const heroMessage = ["and I'm learning to code.", "Live Love Laugh",]
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroIndex(prevIndex => (prevIndex + 1) % heroMessage.length);
    }, 10000)
    return () => {
      clearInterval(heroInterval);
    }
  }, [])

  useEffect(() => {
    console.log(theme.palette.mode)
  }, [theme.palette.mode])

  return (
    <Box>
      <Box display="flex" justifyContent={"center"} alignItems={"center"} height="80vh">
          <Box display="inline-block" zIndex={1}>
            <Typography
              color="white"
              fontWeight={800}
              fontSize={"2vw"}>
                Hello, my name is
            </Typography>
            <Typography
              variant="h1"
              fontWeight={1000}
              color="white"
              textAlign={"center"}
              fontSize={"10em"}>
              Tony Qing
              </Typography>
              <Typography
              textAlign={'end'}
              fontWeight={800}
              color="white"
              fontSize={"2vw"}>
                and I'm learning to code.
              </Typography>
          </Box>
        <Box position={"absolute"} display="flex" justifyContent={"center"} alignItems={"center"} top="50%" left="50%" padding="20px" sx={{transform: "translate(-50%, -43%)"}}> 
          {heroImages[theme.palette.mode].map((src, i) => <img alt="homepage background"  src={src} style={{ width: "80vw", position: "absolute", borderRadius: "6px", transition: "opacity 500ms", opacity: i === heroIndex % heroImages[theme.palette.mode].length ? 1 : 0,   boxShadow: theme.palette.mode === "dark" ? "0px 0px 50px 20px black" : "0px 0px 50px 20px rgb(255, 254, 168)" }}/> )}
        </Box>
      
      </Box>
      <Box>
        <About />
      </Box>
      <Box>
        <Portfolio />
      </Box>
      <Box>
        <Contact />
      </Box>
    </Box>
  );
}
