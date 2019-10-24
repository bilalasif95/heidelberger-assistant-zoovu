import globals from "../partials/global-variables";
import stylesConfig from "../styles.config";

const focusOutlineColor = stylesConfig.colors.primary.spectrum400;
export default {
    container: {
        "& .answers-wrapper": {
            "flexFlow": "wrap row",
            "alignItems": "stretch",
            "justifyContent": "space-between",
            "display": "flex",
            "margin" : [0, "-7px", "75px", "-7.5px"],
            "&:after": {
                content: "''",
                flex: "auto",
            },
            [`@media (${globals.breakpoints.$xs})`]: {
                flexFlow: "wrap column",
                marginBottom: "15px"
            },
            "& .answer": {
                "position": "relative",
                "margin": "7.5px",
                [`@media (${globals.breakpoints.$xs})`]: {
                    width: "100% !important",
                    margin: [0, 0, "20px"],
                },
                "&:hover": {
                    boxShadow: "6px 3px 18px rgba(0, 0, 0, 0.47)"
                },
                "&:focus": {
                    outlineColor: focusOutlineColor,
                    boxShadow: "6px 3px 18px rgba(0, 0, 0, 0.47)"
                },
            },
            "& .answer-content": {
                height: '100%'
            },
            "& .answer-image": {
                height: "315px",
                [`@media (${globals.breakpoints.$xs})`]: {
                    width: "100%",
                    height: "215px"
                },
            },
            "& .fullRow": {
                "& .answer-image": {
                    height: "160px",
                    [`@media (${globals.breakpoints.$xs})`]: {
                        height: "215px"
                    },
                },
            },
        },
        ".multi-answer &": {
            "& .answers-wrapper": {
                marginBottom: 0
            }
        }
    }
};
