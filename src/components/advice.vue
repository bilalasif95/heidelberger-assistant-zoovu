<script lang="ts">
import { Component, Prop, Recommendation, ComponentConfig } from "@zoovu/runner-browser-api";
import { AdviceView, RecommendationConfiguration } from "@zoovu/runner-web-design-base";
import { CustomStore } from "../store/store";

@Component({})
export default class AdviceViewExtended extends AdviceView {
  @Prop()
  private advice: Recommendation;

  @ComponentConfig(RecommendationConfiguration)
  configuration: RecommendationConfiguration;

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
  private setVisualSettings() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function,class-methods-use-this
  private requestAdviceUpdate(shouldRunEvenIfPageIsAlreadyLoaded: boolean) {}

  private setRecommendationsWrapperAnchor() {
    CustomStore.addRef("recommendationsWrapperAnchor", this.$el);
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: sans-serif;
  font-display: swap;
}
</style>
