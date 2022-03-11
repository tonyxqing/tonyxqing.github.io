import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Frogger from "./components/Frogger";
import Portfolio from "./components/Portfolio";
import { Typography, Box, TextField } from "@mui/material";

const Contact = () => {};

const Home = () => {
  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box
        component="form"
        sx={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ whiteSpace: "nowrap", textAlign: "start" }}
          variant="h6"
        >
          Send me a message
        </Typography>

        <div>
          <TextField
            fullWidth
            size="small"
            sx={{ paddingBottom: 1 }}
            id="standard"
            label="Name"
            placeholder="Borat"
          />
        </div>
        <div>
          <TextField
            fullWidth
            size="small"
            sx={{ paddingBottom: 1 }}
            id="outlined"
            label="Email"
            placeholder="boratsagdiev.NOT@email.com"
          />
        </div>
        <div>
          <TextField
            fullWidth
            multiline
            rows={8}
            id="outlined"
            label="Message"
            placeholder="Your message here..."
          />
        </div>
      </Box>
    </Box>
  );
};

const PageNotFound = () => {
  return (
    <Box sx={{ paddingTop: "20vh" }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Page was not found.
      </Typography>
    </Box>
  );
};

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="demos" element={<Frogger />}>
            <Route path=":MeshType" element={<Frogger />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
