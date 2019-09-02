import globals from "../partials/global-variables";
import {Button, ButtonRed} from "../partials/buttons";
import stylesConfig from "../styles.config";

export default {
    container: {
        "display": "flex",
        "flexFlow": "row wrap",
        "justifyContent": "space-between",
        "width": "100%",
        "paddingBottom": "30px",
        "paddingTop": "30px",
        "borderBottom": "1px solid",
        "borderColor": stylesConfig.colors.secondary.spectrum100,
        ".top-navigation &": {
            width: "50%",
            paddingBottom: 0,
            borderBottom: "none",
            marginTop: "-40px"
        },
        "& .navigation-back-button": {
            ...Button,
            marginRight: "15px",
            [`@media (${globals.breakpoints.$xs})`]: {
                marginRight: "10px",
                order: 1,
                width: "calc(50% - 5px)",
                paddingLeft: 0,
                paddingRight: 0
            },
        },
        "& .navigation-next-button, & .navigation-submit-button": {
            ...ButtonRed,
            marginRight: 0,
            [`@media (${globals.breakpoints.$xs})`]: {
                order: 2,
                width: "calc(50% - 5px)",
                paddingLeft: 0,
                paddingRight: 0
            },
        }
    }
};