/* global fullpage */

var myFullpage = new fullpage("#fullpage", {
  //Sections
  menu: "#menu",

  // Scrolling
  autoScrolling: false,
  fitToSection: false,

  //Design
  sectionsColor: [
    // "#fff",
    "#FFDE59",
    "#fff",
    "#FFDE59",
    "#fff",
    "#FFDE59",
    // "#fff",
    // "#FFDE59",
    "#222"
  ],
  paddingTop: "3em",
  paddingBottom: "3em",
  fixedElements: "#header",
  verticalCentered: true,

  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE"
});
