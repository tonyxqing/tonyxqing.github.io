import {Box, Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import greyhorse from "./Images/grey-horse.jpg";
import moon from "./Images/moon.jpg";
import yellowleaf from "./Images/yellow-leaf.jpg";
import yellowvalley from "./Images/yellow-valley.jpg";
import greymobile from "./Images/grey-mobile.jpg";
import yellowmobile from "./Images/yellow-mobile.jpg";
import { useEffect, useState } from "react";
export default function Home() {
  const theme = useTheme();
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
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const mode = theme.palette.mode;
  return (
    <Box >
      <Box display="flex"  justifyContent={"center"} alignItems={"center"} height={matches ? "90vh" : "70vh"} >
          <Box width="min-content" display="inline-block" zIndex={1}>
            <Typography              
              sx={{transform: "translate(0, 2rem)", 
              textShadow: mode === "dark" ? "1px 1px 2px #FFF, 1px 1px 1em #FFF, 1px 1px 0.2em #FFF" : "#b1953a 0 0 10px"
            }}
              color={mode === "dark" ? "black" : "white"}
              fontWeight={800}

              fontSize={"1rem"}>
                Hello, my name is
            </Typography>
            <br></br>
            <Typography
              boxSizing={"border-box"}
              variant="h1"
              width={!matches ? "min-content" : "max-content"}
              fontWeight={1000}
              
              sx={{textShadow: mode === "dark" ?"1px 1px 3px #FFF, 1px 1px 1em #FFF, 1px 1px 0.2em #FFF": "#b1953a 0 0 10px"}}
              color={mode === "dark" ? "black" : "white"}
              textAlign={"center"}
              fontSize={"10rem"}>
              Tony Qing
              </Typography>
            <br></br>
              <Typography
              sx={{transform: "translate(0, -1rem)", 
              textShadow: mode === "dark" ? "1px 1px 2px #FFF, 1px 1px 1em #FFF, 1px 1px 0.2em #FFF" : "#b1953a 0 0 2px"
            }}

              textAlign={'end'}
              fontWeight={800}
              color={mode === "dark" ? "black" : "white"}
              fontSize={"1rem"}>
                and I'm learning to code.
              </Typography>
          </Box>
        <Box position={"absolute"} display="flex" justifyContent={"center"} alignItems={"center"} > 
          {!matches ? <img alt="mobile background" src={mode === "dark" ? greymobile : yellowmobile} style={{ height: "60vh",  objectFit: "cover", width: "80vw", maxHeight: "80vh",  position: "absolute", borderRadius: "6px", transition: "opacity 1000ms",   boxShadow: mode === "dark" ? "0px 0px 50px 20px black" : "0px 0px 50px 20px rgb(255, 254, 168)" }}/> : heroImages[mode].map((src, i) => <img alt="homepage background"  src={src} style={{  objectFit: "cover", width: "80vw", maxHeight: "80vh",  position: "absolute", borderRadius: "6px", transition: "opacity 500ms", opacity: i === heroIndex % heroImages[mode].length ? 1 : 0,   boxShadow: mode === "dark" ? "0px 0px 50px 20px black" : "0px 0px 50px 20px rgb(255, 254, 168)" }}/> )}
        </Box>
      </Box>
      <Box sx={{paddingTop: "8px"}}>
        <About/>
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
