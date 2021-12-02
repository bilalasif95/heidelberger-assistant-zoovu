import globals from "../partials/global-variables";

import stylesConfig from "../styles.config";

const productsHeaderSize = {
  $lg: stylesConfig.typography.fontSize(1.9),
  $xs: stylesConfig.typography.fontSize(1.2),
};
const productsHeaderColor = stylesConfig.colors.primaryFontColor;

export default {
  container: {
    position: "relative",
    paddingTop: "70px",
    [`@media (${globals.breakpoints.$xs})`]: {
      paddingTop: "25px",
    },
    "& .products-wrapper": {
      display: "flex",
      flexFlow: "wrap row",
      "&::after": {
        content: "''",
        flex: "auto",
      },
      [`@media (${globals.breakpoints.$lg})`]: {
        marginLeft: "-10px",
        marginRight: "-10px",
      },
    },
    "& h3": {
      margin: [0, 0, "25px"],
      fontSize: productsHeaderSize.$lg,
      fontWeight: 400,
      lineHeight: 1,
      color: productsHeaderColor,
      textAlign: "center",
      [`@media (${globals.breakpoints.$md})`]: {
        margin: [0, "300px", "60px"],
      },
      [`@media (${globals.breakpoints.$xs})`]: {
        fontSize: productsHeaderSize.$xs,
      },
    },
  },
};
