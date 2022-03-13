import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Frogger from "./components/Frogger";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import ThemeContext from "./ThemeContext";

ReactDOM.render(
  <ThemeContext>
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
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </React.StrictMode>
    </Router>
  </ThemeContext>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
