import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const projectItems = [
  {
    title: "Traditions Council Tracker",
    type: "academic",
    desc: "team project aimed at designing system for a school organization to automate time consuming tasks.",
    href: "https://traditions-council-tracker.herokuapp.com/",
    techStack: ["Ruby on Rails", "Postgres", "Heroku", "Github"],
  },
  {
    title: "what is recursion",
    type: "for fun",
    desc: "recursion?",
    href: "tonyxqing.github.io/portfolio",
  },
  {
    title: "SoTrendly",
    type: "academic",
    desc: "team project .",
    href: "https://traditions-council-tracker.herokuapp.com/",
    techStack: ["Ruby on Rails", "Postgres", "Heroku", "Github"],
  },
];

export default function Portfolio() {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        color: "background.default",
        alignText: "center",
      }}
    >
      <Typography align="center" variant="h3" color="text.primary">
        Portfolio
      </Typography>
      <Divider sx={{ margin: 3 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "right",
          paddingRight: 12,
        }}
      >
        <Box>
          <Typography variant="h6" color="text.primary">
            Academic Projects
          </Typography>
          <Divider />
          <Typography paragraph></Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="text.primary">
            Work Projects
          </Typography>
          <Divider />
          <Typography paragraph></Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="text.primary">
            For fun
          </Typography>
          <Divider />
          <Typography paragraph></Typography>
        </Box>
      </Box>
    </Box>
  );
}
