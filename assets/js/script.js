/* global fullpage */

var myFullpage = new fullpage("#fullpage", {
  //Sections
  menu: "#menu",

  // Scrolling
  autoScrolling: false,
  fitToSection: false,
  slidesNavigation: true,
  controlArrows: true,

  //Design
  sectionsColor: [
    "#FFDE59",
    "#fff",
    "#FFDE59",
    "#fff",
    "#FFDE59",
    // "#fff",
    "#222"
  ],
  paddingTop: "3em",
  paddingBottom: "3em",
  fixedElements: "#header",
  verticalCentered: true,

  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE"
});
