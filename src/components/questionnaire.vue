<template>
  <div>
    <component
      :is="advisorSectionView"
      :advisor="advisor"
      :section-type="SectionType.QUESTIONNAIRE"
      :root-element-class="rootElementClass"
      :show-page-selector-between-navigation-buttons="showPageSelectorBetweenNavigationButtons"
      :show-page-selector-above-main-section="showPageSelectorAboveMainSection"
    >
      <template slot="main-content">
        <component
          :is="pageView"
          :flow-step="navigation.currentFlowStep"
          :show-headline="navigation.currentFlowStep.type === 'LEAD'"
          :last-flow-step="lastFlowStep"
          :advisor="advisor"
        >
        </component>
      </template>

      <template slot="footer">
        <component :is="adviceView" :advice="advisor.advice"></component>
        <component :is="brandingView" />
      </template>
    </component>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Advisor,
  BaseView,
  QAFlowStepsNavigation,
  ComponentStyle,
  ComponentStyleDefinition,
  VueComponent,
  InjectComponent,
  SectionType,
} from "@zoovu/runner-browser-api";
import { QuestionnaireView } from "@zoovu/runner-web-design-base";

@Component({
  name: "QuestionnaireView",
  mixins: [QuestionnaireView],
})
export default class QuestionnaireViewExtended extends BaseView {
  @Prop({ default: true })
  showPageSelectorBetweenNavigationButtons: boolean;

  @Prop({ default: false })
  showPageSelectorAboveMainSection: boolean;

  @Prop()
  private advisor: Advisor;

  @ComponentStyle()
  componentStyle: ComponentStyleDefinition;

  @InjectComponent("AdvisorSectionView")
  advisorSectionView: VueComponent;

  @InjectComponent("PageView")
  pageView: VueComponent;

  @InjectComponent("BrandingView")
  brandingView: VueComponent;

  @InjectComponent("AdviceView")
  adviceView: VueComponent;

  get navigation(): QAFlowStepsNavigation {
    return this.advisor.flowStepsNavigation;
  }

  get lastFlowStep(): boolean {
    return !this.advisor.flowStepsNavigation.hasNext;
  }

  get SectionType(): SectionType {
    return SectionType;
  }

  get rootElementClass(): string {
    return "questionnaire-wrapper";
  }
}
</script>
