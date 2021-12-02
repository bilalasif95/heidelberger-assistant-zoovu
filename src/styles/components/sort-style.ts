import globals from "../partials/global-variables";
import stylesConfig from "../styles.config";

const bordersColor = stylesConfig.colors.secondary.spectrum100;
const focusOutlineColor = stylesConfig.colors.primary.spectrum400;

export default {
  container: {
    display: "block",
    position: "static",
    margin: "0 auto 30px",
    width: "100%",
    maxWidth: "230px",
    [`@media (${globals.breakpoints.$md})`]: {
      position: "absolute",
      right: "60px",
      top: "35px",
      width: "220px",
    },
    [`@media (${globals.breakpoints.$xs})`]: {
      margin: "0 auto",
    },
    "& .sort-wrapper": {
      "& p": {
        margin: "0 0 10px",
        fontSize: stylesConfig.typography.fontSize(1.1),
        fontWeight: "400",
        textAlign: "center",
        color: stylesConfig.colors.primaryFontColor,
      },
      "& .sort-inside": {
        position: "relative",
        maxWidth: "100%",
        margin: "0 auto",
        "&.is-open": {
          "& .sort-select": {
            "& .icon": {
              transform: "rotate(180deg)",
            },
          },
          "& .sort-panel": {
            maxHeight: "177px",
            overflowY: "auto",
            borderLeft: "1px solid",
            borderRight: "1px solid",
            borderBottom: "1px solid",
            borderColor: bordersColor,
          },
        },
      },
      "& .sort-select": {
        display: "block",
        position: "relative",
        width: "100%",
        padding: "11px 15px",
        border: "1px solid",
        borderColor: bordersColor,
        backgroundColor: "#fff",
        cursor: "pointer",
        fontSize: stylesConfig.typography.fontSize(0.9),
        fontWeight: 400,
        color: stylesConfig.colors.primaryFontColor,
        textAlign: "center",
        [`@media (${globals.breakpoints.$xs})`]: {
          marginBottom: "50px",
        },
        "& .icon": {
          background: (configuration) => `${globals.customerSprite2(configuration)} no-repeat 0 -42px`,
          position: "absolute",
          display: "block",
          right: "10px",
          top: "14px",
          width: "26px",
          height: "14px",
        },
        "&:focus": {
          outlineColor: focusOutlineColor,
        },
      },
      "& .sort-panel": {
        position: "absolute",
        zIndex: "1",
        top: "100%",
        left: 0,
        width: "100%",
        maxHeight: "0",
        overflow: "hidden",
        transition: "max-height .3s ease-out,overflow-y .1s .5s",
        backgroundColor: "#fff",
        "& .option": {
          cursor: "pointer",
          fontSize: stylesConfig.typography.fontSize(0.9),
          fontWeight: 400,
          color: stylesConfig.colors.primaryFontColor,
          textAlign: "center",
          padding: "11px 15px",
          borderBottom: "1px solid",
          borderColor: bordersColor,
          "&:last-of-type": {
            borderBottom: "none",
          },
          "&:hover": {
            backgroundColor: bordersColor,
          },
        },
      },
    },
  },
};
