<template>
    <div class="layout"
         :class="[align && `align-${align}`, justify && `justify-${justify}`, direction && `direction-${direction}`, wrap && `wrap-${wrap}`]"><slot></slot></div>
</template>

<script lang="ts">
    import {
        Component, Prop, Vue
    } from "@zoovu/runner-browser-api";

    @Component()
    export default class Layout extends Vue {

        @Prop() private align;
        @Prop() private justify;
        @Prop() private direction;
        @Prop() private wrap;
    }
</script>

<style scoped lang="scss">
    .layout {
        display: flex;
        flex: 1 1 auto;
        flex-wrap: nowrap;
        min-width: 0;

        &.align-center {
            align-items: center;
        }
        &.align-end {
            align-items: flex-end;
        }
        &.align-start {
            align-items: flex-start;
        }
        &.align-stretch {
            align-items: stretch;
        }
        &.align-baseline {
            align-items: baseline;
        }

        &.direction-row {
            flex-direction: row;
        }
        &.direction-row-reverse {
            flex-direction: row-reverse;
        }
        &.direction-column {
            flex-direction: column;
        }
        &.direction-column-reverse {
            flex-direction: column-reverse;
        }

        &.justify-start {
            justify-content: flex-start;
        }
        &.justify-end {
            justify-content: flex-end;
        }
        &.justify-center {
            justify-content: center;
        }
        &.justify-space-between {
            justify-content: space-between;
        }
        &.justify-space-around {
             justify-content: space-around;
        }
        &.justify-space-evenly {
            justify-content: space-evenly;
        }

        &.wrap-nowrap {
            flex-wrap: nowrap;
        }
        &.wrap-wrap {
            flex-wrap: wrap;
        }
        &.wrap-wrap-reverse {
            flex-wrap: wrap-reverse;
        }
    }
</style>