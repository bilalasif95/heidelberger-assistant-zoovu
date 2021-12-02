<template>
  <div :id="advisor.mid" :class="[componentStyle.container]">
    <component
      :is="questionnaireView"
      :advisor="advisor"
      :show-page-selector-between-navigation-buttons="false"
      :show-page-selector-above-main-section="true"
    >
    </component>
    <component :is="resultsSectionView" :advisor="advisor" :show-top-product="true" :show-page-selector="true">
    </component>
    <component :is="comparisonView" :comparison-manager="advisor.comparisonManager"></component>
  </div>
</template>

<script lang="ts">
import { ComponentConfig, Component, ComponentStyle, ComponentStyleDefinition } from "@zoovu/runner-browser-api";
import {
  AdvisorView,
  ColorsConfiguration,
  FontsConfiguration,
  CustomCSSConfiguration,
} from "@zoovu/runner-web-design-base";
import { AnimationsAndTransitionsConfiguration } from "@zoovu/runner-web-design-base/src/configuration/index";
import { CustomizedStandardTextsConfiguration } from "../configuration/customized-standard-texts";

@Component({})
export default class AdvisorViewExtended extends AdvisorView {
  @ComponentStyle()
  componentStyle: ComponentStyleDefinition;

  @ComponentConfig(ColorsConfiguration)
  private colors: ColorsConfiguration;

  @ComponentConfig(FontsConfiguration)
  private fonts: FontsConfiguration;

  @ComponentConfig(CustomizedStandardTextsConfiguration)
  private standardTexts: CustomizedStandardTextsConfiguration;

  @ComponentConfig(CustomCSSConfiguration)
  private customCSSConfiguration: CustomCSSConfiguration;

  @ComponentConfig(AnimationsAndTransitionsConfiguration)
  animationsAndTransitionsConfiguration: AnimationsAndTransitionsConfiguration;
}
</script>
