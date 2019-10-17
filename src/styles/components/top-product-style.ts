import globals from "../partials/global-variables";
import stylesConfig from "../styles.config";

const productNameFontSize = stylesConfig.typography.fontSize(1.8);
const productNameFontColor = stylesConfig.colors.primaryFontColor;
const productPriceFontColor = productNameFontColor;
const productPriceFontSize = stylesConfig.typography.fontSize(1.9);
const compareButtonFontColor = stylesConfig.colors.secondaryFontColor;
const compareButtonHoverColor = stylesConfig.colors.primary.spectrum500;
const addToBasketButtonBackground = {
    border: stylesConfig.colors.primaryAccentColorVariants.default,
    hover: stylesConfig.colors.primary.spectrum500
};
const productPropertiesFontColor = {
    default: stylesConfig.colors.primaryFontColor,
    hover: stylesConfig.colors.primaryFontColor,
    negative: stylesConfig.colors.negativeAttributeColor,
    positive: stylesConfig.colors.positiveAttributeColor
};
const focusOutlineColor = stylesConfig.colors.secondary.spectrum400;

export default {
    container: {
        "marginTop": "10px",
        "paddingBottom": "60px",
        "width": "100%",
        "display": "flex",
        "alignItems": "flex-start",
        "borderBottom": "1px solid",
        "borderColor": stylesConfig.colors.secondary.spectrum100,
        [`@media (${globals.breakpoints.$xs})`]: {
            flexWrap: "wrap",
            marginTop: 0,
            paddingBottom: "30px",
        },
        "& .image-price": {
            width: "40%",
            [`@media (${globals.breakpoints.$xs})`]: {
                width: "100%",
            },
        },
        "& .product-details": {
            width: "60%",
            display: "flex",
            flexFlow: "wrap column",
            [`@media (${globals.breakpoints.$xs})`]: {
                width: "100%",
            }
        },
        "& .product-image": {
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "margin": "0 25px 20px",
            "minHeight": "250px",
            "maxWidth": "100%",
            [`@media (${globals.breakpoints.$xs})`]: {
                margin: "0 0 10px",
            },
            "& a": {
                "&:focus": {
                    outlineColor: stylesConfig.colors.primary.spectrum400
                },
            },
            "& img": {
                maxWidth: "100%",
                height: "auto",
                maxHeight: "350px"
            }
        },
        "& .product-price": {
            textAlign: "center",
            fontWeight: "400",
            color: productPriceFontColor,
            fontSize: productPriceFontSize,
            padding: [0, 0, "5px"],
            [`@media (${globals.breakpoints.$xs})`]: {
                fontSize: "19.2px",
                fontWeight: "600",
            }
        },
        "& a.product-name": {
            "textDecoration": "none",
            "fontWeight": 700,
            "fontSize": productNameFontSize,
            "color": productNameFontColor,
            "lineHeight": 1.2,
            "width": "100%",
            "display": "block",
            [`@media (${globals.breakpoints.$xs})`]: {
                marginTop: "50px",
                marginBottom: "20px"
            },
            "&:focus": {
                outlineColor: stylesConfig.colors.primary.spectrum400
            },
        },
        "& .compare-wrapper": {
            "padding": "0",
            "order": 5,
            [`@media (${globals.breakpoints.$xs})`]: {
                display: "none",
            },
            "& .product-compare-wrapper": {
                marginTop: "20px",
            },
            "& label, & .start-compare-button": {
                "padding": "10px 13px",
                "backgroundColor": stylesConfig.colors.primaryAccentColorVariants.default,
                "fontSize": stylesConfig.typography.fontSize(0.9),
                "color": compareButtonFontColor,
                "textTransform": "uppercase",
                "display": "inline-block",
                "transition": "background .3s ease",
                "&:hover": {
                    backgroundColor: compareButtonHoverColor,
                },
                "&:focus": {
                    outlineColor: focusOutlineColor,
                },
            },
            "& .start-compare-button": {
                marginTop: "5px",
            }
        },
        "& .rating-wrapper": {
            "margin": "10px 0",
            "textAlign": "center",
            "& .rating-image": {
                "background": (configuration) => `${globals.customerSprite2(configuration)} no-repeat 0 -238px`,
                "width": "88px",
                "height": "16px",
                "margin": "0 auto",
                "& .rating-image-over": {
                    background: (configuration) => `${globals.customerSprite2(configuration)} no-repeat 0 -207px`,
                    height: "16px",
                }
            }
        },
        "& .properties-title": {
            fontSize: stylesConfig.typography.fontSize(),
            color: stylesConfig.colors.primaryFontColor,
            marginTop: "25px",
            marginBottom: 0,
            padding: "0 0 20px",
        },
        "& .product-properties": {
            "display": "flex",
            "flexFlow": "wrap",
            "padding": "0",
            "order": 3,
            "listStyle": "none",
            "margin": ["5px", 0, 0, 0],
            "overflow": "hidden",
            "color": productPropertiesFontColor,
            "wordWrap": "break-word",
            "maxWidth": "100%",
            "& > li": {
                marginBottom: "7px",
                fontSize: stylesConfig.typography.fontSize(),
                flex: "0 0 50%",
                [`@media (${globals.breakpoints.$xs})`]: {
                    flex: "0 0 100%",
                },
            },
            "& i": {
                height: "14px",
                width: "15px",
                display: "inline-block",
                marginRight: "7px"
            },

            "& .positive-property": {
                "color": productPropertiesFontColor.default,
                "& i": {
                    position: "relative",
                    top: "3px",
                    background: (configuration) => `${globals.customerSprite2(configuration)} no-repeat 0 -70px`
                }
            },
            "& .negative-property": {
                "color": productPropertiesFontColor.default,
                "& i": {
                    position: "relative",
                    top: "3px",
                    background: (configuration) => `${globals.customerSprite2(configuration)} no-repeat -43px -70px`
                }
            },
            "& .neutral-property": {
                "color": productPropertiesFontColor.default,
                "& i": {
                    background: (configuration) => `${globals.customerSprite2(configuration)} no-repeat -20px -70px`
                }
            },
        },
        "& .product-footer": {
            display: "flex",
            order: 5,
            position: "relative",
            marginTop: "auto",
        },
        "& .add-to-basket-button": {
            "order": 3,
            "display": "inline-block",
            "fontSize": stylesConfig.typography.fontSize(0.9),
            "color": compareButtonFontColor,
            "padding": "11px 110px",
            "textTransform": "uppercase",
            "fontWeight": 400,
            "margin": "25px 0 0",
            "textAlign": "center",
            "textDecoration": "none",
            "border": "1px solid",
            "borderColor": addToBasketButtonBackground.border,
            "backgroundColor": addToBasketButtonBackground.border,
            "transition": "background .3s ease",
            [`@media (${globals.breakpoints.$xs})`]: {
                padding: "11px 10px",
                width: "100%"
            },
            "&:hover": {
                backgroundColor: addToBasketButtonBackground.hover
            },
            "&:focus": {
                outlineColor: focusOutlineColor,
            },
        },
    }
};
