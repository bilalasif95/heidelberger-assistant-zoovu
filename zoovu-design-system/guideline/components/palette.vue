<template>
    <div>
        <ul>
            <li v-for="color in returnPalette"><i :style="{background: color.value}"><span
                    :style="{color: getContrast(color.key)}">{{color.value}}</span></i>
            </li>
        </ul>
        <h1>final color</h1>
        <input type="color" v-model="inputColor">
        <ul>
        </ul>
    </div>
</template>

<script lang="ts">
    import {
        Component, Vue, Watch
    } from "@zoovu/runner-browser-api";
    import {Palette} from "../../helpers";
    import DesignSystem from '../../'
    import {PaletteFactory} from "../../helpers/palette-factory";

    @Component()
    export default class PaletteElement extends Vue {
        public inputColor: String = 'red';
        public palette = PaletteFactory.createPalette(this.inputColor)

        mounted() {
            console.log(DesignSystem(this.$root.componentsConfiguration))
        }

        get colorsArray() {
            return Object.keys(this.palette).map((colorKey) => this.$root.componentsConfiguration.colors[colorKey])
        }

        getContrast(key) {
            return Palette.contrast(this.palette.spectrum, key)
        }

        get returnPalette() {
            let newPal = this.palette.spectrum
            return Object.keys(newPal).map((colorKey) => {
                return {value: newPal[colorKey], key: colorKey}
            })
        }

        @Watch('inputColor', {immediate: true, deep: true})
        onColorChange(val: String) {
            this.palette = PaletteFactory.createPalette(val);
        }
    }
</script>

<style scoped lang="scss">
    .is-default {
        border: 3px dashed pink;
    }

    li i {
        display: flex;
        width: 60px;
        height: 60px;
        align-items: center;
        justify-content: center;
        border: 1px solid #848484;
        border-radius: 5px;
        margin: 2px;
        font-size: 10px;
    }

    li {
        display: inline-block;
    }
</style>
