<template>
  <div :class="[componentStyle.container, rootElementClass]">
    <p
      v-if="flowStep.hasStepHeadline && showHeadline && (flowStep.submitStatus !== 'SUBMITTED' || !lastFlowStep)"
      class="page-title"
    >
      {{ flowStep.stepHeadline }}
    </p>

    <div
      v-if="!lastFlowStep || flowStep.submitStatus !== 'SUBMITTED'"
      class="questions-wrapper"
      :class="{
        'multi-answer': flowStep.type === 'LEAD',
        'page-submit-in-progress': lastFlowStep && flowStep.submitStatus === 'SUBMIT_IN_PROGRESS',
      }"
    >
      <template v-for="(question, index) in flowStep.questions">
        <component
          :is="ColorPickerQuestionView"
          v-if="question.parameters.customQuestionType === 'colorPicker'"
          :key="question.mid"
          :advisor="advisor"
          :question="question"
          :is-first-question="isFirstQuestion(index)"
          :is-last-question="isLastQuestion(index)"
        >
        </component>
        <component
          :is="choiceQuestionView"
          v-else-if="question.questionType === QuestionType.RADIO || question.questionType === QuestionType.CHECKBOX"
          :key="question.mid"
          :advisor="advisor"
          :question="question"
          :is-first-question="isFirstQuestion(index)"
          :is-last-question="isLastQuestion(index)"
        >
        </component>
        <component
          :is="dropDownQuestionView"
          v-else-if="question.questionType === QuestionType.DROPDOWN"
          :key="question.mid"
          :question="question"
          :is-first-question="isFirstQuestion(index)"
          :is-last-question="isLastQuestion(index)"
        >
        </component>
        <component
          :is="sliderQuestionView"
          v-else-if="question.questionType === QuestionType.NUMERIC"
          :key="question.mid"
          :question="question"
          :is-first-question="isFirstQuestion(index)"
          :is-last-question="isLastQuestion(index)"
        >
        </component>
        <component
          :is="rangeQuestionView"
          v-else-if="question.questionType === QuestionType.RANGE"
          :key="question.mid"
          :question="question"
          :is-first-question="isFirstQuestion(index)"
          :is-last-question="isLastQuestion(index)"
        >
        </component>
        <component
          :is="textQuestionView"
          v-else-if="question.questionType === QuestionType.TEXT || question.questionType === QuestionType.EMAIL"
          :key="question.mid"
          :question="question"
          :is-first-question="isFirstQuestion(index)"
          :is-last-question="isLastQuestion(index)"
        >
        </component>
        <h4 v-else :key="question.mid"><i>This question type is not supported yet</i></h4>
      </template>
    </div>

    <div v-if="lastFlowStep && flowStep.submitStatus === 'SUBMITTED'" class="page-submit-success-message-wrapper">
      <p class="page-submit-success-headline">{{ $t("message-lead-submitted-headline") }}</p>
      <p class="page-submit-success-subtitle">{{ $t("message-lead-submitted-subtitle") }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  BaseView,
  Component,
  ComponentStyle,
  ComponentStyleDefinition,
  FlowStep,
  InjectComponent,
  ModelProp,
  Prop,
  QuestionType,
  VueComponent,
  Advisor,
} from "@zoovu/runner-browser-api";
import { PageView } from "@zoovu/runner-web-design-base";

@Component({})
export default class PageViewExtended extends PageView {
  @ComponentStyle()
  componentStyle: ComponentStyleDefinition;

  @ModelProp()
  private flowStep: FlowStep;

  @Prop()
  private advisor: Advisor;

  @Prop({ default: false })
  private showHeadline: boolean;

  @Prop({ default: false })
  private lastFlowStep: boolean;

  @InjectComponent("ColorPickerQuestionView")
  ColorPickerQuestionView: VueComponent;

  @InjectComponent("ChoiceQuestionView")
  choiceQuestionView: VueComponent;

  @InjectComponent("DropDownQuestionView")
  dropDownQuestionView: VueComponent;

  @InjectComponent("RangeQuestionView")
  rangeQuestionView: VueComponent;

  @InjectComponent("SliderQuestionView")
  sliderQuestionView: VueComponent;

  @InjectComponent("TextQuestionView")
  textQuestionView: VueComponent;

  static isFirstQuestion(index) {
    return index === 0;
  }

  isLastQuestion(index) {
    return index === this.flowStep.questions.length - 1;
  }
}
</script>
