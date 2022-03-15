import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import PortfolioItem from "./PortfolioItem";
import TradCoImage from "./Images/tradcotracker.png";
import RecursionImage from "./Images/recycle.png";
import SoTrendlyImage from "./Images/sotrendly.png";

interface portfolioProps {
  title: string;
  type: string;
  desc: string;
  href?: string;
  image: string;
  alt: string;
  techStack?: string[];
}

const academicItems: portfolioProps[] = [
  {
    title: "Traditions Council Tracker",
    type: "academic",
    desc: "team project aimed at designing system for a school organization to automate time consuming tasks.",
    href: "https://traditions-council-tracker.herokuapp.com/",
    image: TradCoImage,
    alt: "image of tradcotracker homepage",
    techStack: ["Ruby on Rails", "Postgres", "Heroku", "Github"],
  },

  {
    title: "SoTrendly",
    type: "academic",
    desc: "team project utilizing multiple APIS with accessibility support including color settings to accomodate for color blindness and a text to speech option.",
    href: "",
    image: SoTrendlyImage,
    alt: "image of tradcotracker homepage",
    techStack: [
      "javascript",
      "HTML",
      "CSS",
      "twitter API",
      "youtube API",
      "news API",
    ],
  },
];

const forFun: portfolioProps[] = [
  {
    title: "what is recursion",
    type: "for fun",
    desc: "recursion?",
    image: RecursionImage,
    alt: "image of tradcotracker homepage",
    href: "/portfolio",
  },
];

const projectItems: portfolioProps[] = [
  {
    title: "Traditions Council Tracker",
    type: "academic",
    desc: "team project aimed at designing system for a school organization to automate time consuming tasks.",
    href: "https://traditions-council-tracker.herokuapp.com/",
    image: TradCoImage,
    alt: "image of tradcotracker homepage",
    techStack: ["Ruby on Rails", "Postgres", "Heroku", "Github"],
  },

  {
    title: "SoTrendly",
    type: "academic",
    desc: "team project utilizing multiple APIS.",
    href: "",
    image: "./Images/tradco-tracker.PNG",
    alt: "image of SoTrendly homepage",
    techStack: [
      "javascript",
      "HTML",
      "CSS",
      "twitter API",
      "youtube API",
      "news API",
    ],
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
      <Box>
        <Typography align="center" variant="h3" color="text.secondary">
          Portfolio
        </Typography>
        <Divider sx={{ margin: 3 }} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            textAlign: "right",
          }}
        >
          <Box>
            <Typography
              noWrap
              align="center"
              variant="h5"
              color="text.secondary"
            >
              Academic Projects
            </Typography>
            <Divider sx={{ margin: 2 }} />
            {academicItems.map((item) => (
              <PortfolioItem {...item} />
            ))}
          </Box>
          <Box>
            <Typography noWrap align="center" variant="h5" color="text.primary">
              For fun
            </Typography>
            <Divider sx={{ margin: 2 }} />
            {forFun.map((item) => (
              <PortfolioItem {...item} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
