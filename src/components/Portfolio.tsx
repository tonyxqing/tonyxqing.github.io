import React from "react";
import {Box, Typography, useTheme} from "@mui/material";
import PortfolioItem from "./PortfolioItem";
import TradCoImage from "./Images/tradcotracker.png";
import RecursionImage from "./Images/recycle.png";
import SoTrendlyImage from "./Images/sotrendly.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import WebsiteImage from "./Images/websitev1.png";
import GraceshopImage from "./Images/graceshop.png";

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
  {
    title: "Personal webpage v1",
    type: "academic",
    desc: "personal website made with just HTML, CSS, and JavaScript.",
    image: WebsiteImage,
    alt: "image of personal website version 1",
    href: "https://people.tamu.edu/~tony.qing/",
  },
];

const forFun: portfolioProps[] = [
  {
    title: "Grace Shop",
    type: "for fun",
    desc: "This mock shopping site was made with ReactJs utitlizing a context provider to manage state. Payments are powered by Stripe. Using Firebase to deploy and manage data.",
    image: GraceshopImage,
    alt: "image of grace shop login",
    href: "https://grace-shop-95023.web.app/",
  },
  {
    title: "Personal webpage v2",
    type: "for fun",
    desc: "This website was made with ReactJS using react-router and materials-ui components.",
    image: RecursionImage,
    alt: "image of tradcotracker homepage",
    href: "/",
  },
];

export default function Portfolio() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box marginTop="3rem" > 
      <Box>
        <Typography id="Portfolio" fontWeight={800} marginBottom="1rem" align="center" variant="h3" color="text.primary">
          Portfolio
        </Typography>
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
            <Typography noWrap align="center" variant="h5" color="text.primary" fontWeight={800} marginTop={"1rem"}>
              Academic Projects
            </Typography>
            {academicItems.map((item) => (
              <PortfolioItem {...item} />
            ))}
          </Box>
          <Box>
            <Typography noWrap align="center" variant="h5" color="text.primary" fontWeight={800} marginTop={"1rem"}>
              For fun
            </Typography>
            {forFun.map((item) => (
              <PortfolioItem {...item} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
