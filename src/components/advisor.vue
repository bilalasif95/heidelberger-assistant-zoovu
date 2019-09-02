<template>
    <div :id="advisor.mid" :class="[componentStyle.container]">
        <component
                :is="questionnaireView"
                :advisor="advisor"
                :showPageSelectorBetweenNavigationButtons="false"
                :showPageSelectorAboveMainSection="true"
        >
        </component>
        <component
                :is="resultsSectionView"
                :advisor="advisor"
                :showTopProduct="true"
                :showPageSelector="true"
        >
        </component>
        <component :is="comparisonView" :comparisonManager="advisor.comparisonManager"></component>
    </div>
</template>

<script lang="ts">
    import {ComponentConfig, Component, ComponentStyle, ComponentStyleDefinition} from "@zoovu/runner-browser-api";
    import {AdvisorView, ColorsConfiguration, FontsConfiguration, CustomCSSConfiguration} from "@zoovu/runner-web-design-base";
    import {CustomizedStandardTextsConfiguration} from "../configuration/customized-standard-texts";

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

    }
</script>
