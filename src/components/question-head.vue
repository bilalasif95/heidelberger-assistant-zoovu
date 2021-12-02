<template>
  <section :class="[componentStyle.container]">
    <div v-if="showImage" class="question-image">
      <p>
        {{ question.questionText }}
        <i
          v-if="question.infoText"
          v-tooltip="{ content: question.infoText, enabled: tooltipEnabled, container: containerDivId }"
          class="answer-info-text-trigger"
          tabindex="0"
          v-on="mobileInfoTextTrigger"
        ></i>
      </p>
      <i v-if="showImage" class="image-element" :style="{ backgroundImage: 'url(' + question.images[0] + ')' }"></i>
    </div>
    <p v-else>
      {{ question.questionText }}
      <i
        v-if="question.infoText"
        v-tooltip="{ content: question.infoText, enabled: tooltipEnabled, container: containerDivId }"
        class="answer-info-text-trigger"
        tabindex="0"
        v-on="mobileInfoTextTrigger"
      ></i>
    </p>
    <component :is="questionValidationMessageView" :question="question"> </component>

    <component
      :is="modal"
      v-if="isMobile && infoTextShown"
      :status="infoTextShown"
      type="infotext"
      class="answer-info-text-modal"
      @close-modal="hideInfoText"
    >
      <span slot="header">{{ question.questionText }}</span>
      <span slot="body" v-text="question.infoText"></span>
    </component>
  </section>
</template>

<script lang="ts">
import { isMobile } from "@zoovu/design-system/src/helpers";
import { vTooltip } from "@zoovu/design-system/src/plugins";
import { Component, InjectComponent, VueComponent } from "@zoovu/runner-browser-api";
import { QuestionHeadView } from "@zoovu/runner-web-design-base";

@Component(vTooltip)
export default class QuestionHeadViewExtended extends QuestionHeadView {
  @InjectComponent("Modal")
  modal: VueComponent;

  isMobile: boolean = isMobile();

  infoTextShown = false;

  get tooltipEnabled() {
    return !this.isMobile;
  }

  get mobileInfoTextTrigger() {
    return this.isMobile ? { click: this.showInfoText } : {};
  }

  hideInfoText() {
    this.infoTextShown = false;
  }

  showInfoText() {
    this.infoTextShown = true;
  }

  get containerDivId() {
    return `#${this.$root.containerDivId} > div`;
  }
}
</script>
