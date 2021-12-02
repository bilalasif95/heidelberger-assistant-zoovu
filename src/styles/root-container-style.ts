import globals from "./partials/global-variables";
import stylesConfig from "./styles.config";
import globalStyles from "./partials/globals";
import tooltips from "./partials/tooltips";

const fontSize = stylesConfig.typography.fontSize();

export default {
  container: {
    ...globalStyles,
    ...tooltips,
    maxWidth: globals.layout.maxContainerWidth,
    margin: [0, "auto"],
    fontFamily: stylesConfig.typography.fontFamily,
    "& *": {
      boxSizing: "border-box",
    },
    padding: "5px",
    fontSize,
  },
};
