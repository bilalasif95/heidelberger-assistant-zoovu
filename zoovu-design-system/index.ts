import {
    colors,
    elevation,
    mediaQuery,
    shadows,
    spacing,
    transitions,
    defaultStyles,
    typography
} from "./design";

export default () => {
    return {
        breakpoints: mediaQuery(),
        defaults: defaultStyles,
        colors,
        shadows,
        spacing,
        transitions: transitions(),
        typography,
        zIndex: elevation(),
    };
};
