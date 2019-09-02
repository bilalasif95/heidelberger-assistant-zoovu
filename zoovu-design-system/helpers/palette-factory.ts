import Palette from "./palette";

export class PaletteFactory {
    public static createPalette(color: string): Palette {
        if (color == null) {
            throw new Error("Cannot create palette for undefined color");
        }

        if (this.paletteCache.has(color)) {
            return this.paletteCache.get(color);
        } else {
            const palette = new Palette(color);
            this.paletteCache.set(color, palette);
            return palette;
        }
    }

    private static paletteCache = new Map<string, Palette>();
}
