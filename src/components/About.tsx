import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
export default function About() {
  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        color: "background.default",
      }}
    >
      <Typography
        sx={{
          flexDirection: "row",
        }}
        variant="h3"
        color="text.primary"
      >
        About
      </Typography>
      <Divider />
      <Typography color="text.secondary" paragraph>
        Hello my name is Tony, and I was raised in College Station, Texas. I am
        excited to be marrying my best friend and moving to Chicago this summer.
        Her name is Grace and she goes to Northwestern and we own a cat named
        Cleo. When I have spare time I like to code, cook, or drive up to see
        Grace. Currently my favorite animal is a monkey because they look funny
        but they're smart. A fun fact about me is that my parents traveled from
        Tokyo to New York and named me Tony. A boring fact about me is that I
        was born in the year 2000 and my parents are divorced now.
      </Typography>
      <Typography color="text.secondary" paragraph>
        I am currently a 4th year computer science student at Texas A&M. Thus
        far my experience has been primarily in front end development, testing
        use cases, and collaborative coding projects. My main contributions at
        the Texas Center for Applied Technology granted me a lot of front end
        experience. So far I have used JavaScript with OpenLayers and D3.js to
        render and cluster markers on a map, React Native for a mobile app in
        which I designed a series of interactive charts, and ReactJS on a web
        app component where clients can view their files and folders in a
        collapsible table view. In my time at TCAT, I developed a passion for
        creating technology which has the purpose of helping others and solving
        problems.
      </Typography>
    </Box>
  );
}
