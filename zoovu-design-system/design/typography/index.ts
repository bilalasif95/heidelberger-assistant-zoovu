import {typographyVariant} from "../../helpers";
import {parseFontConfiguration} from "../../helpers/typography-variant";

const fontsConfiguration = {
    fontName: parseFontConfiguration((configuration) => configuration.fonts).name,
    fontType: parseFontConfiguration((configuration) => configuration.fonts).type,
    fontFamily: parseFontConfiguration((configuration) => configuration.fonts).family,
    fontSize: (ratio?) => ({fonts}) => fonts.baseSize * (ratio ? ratio : 1) + "px",
    fontWeightThin: 100,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightBlack: 900,
    h1: typographyVariant((configuration) => configuration.fonts, 300, 6, 1, -1.5),
    h2: typographyVariant((configuration) => configuration.fonts, 300, 3.75, 1, -0.5),
    h3: typographyVariant((configuration) => configuration.fonts, 400, 3, 1.04, 0),
    h4: typographyVariant((configuration) => configuration.fonts, 400, 2.125, 1.17, 0.25),
    h5: typographyVariant((configuration) => configuration.fonts, 400, 1.5, 1.33, 0),
    h6: typographyVariant((configuration) => configuration.fonts, 500, 1.25, 1.6, 0.15),
    subtitle1: typographyVariant((configuration) => configuration.fonts, 400, 1, 1.75, 0.15),
    subtitle2: typographyVariant((configuration) => configuration.fonts, 500, 0.875, 1.57, 0.1),
    button: typographyVariant((configuration) => configuration.fonts, 500, 0.875, 1.75, 0.4),
    caption: typographyVariant((configuration) => configuration.fonts, 400, 0.75, 1.66, 0.4),
    overline: typographyVariant((configuration) => configuration.fonts, 400, 0.75, 2.66, 1)
};

export default fontsConfiguration;
