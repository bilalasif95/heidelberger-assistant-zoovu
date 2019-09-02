<template>
    <section :class="[componentStyle.container]">
        <div class="question-image" v-if="showImage">
            <p>{{question.questionText}}
                <i class="answer-info-text-trigger"
                   v-if="question.infoText"
                   v-tooltip="{content: question.infoText, enabled : tooltipEnabled, container: containerDivId}"
                   v-on="mobileInfoTextTrigger"
                   tabindex="0"></i>
            </p>
            <i class="image-element" v-if="showImage"
               :style="{ backgroundImage: 'url(' + question.images[0] + ')' }"></i>
        </div>
        <p v-else>{{question.questionText}}
            <i class="answer-info-text-trigger"
               v-if="question.infoText"
               v-tooltip="{content: question.infoText, enabled : tooltipEnabled, container: containerDivId}"
               v-on="mobileInfoTextTrigger"
               tabindex="0"></i>
        </p>
        <component :is="questionValidationMessageView"
                   :question="question">
        </component>

        <component @close-modal="hideInfoText" :status="infoTextShown" type="infotext" :is="modal"
                   v-if="isMobile && infoTextShown" class="answer-info-text-modal">
            <span slot="header">{{question.questionText}}</span>
            <span slot="body" v-text="question.infoText"></span>
        </component>
    </section>
</template>

<script lang="ts">
    import {isMobile} from "../../zoovu-design-system/helpers";
    import {Component, InjectComponent, VueComponent} from "@zoovu/runner-browser-api";
    import {QuestionHeadView} from "@zoovu/runner-web-design-base";
    import {vTooltip} from "../../zoovu-design-system/plugins";

    @Component(vTooltip)
    export default class QuestionHeadViewExtended extends QuestionHeadView {

        @InjectComponent("Modal")
        modal: VueComponent;

        isMobile: boolean = isMobile();

        infoTextShown: boolean = false;

        get tooltipEnabled() {
            return !this.isMobile;
        }

        get mobileInfoTextTrigger() {
            return this.isMobile ? {click: this.showInfoText} : {};
        }

        hideInfoText() {
            this.infoTextShown = false;
        }

        showInfoText() {
            this.infoTextShown = true;
        }

        get containerDivId() {
            return `#${this.$root["containerDivId"]} > div`;
        }
    }
</script>
