import React from "react";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import PortfolioItem from "./PortfolioItem";
import TradCoImage from "./Images/tradcotracker.png";
import RecursionImage from "./Images/recycle.png";
import SoTrendlyImage from "./Images/sotrendly.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import WebsiteImage from "./Images/websitev1.png";

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
    desc: "Team project aimed at designing system for a school organization to automate time consuming tasks. Used Ruby on Rails, PostgreSQL, and Heroku.",
    href: "https://traditions-council-tracker.herokuapp.com/",
    image: TradCoImage,
    alt: "image of tradcotracker homepage",
    techStack: ["Ruby on Rails", "Postgres", "Heroku", "Github"],
  },

  {
    title: "SoTrendly",
    type: "academic",
    desc: "Team project utilizing multiple APIS with accessibility support including color settings to accomodate for color blindness and a text to speech option. Used HTML, CSS, and JavaScript",
    href: "http://teamslothsotrendly.herokuapp.com/",
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
    title: "Personal webpage v1",
    type: "for fun",
    desc: "personal website made with just HTML, CSS, and JavaScript.",
    image: WebsiteImage,
    alt: "image of personal website version 1",
    href: "https://people.tamu.edu/~tony.qing/",
  },

  {
    title: "Personal webpage v2",
    type: "for fun",
    desc: "This website was made with ReactJS using react-router and materials-ui components.",
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
    desc: "",
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
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
        <Typography align="center" variant="h3" color="text.primary">
          Portfolio
        </Typography>
        <Divider sx={{ margin: 3 }} />
        <Box
          sx={{
            display: matches ? "grid" : "flex",
            flexWrap: matches ? "none" : "wrap",
            gridTemplateColumns: matches ? "45% 45%" : "",
            justifyContent: "space-evenly",
            textAlign: "right",
          }}
        >
          <Box>
            <Typography noWrap align="center" variant="h5" color="text.primary">
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
