import globals from "../partials/global-variables";
import stylesConfig from "../styles.config";
import infoTextTrigger from "../partials/info-text-trigger";

const imageQuestionHeadingFontColor = stylesConfig.colors.secondaryFontColor;
const questionHeadingFontSize = {
    $lg: stylesConfig.typography.fontSize(1.9),
    $xs: stylesConfig.typography.fontSize(1.2)
};
const questionHeadingFontColor = stylesConfig.colors.primaryFontColor;

export default {
    container: {
        "& > p": {
            color: questionHeadingFontColor,
            textAlign: "center",
            width: "100%",
            fontSize: questionHeadingFontSize.$lg,
            margin: [0, 0, "70px"],

            [`@media (${globals.breakpoints.$sm})`]: {
                margin: ["15px", 0, "30px"],
                fontSize: questionHeadingFontSize.$xs,
                fontWeight: 600,
            }
        },
        ...infoTextTrigger,
        "& .question-image": {
            "position": "relative",
            "width": "100%",
            "height": "300px",
            "marginBottom": "20px",
            "&::after": {
                content: "''",
                display: "block",
                position: "absolute",
                zIndex: 1,
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.2) 70%,rgba(0,0,0,0.8) 100%)",
            },
            "& .image-element": {
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
            },
            "& p": {
                color: imageQuestionHeadingFontColor,
                position: "absolute",
                textAlign: "center",
                left: "50%",
                top: "50%",
                zIndex: 2,
                margin: 0,
                transform: "translate(-50%, -50%)",
                fontSize: "40px"
            }
        },
        ".multi-answer &" : {
            "& > p": {
                margin: "0 0 5px",
                textAlign: "left",
                fontSize: stylesConfig.typography.fontSize(),
                fontWeight: "normal"
            }
        }
    }
};
