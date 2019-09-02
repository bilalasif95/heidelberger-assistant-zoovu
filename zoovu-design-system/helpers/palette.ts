import * as chroma from "chroma-js";

function inRange(x: number, min: number, max: number): boolean {
    return ((x - min) * (x - max) <= 0);
}

export interface PaletteSpectrum {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
}

export default class Palette {

    public get spectrum(): PaletteSpectrum {
        return this._spectrum;
    }

    public static contrast(palette: PaletteSpectrum, weight: string, type = "auto"): string {
        if (!palette.hasOwnProperty(weight)) {
            throw new Error(`${weight} weight does not exist`);
        }

        const contrastingColors = Palette.findContrastingColors(palette, weight);
        const contrast = {
            light: contrastingColors.shift(),
            dark: contrastingColors.pop()
        };

        const colorLuminance = chroma(palette[weight]).luminance() > 0.5 ? "dark" : "light";

        return palette[type === "auto"
            ? contrast[colorLuminance]
            : contrast[type]
        ];
    }

    private static weights: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

    private static findContrastingColors(palette, weight) {
        return Object.keys(palette).filter((w) => {
            return chroma.contrast(palette[w], palette[weight]) >= 4.5;
        });
    }

    private static createScale(color1, color2, numberOfColors) {
        return chroma.scale([color1, color2]).padding(-0.15).correctLightness().colors(numberOfColors);
    }

    private static calculateMissingColors(positionIndex) {
        const numberOfColorsInTotal = 10;
        const rightNumber = numberOfColorsInTotal - positionIndex;
        const leftNumber = numberOfColorsInTotal - rightNumber;
        return {left: leftNumber, right: rightNumber};
    }

    private readonly _spectrum: PaletteSpectrum;

    constructor(color: string) {
        // TODO investigate hsl.l instead of luminance - baseColorChroma.luminance(), baseColorChroma.get('hsl.l') are different
        const colorWeight = this.getColorWeight(chroma(color).luminance());
        const colorWeightIndex = Palette.weights.indexOf(colorWeight) + 1;
        const paletteProportions = Palette.calculateMissingColors(colorWeightIndex);

        paletteProportions.left < paletteProportions.right
            ? paletteProportions.left += 1
            : paletteProportions.right += 1;

        const darkestColor = chroma(color).set("hsl.l", 0.2).hex();
        const lightestColor = chroma(color).set("hsl.l", 0.99).hex();
        let left = Palette.createScale(lightestColor, color, paletteProportions.left);
        let right = Palette.createScale(color, darkestColor, paletteProportions.right);
        if (left.length === 10) right = [];
        if (right.length === 10) left = [];

        this._spectrum = this.buildPalette(left, right);
    }

    private getColorWeight(ratio): number {
        const sizesByBrightness = {
            50: [1, 0.80],
            100: [0.79, 0.5],
            200: [0.49, 0.3],
            300: [0.29, 0.2],
            400: [0.19, 0.14],
            500: [0.13, 0.09],
            600: [0.08, 0.06],
            700: [0.05, 0.04],
            800: [0.03, 0.02],
            900: [0.01, 0]
        };

        const calculatedRatio = Math.round(ratio * 100) / 100;
        return parseInt(Object.keys(sizesByBrightness)
            .filter((size) => inRange(
                calculatedRatio,
                sizesByBrightness[size][1],
                sizesByBrightness[size][0]))[0]
        );
    }

    private buildPalette(left: string[], right: string[]): PaletteSpectrum {
        const colors = left.concat(right);
        return colors
            .filter((v, i) => colors.indexOf(v) === i)
            .sort((colorA: string, colorB: string) => chroma(colorA).luminance() - chroma(colorB).luminance())
            .reverse()
            .reduce((palette: Partial<PaletteSpectrum>, color: string, index: number) => {
                palette[Palette.weights[index]] = color;
                return palette;
            }, {}) as PaletteSpectrum;
    }

}
