import {colorVariant, Palette} from "../../helpers";
import {PaletteFactory} from "../../helpers/palette-factory";

function primaryColorSpectrum({colors}) {
    return PaletteFactory.createPalette(colors.primaryColor).spectrum;
}

function secondaryColorSpectrum({colors}) {
    return PaletteFactory.createPalette(colors.secondaryColor).spectrum;
}

const colorsConfiguration = {

    primaryColorSpectrum,
    secondaryColorSpectrum,

    primary: {
        spectrum100: (configuration) => primaryColorSpectrum(configuration)[100],
        spectrum200: (configuration) => primaryColorSpectrum(configuration)[200],
        spectrum300: (configuration) => primaryColorSpectrum(configuration)[300],
        spectrum400: (configuration) => primaryColorSpectrum(configuration)[400],
        spectrum500: (configuration) => primaryColorSpectrum(configuration)[500],
        spectrum600: (configuration) => primaryColorSpectrum(configuration)[600],
        spectrum700: (configuration) => primaryColorSpectrum(configuration)[700],
        spectrum800: (configuration) => primaryColorSpectrum(configuration)[800],
        spectrum900: (configuration) => primaryColorSpectrum(configuration)[900],
    },
    secondary: {
        spectrum100: (configuration) => secondaryColorSpectrum(configuration)[100],
        spectrum200: (configuration) => secondaryColorSpectrum(configuration)[200],
        spectrum300: (configuration) => secondaryColorSpectrum(configuration)[300],
        spectrum400: (configuration) => secondaryColorSpectrum(configuration)[400],
        spectrum500: (configuration) => secondaryColorSpectrum(configuration)[500],
        spectrum600: (configuration) => secondaryColorSpectrum(configuration)[600],
        spectrum700: (configuration) => secondaryColorSpectrum(configuration)[700],
        spectrum800: (configuration) => secondaryColorSpectrum(configuration)[800],
        spectrum900: (configuration) => secondaryColorSpectrum(configuration)[900],
    },
    contrast: Palette.contrast,

    primaryFontColor: (configuration) => secondaryColorSpectrum(configuration)["900"],
    secondaryFontColor: (configuration) => primaryColorSpectrum(configuration)["50"],
    infotextBackground: (configuration) => secondaryColorSpectrum(configuration)["700"],
    positiveAttributeColor: (configuration) => primaryColorSpectrum(configuration)["300"],
    negativeAttributeColor: (configuration) => secondaryColorSpectrum(configuration)["600"],
    advisorBackgroundVariants: colorVariant((configuration) => primaryColorSpectrum(configuration)["100"]),
    primaryAccentColorVariants: colorVariant((configuration) => primaryColorSpectrum(configuration)["400"]),
    secondaryAccentColorVariants: colorVariant((configuration) => secondaryColorSpectrum(configuration)["400"]),
};

export default colorsConfiguration;
