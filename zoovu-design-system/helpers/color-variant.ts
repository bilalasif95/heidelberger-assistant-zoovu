import * as chroma from "chroma-js";

export default (colorFn) => {
    return {
        default: (configuration) => chroma(colorFn(configuration)).hex(),
        light: (configuration) => chroma(colorFn(configuration)).brighten(0.1).hex(),
        lighter: (configuration) => chroma(colorFn(configuration)).brighten(1.2).hex(),
        dark: (configuration) => chroma(colorFn(configuration)).darken(2.21).hex(),
        highlight: (configuration) => chroma(colorFn(configuration)).luminance() > 0.5
            ? (c1) => chroma(colorFn(c1)).darken(0.27).hex()
            : (c2) => chroma(colorFn(c2)).brighten(1).hex(),
        gray: (configuration) => chroma(colorFn(configuration)).saturate(-4).hex(),
        transparent: (configuration) => chroma(colorFn(configuration)).alpha(0.8).css(),
    };
};
