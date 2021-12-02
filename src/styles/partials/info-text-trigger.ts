import globals from "./global-variables";
import stylesConfig from "../styles.config";

export default {
  "& .answer-info-text-trigger": {
    display: "inline-block",
    width: "21px",
    height: "21px",
    borderRadius: "50%",
    paddingBottom: "15px",
    minWidth: "21px",
    minHeight: "21px",
    lineHeight: "21px",
    textAlign: "center",
    backgroundImage: (configuration) => `${globals.customerSprite(configuration)}`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0px -147px",
    backgroundColor: "gray",
    fontStyle: "normal",
    marginLeft: "auto",
    cursor: "pointer",
    zIndex: 1,
    "&:focus": {
      outlineColor: stylesConfig.colors.primary.spectrum400,
    },
  },
};
