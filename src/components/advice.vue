<script lang="ts">
    import {
        Component,
        Prop,
        Recommendation,
        RecommendationSettingsBuilder,
        SectionType,
        ComponentConfig,
    } from "@zoovu/runner-browser-api";
    import { AdviceView, RecommendationConfiguration } from "@zoovu/runner-web-design-base";
    import { CustomStore } from '../store/store'

    @Component({})
    export default class AdviceViewExtended extends AdviceView {

        @Prop()
        private advice: Recommendation;

        @ComponentConfig(RecommendationConfiguration)
        configuration: RecommendationConfiguration;

        public mounted() {
            this.setVisualSettings();
            this.requestAdviceUpdate(false);
            this.setRecommendationsWrapperAnchor();
        }

        private setVisualSettings() {
            this.advice.setRecommendationSettings(
                new RecommendationSettingsBuilder()
                    .withNumberOfProductsForSection(SectionType.QUESTIONNAIRE, this.configuration.numberOfProductsPerQuestionnairePage)
                    .withNumberOfProductsForSection(SectionType.RESULTS_PAGE, this.configuration.numberOfProductsPerResultsPage)
                    .build()
            );
        }

        private requestAdviceUpdate(shouldRunEvenIfPageIsAlreadyLoaded: boolean) {
            if (shouldRunEvenIfPageIsAlreadyLoaded) {
                this.advice.requestUpdate();
            } else if (!this.advice.currentPage) {
                this.advice.requestUpdate();
            }
        }

        private setRecommendationsWrapperAnchor() {
          CustomStore.addRef('recommendationsWrapperAnchor', this.$el);
        }
    }
</script>

<style lang="scss">
    @font-face {
        font-family: sans-serif;
        font-display: swap;
    }
</style>
