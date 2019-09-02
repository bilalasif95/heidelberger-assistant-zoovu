const customerSpriteUrl = require("../../assets/images/sprite.svg");
const customerSpriteUrl2 = require("../../assets/images/sprite_blue-design-theme.svg");
const customerStarsImage = require("../../assets/images/4-stars.png");
const loaderGifUrl = require("../../assets/images/loader.gif");

export default {
    customerSprite: ({webDesignContextPath}) => `url(\"${webDesignContextPath + customerSpriteUrl}")`,
    customerSprite2: ({webDesignContextPath}) => `url(\"${webDesignContextPath + customerSpriteUrl2}")`,
    loaderGif: ({webDesignContextPath}) => `url(\"${webDesignContextPath + loaderGifUrl}")`,
    customerStarsImage: ({webDesignContextPath}) => `url(\"${webDesignContextPath + customerStarsImage}")`,
    colors: {
        primaryColor: "#32374b",
        primaryColorLighter: "#2e3e4f",
        gray: "#f2f2f2",
        darkGray: "#c4c4c4",
        darkerGray: "#727a86",
        lightGray: "#dadada",
        midGray: "#eaeaea",
        blue: "#009bd4",
        black: "#000",
        white: "#fff",
        red: "#d0392a",
        redLighter: "#df4318",
    },
    breakpoints: {
        $xs: "max-width: 767px",
        $sm: "max-width: 920px",
        $md: "min-width: 1120px",
        $lg: "min-width: 1400px"
    },
    layout: {
        maxContainerWidth: "1420px"
    }
};
