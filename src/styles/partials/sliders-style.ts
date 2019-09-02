import globals from "./global-variables";
import stylesConfig from "../styles.config";

const sliderValueFontColor = stylesConfig.colors.primaryFontColor;
const sliderMinValueFontColor = stylesConfig.colors.primaryFontColor;
const sliderMaxValueFontColor = stylesConfig.colors.primaryFontColor;
const sliderBackgroundColor = stylesConfig.colors.secondary.spectrum100;
const imageQuestionHeadingFontColor = stylesConfig.colors.secondaryFontColor;

const questionHeadingSliderFontSize = {
    $lg: stylesConfig.typography.fontSize(1.9),
    $xs: stylesConfig.typography.fontSize(1.2)
};

export default {
    "& > p": {
        textAlign: "center",
        width: "100%",
        fontSize: questionHeadingSliderFontSize.$lg,
        margin: [0, 0, "70px"],
        color: stylesConfig.colors.primaryFontColor,

        [`@media (${globals.breakpoints.$xs})`]: {
            margin: ["15px", 0, "30px"],
            fontWeight: 600,
            fontSize: questionHeadingSliderFontSize.$xs,
        },
    },
    "& .slider-box": {
        margin: [0, 0, "100px", 0],
        padding: ["5px", "50px", "8px"],
        width: "100%",
        backgroundColor: sliderBackgroundColor,
        [`@media (${globals.breakpoints.$xs})`]: {
            margin: [0, 0, "60px", 0],
            padding: ["5px", "15px", "8px"],
        },
    },
    "& .slider-value": {
        margin: "15px 0 5px",
        textAlign: "center",
        fontWeight: 600,
        color: sliderValueFontColor
    },
    "& .slider-footer": {
        "margin": "10px",
        "&::before": {
            content: "''",
            display: "table"
        },
        "&::after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        "& .slider-min": {
            float: "left",
            color: sliderMinValueFontColor,
            fontWeight: 600,
        },
        "& .slider-max": {
            float: "right",
            color: sliderMaxValueFontColor,
            fontWeight: 600,
        }
    }
};
