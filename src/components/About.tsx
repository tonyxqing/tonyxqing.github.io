import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PromImage from "./Images/prom.png";
import RennaisanceImage from "./Images/renaisance.png";
import CleoImage from "./Images/cleo.png";
import BeanImage from "./Images/bean.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const images = [
  {img: PromImage, title: "prom 2018"},
  {img: RennaisanceImage, title: "renfest 2021"},
  {img: CleoImage, title: "our cat"},
  {img: BeanImage, title: "I lifted the bean"},
];

export default function About() {
  return (
    <Box
      sx={{
        color: "background.default",
      }}
    >
      <Typography
        sx={{
          flexDirection: "row",
        }}
        variant="h3"
        align="center"
        color="text.primary"
      >
        About
      </Typography>

      <Box
        sx={{
          padding: "30px",
          margin: "30px",
          backgroundColor: "primary.main",
          borderRadius: "3px",
        }}
      >
        <Typography color="text.secondary" sx={{fontSize: 18}} paragraph>
          I was raised in College Station, Texas. I
          am excited to be marrying my best friend and moving to Chicago this
          summer. Her name is Grace and she goes to Northwestern and we own a
          cat named Cleo. When I have spare time I like to code, cook, or drive
          up to see Grace. Currently my favorite animal is a monkey because they
          look funny but they're smart. A fun fact about me is that my parents
          traveled from Tokyo to New York and named me Tony. A boring fact about
          me is that I was born in the year 2000.
        </Typography>
        <ImageList
          variant="masonry"
          sx={{alignItems: "center", justifyContent: "center"}}
          gap={20}
          cols={4}
        >
          {images.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{
                padding: "30px",
              }}
            >
              <img
                style={{
                  width: 164,
                  height: 164,
                  objectFit: "contain",
                }}
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography color="text.secondary" sx={{fontSize: 18}} paragraph>
          I am currently a 4th year computer science student at Texas A&M. Thus
          far my experience has been primarily in front end development, testing
          use cases, and collaborative coding projects. My main contributions at
          the Texas Center for Applied Technology granted me a lot of front end
          experience. So far I have used JavaScript with OpenLayers and D3.js to
          render and cluster markers on a map, React Native for a mobile app in
          which I designed a series of interactive charts, and ReactJS on a web
          app component where clients can view their files and folders in a
          collapsible table view. In my time at TCAT, I developed a passion for
          creating technology which has the purpose of helping others and
          solving problems.
        </Typography>
      </Box>
    </Box>
  );
}
