import globals from "../partials/global-variables";

import stylesConfig from "../styles.config";

const bordersColor = globals.colors.gray;
const textColor = stylesConfig.colors.primaryFontColor;
const backgroundHovered = globals.colors.gray;
const nameColor = stylesConfig.colors.primaryFontColor;
const priceColor = stylesConfig.colors.primaryFontColor;

const alternativeProductHeadingFontSize = stylesConfig.typography.fontSize(0.8);
const productNameFontSize = stylesConfig.typography.fontSize(0.9);
const productPriceFontSize = stylesConfig.typography.fontSize(0.8);

export default {
    container: {
        "position": "relative",
        "overflow": "auto",
        "& .alternative-products-head": {
            padding: "12px",
            cursor: "pointer",
            textAlign: "center",
            color: textColor,
            fontSize: alternativeProductHeadingFontSize,
            borderTop: `1px solid ${bordersColor}`,
            borderBottom: `1px solid ${bordersColor}`
        },
        "& .alternative-products-container": {
            display: "table",
            paddingLeft: "10px",
            borderTop: `1px solid ${bordersColor}`
        },
        "& .alternative-product-row": {
            display: "table-row",
        },
        "& .alternative-product": {
            "position": "relative",
            "display": "table-cell",
            "minWidth": "280px",
            "maxWidth": "280px",
            "padding": ["8px", "40px"],
            "textAlign": "center",
            "borderRight": `1px solid ${bordersColor}`,
            "cursor": "pointer",
            "transition": "background .3s",
            "&:hover": {
                "background": backgroundHovered,
                "& .product-image img": {
                },
            },
            "&:active": {
                background: globals.colors.lightGray
            },
            "& .product-image": {
                maxWidth: "150px",
            },
            "& .product-name": {
                fontSize: productNameFontSize,
                color: nameColor
            },
            "& .product-price": {
                padding: ["5px", 0],
                fontSize: productPriceFontSize,
                color: priceColor,
                textDecoration: "underline",
                fontWeight: 700
            }
        },
        "& .add-button-container": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: "0",
            top: "50%",
            cursor: "pointer",
            height: "100%",
            transform: "translate(0, -50%)",
            width: "40px",
            borderRight: `1px solid ${bordersColor}`
        },
        "& .add-icon": {
            display: "block",
            // background: `${(configuration) => `${globals.customerSprite(configuration)}} ${globals.colors.red} no-repeat center 0 -212px transparent`, // TODO: add missing icon to sprite
            width: "20px",
            height: "20px"
        },
    }
};
