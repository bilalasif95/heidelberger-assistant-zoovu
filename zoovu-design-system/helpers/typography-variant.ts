import {FontsConfiguration, mapFontType, CustomFontSelection} from "@zoovu/runner-web-design-base";

export default (fontFn, fontWeight, sizeRatio, lineHeight, letterSpacing) => {
    return {
        fontFamily: parseFontConfiguration(fontFn).family,
        fontWeight: fontWeight,
        fontSize: (configuration) => (fontFn(configuration) as FontsConfiguration).baseSize * sizeRatio,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing
    };
};

export function parseFontConfiguration(fontFn) {
    return {
        type: (configuration) => getFontType(fontFn, configuration),
        name: (configuration) => getSelectedFontName(fontFn, configuration),
        family: (configuration) => `"${getSelectedFontName(fontFn, configuration)}", ${getFontType(fontFn, configuration)}`
    };
}

function getSelectedFontName(fontFn, configuration) {
    const fontSelection = (fontFn(configuration) as FontsConfiguration).fontType;
    return fontSelection.userLibraryFontName != null ? fontSelection.userLibraryFontName : fontSelection.selected;
}

function getFontType(fontFn, configuration) {
    return mapFontType(getSelectedFontName(fontFn, configuration));
}
