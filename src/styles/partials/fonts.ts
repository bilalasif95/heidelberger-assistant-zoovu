const fontLight = require("../../assets/fonts/OpenSans-Light.ttf");
const fontRegular = require("../../assets/fonts/OpenSans-Regular.ttf");
const fontSemiBold = require("../..//assets/fonts/OpenSans-SemiBold.ttf");
const fontBold = require("../../assets/fonts/OpenSans-Bold.ttf");

export default [
    {
        fontFamily: "OpenSans",
        fontWeight: 300,
        src: `url("${fontLight}") format("truetype")`,
    },
    {
        fontFamily: "OpenSans",
        fontWeight: 400,
        src: `url("${fontRegular}") format("truetype")`,
    },
    {
        fontFamily: "OpenSans",
        fontWeight: 600,
        src: `url("${fontSemiBold}") format("truetype")`,
    },
    {
        fontFamily: "OpenSans",
        fontWeight: 800,
        src: `url("${fontBold}") format("truetype")`,
    }
];