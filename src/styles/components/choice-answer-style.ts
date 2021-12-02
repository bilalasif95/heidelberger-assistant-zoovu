import globals from "../partials/global-variables";
import stylesConfig from "../styles.config";
import infoTextTrigger from "../partials/info-text-trigger";

const infoTextBackground = stylesConfig.colors.secondaryAccentColorVariants.transparent;
const answerImageTextColor = stylesConfig.colors.secondaryFontColor;
const answerTextColor = stylesConfig.colors.secondaryFontColor;
const answerContentSelectedBackground = stylesConfig.colors.primary.spectrum500;
const answerContentBackground = stylesConfig.colors.primaryAccentColorVariants.default;
const infoTextTriggerFontColor = stylesConfig.colors.secondaryFontColor;

const answerTextFontSize = stylesConfig.typography.fontSize(1.2);
const answerInfoTextFontSize = stylesConfig.typography.fontSize(0.8);
export default {
  container: {
    transition: "box-shadow .5s",
    "&.has-image": {
      "& .answer-content": {
        position: "absolute",
        bottom: 0,
        background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .6) 95%)",
        width: "100%",
        height: "100%",
        alignItems: "flex-end",
        "&:before": {
          content: "' '",
          width: "100%",
          height: "12px",
          backgroundColor: stylesConfig.colors.primary.spectrum400,
          position: "absolute",
          left: "0",
          bottom: "0",
          opacity: 0,
        },
      },
      "& .answer-text": {
        color: answerImageTextColor,
        paddingBottom: "40px",
        zIndex: 1,
        [`@media (${globals.breakpoints.$xs})`]: {
          paddingBottom: "20px",
          paddingRight: "10px",
        },
      },
      "& .answer-info-text-trigger": {
        marginBottom: "45px",
        backgroundColor: "transparent",
        [`@media (${globals.breakpoints.$xs})`]: {
          marginBottom: "20px",
        },
      },
    },
    "&.is-disabled": {
      opacity: 0.5,
    },
    "& label": {
      cursor: "pointer",
      overflow: "hidden",
      display: "block",
      position: "relative",
      [`@media (${globals.breakpoints.$xs})`]: {
        display: "flex",
        "flex-flow": "wrap row",
        position: "relative",
      },
    },
    "& .image-element": {
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      right: 0,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    "& .answer-text": {
      display: "flex",
      paddingLeft: "5px",
      color: answerTextColor,
      fontSize: answerTextFontSize,
      alignItems: "center",
    },

    "& .answer-image": {},
    "& .answer-info-text": {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 2,
      width: "100%",
      padding: "10px",
      background: infoTextBackground,
      lineHeight: "1.5",
      fontSize: answerInfoTextFontSize,
      color: infoTextTriggerFontColor,
      pointerEvents: "none",
      textAlign: "center",
    },
    "& .answer-content": {
      bottom: 0,
      left: 0,
      width: "100%",
      display: "flex",
      alignItems: "center",
      height: "75px",
      padding: "0 15px",
      background: answerContentBackground,
      justifyContent: "flex-start",
      [`@media (${globals.breakpoints.$xs})`]: {
        width: "100%",
      },
    },
    "&.is-selected": {
      "& .answer-content": {
        background: answerContentSelectedBackground,
      },
      "&.has-image": {
        "& .answer-content:before": {
          opacity: 1,
        },
      },
    },
    "& .answer-content input": {
      display: "none",
    },
    ...infoTextTrigger,
    "&.info-test-shown .answer-info-text-trigger": {
      background: (configuration) => `${globals.customerSprite(configuration)} no-repeat -24px -147px`,
    },
    ".multi-answer &": {
      padding: 0,
      height: "40px",
      justifyContent: "center",
      display: "block",
      width: "100% !important",
      margin: "0 !important",
      "& .answer": {
        width: "100% !important",
        margin: 0,
      },
      "& .answer-content": {
        height: "40px",
        background: `transparent !important`,
      },
      "& .answer-text": {
        color: stylesConfig.colors.primaryFontColor,
        fontSize: stylesConfig.typography.fontSize(0.9),
        textTransform: "uppercase",
      },
      "& .answer-selection-button": {
        display: "block",
        marginRight: "5px !important",
      },
      "&.is-selected .answer-selection-button": {
        display: "block",
      },
    },
  },
};
