<template>
  <div
    v-if="answer && (!answer.disabled || componentConfiguration.showDisabled)"
    :id="answer.mid + '-wrapper'"
    :class="[componentStyle.container, componentStateClasses, answerWrapperClass]"
    class="answer"
    tabindex="0"
    :style="answerWrapperStyle"
    @keyup.enter="enterPressed"
  >
    <label :for="answer.mid">
      <div v-if="showImage" class="answer-image">
        <i v-if="showImage" class="image-element" :style="{ backgroundImage: 'url(' + answer.images[0] + ')' }"></i>
      </div>
      <div class="answer-content">
        <component
          :is="infoText"
          v-if="answer.hasInfoText && infoTextShown && !isMobile"
          class="answer-info-text"
          :text="answer.infoText"
        ></component>

        <input
          :id="answer.mid"
          :type="inputType"
          :checked="answer.selected"
          :disabled="answer.disabled"
          @click="selectAnswer"
        />
        <span class="answer-selection-button"></span>
        <span class="answer-text">{{ answer.answerText }}</span>
        <i
          v-if="answer.hasInfoText"
          v-tooltip="{ content: answer.infoText, enabled: tooltipEnabled, container: containerDivId }"
          class="answer-info-text-trigger"
          tabindex="0"
          @click.stop.prevent="showInfoText"
        ></i>
      </div>
    </label>
    <component
      :is="modal"
      v-if="answer.hasInfoText && infoTextShown && isMobile"
      :status="infoTextShown"
      type="infotext"
      class="answer-info-text-modal"
      @close-modal="hideInfoText"
    >
      <span slot="header">{{ answer.answerText }}</span>
      <span slot="body" v-text="answer.infoText"></span>
    </component>
  </div>
</template>

<script lang="ts">
import { isMobile } from "@zoovu/design-system/src/helpers";
import { vTooltip } from "@zoovu/design-system/src/plugins";
import { ChoiceAnswerView } from "@zoovu/runner-web-design-base";
import { VueComponent, InjectComponent, Component } from "@zoovu/runner-browser-api";

@Component(vTooltip)
export default class ChoiceAnswerViewExtended extends ChoiceAnswerView {
  private isMobile: boolean = isMobile();

  public infoTextShown = false;

  selectAnswer() {
    this.$emit("answer-select");
  }

  hideInfoText() {
    this.infoTextShown = false;
  }

  showInfoText() {
    if (this.isMobile) this.infoTextShown = true;
  }

  get tooltipEnabled() {
    return !this.isMobile;
  }

  @InjectComponent("Modal")
  modal: VueComponent;

  @InjectComponent("PaletteElement")
  PaletteElement: VueComponent;

  static enterPressed(event) {
    event.target.querySelector("label").click();
  }

  get containerDivId() {
    return `#${this.$root.containerDivId} > div`;
  }
}
</script>
