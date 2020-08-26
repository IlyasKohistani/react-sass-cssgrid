import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import * as serviceWorker from "./serviceWorker";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Realtors from "./components/realtors";
import Features from "./components/features";
import StoryContent from "./components/storyContent";
import Story from "./components/story";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import Homes from "./components/homes";
import Svgdown from "./components/Svgdown";
import Svgup from "./components/Svgup";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
    <Header />
    <Realtors />
    <Features />
    <Svgup />
    <Story />
    <StoryContent />
    <Svgdown />
    <Homes />
    <Gallery />
    <Footer />
  </React.StrictMode>,
  document.getElementById("container")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
