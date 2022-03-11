import React from "react";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <div>
      <Typography variant="h3">About</Typography>
      <hr></hr>
      <Typography paragraph>
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
    </div>
  );
}
