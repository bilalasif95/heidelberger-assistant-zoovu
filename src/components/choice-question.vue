<template>
  <div
    v-if="!isHiddenQuestion"
    :id="question.mid"
    :class="[componentStyle.container, componentStateClasses]"
    class="single-question-wrapper"
  >
    <component :is="questionHeadView" :question="question"></component>
    <template v-if="question.questionType === QuestionType.CHECKBOX">
      <div class="answers-wrapper checkbox">
        <component
          :is="checkboxAnswerView"
          v-for="(answer, index) in question.answers"
          :key="answer.mid"
          ref="answerElement"
          :answer="answer"
          :is-first-answer="isFirstAnswer(index)"
          :is-last-answer="isLastAnswer(index)"
        ></component>
      </div>
    </template>
    <template v-else-if="question.questionType === QuestionType.RADIO">
      <div class="answers-wrapper radio">
        <component
          :is="radioButtonAnswerView"
          v-for="(answer, index) in question.answers"
          :key="answer.mid"
          ref="answerElement"
          :answer="answer"
          :is-first-answer="isFirstAnswer(index)"
          :is-last-answer="isLastAnswer(index)"
        >
        </component>
      </div>
    </template>
    <template v-else>
      <h4><i>This question type is not supported yet</i></h4>
    </template>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  ChoiceQuestion,
  ComponentConfig,
  QuestionType,
  ComponentStyle,
  ComponentStyleDefinition,
  VueComponent,
  InjectComponent,
  Advisor,
  Mixins,
} from "@zoovu/runner-browser-api";
import { ChoiceQuestionView } from "@zoovu/runner-web-design-base";
import { QuestionConfiguration } from "@zoovu/runner-web-design-base/src/configuration/question-configuration";
import QuestionBaseMixin from "@zoovu/runner-web-design-base/src/components/question-base.vue";
import { CustomAttributes } from "../enums/custom-attributes";

@Component({
  name: "ChoiceQuestionView",
  mixins: [ChoiceQuestionView],
})
export default class ChoiceQuestionViewExtended extends Mixins(QuestionBaseMixin) {
  @Prop()
  private advisor: Advisor;

  @Prop()
  private question: ChoiceQuestion;

  @ComponentConfig(QuestionConfiguration)
  private componentConfiguration: QuestionConfiguration;

  @ComponentStyle()
  componentStyle: ComponentStyleDefinition;

  @InjectComponent("RadioButtonAnswerView")
  radioButtonAnswerView: VueComponent;

  @InjectComponent("CheckboxAnswerView")
  checkboxAnswerView: VueComponent;

  @InjectComponent("QuestionHeadView")
  questionHeadView: VueComponent;

  static isFirstAnswer(index) {
    return index === 0;
  }

  isLastAnswer(index) {
    return index === this.question.answers.length - 1;
  }

  get isHiddenQuestion(): boolean | undefined {
    return this.question.parameters[CustomAttributes.HIDE_QUESTION];
  }
}
</script>
