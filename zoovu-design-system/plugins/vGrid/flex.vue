<template>
    <div class="flex" :class="col"><slot></slot></div>
</template>

<script lang="ts">
    import {
        Component, Prop, Vue
    } from "@zoovu/runner-browser-api";

    @Component()
    export default class Flex extends Vue {

        @Prop()
        private col;
    }
</script>

<style scoped lang="scss">
    $breakpoint-list: (
        (xs, 0),
        (sm, 600px),
        (md, 960px),
        (lg, 1280px),
        (xl, 1920px)
    );
    .flex {
        flex: 1 1 auto;
        max-width: 100%;

        @each $label, $min-width in $breakpoint-list {
            @for $i from 1 through 12 {
                $width: $i / 12 * 100%;
                &.#{$label}#{$i} {
                    @media screen and (min-width: #{$min-width}) {
                        flex-basis: $width;
                        flex-grow: 0;
                        max-width: $width;
                    }
                }
            }
        }
    }
</style>