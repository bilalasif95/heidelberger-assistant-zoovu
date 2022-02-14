<template>
  <button
    v-dompurify-html="$t('message-start-over')"
    type="button"
    :class="[rootElementClass, componentStyle.container]"
    @click="startOver"
  ></button>
</template>

<script lang="ts">
import { Component } from "@zoovu/runner-browser-api";
import { StartOverButtonView as StartOverButtonViewBase } from "@zoovu/runner-web-design-base";

@Component
export default class StartOverButtonViewExtended extends StartOverButtonViewBase {
  startOver(): void {
    this.advisor.startOver();
  }
}
</script>
