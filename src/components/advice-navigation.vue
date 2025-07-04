<template>
  <div :id="advice.navigation.mid" :class="componentStyle.container" class="recommendation-navigation">
    <button v-if="advice.navigation.hasPrevious" class="navigation-back-button" @click="onClickBack">
      {{ $t("message-result-back") }}
    </button>

    <button v-if="startIndex > 0" class="gap-button back-gap" @click="goToPage(currentPageIndex - visiblePages)">
      ...
    </button>

    <button
      v-for="(n, index) in visiblePages"
      :key="index"
      class="page-button"
      :class="{ selected: startIndex + index === currentPageIndex }"
      @click="goToPage(startIndex + index)"
    >
      {{ startIndex + n }}
    </button>

    <button
      v-if="startIndex + visiblePages <= advice.navigation.maxPages - 1"
      class="gap-button next-gap"
      @click="goToPage(currentPageIndex + visiblePages)"
    >
      ...
    </button>

    <button v-if="advice.navigation.hasNext" class="navigation-next-button" @click="onClickNext">
      {{ $t("message-result-next") }}
    </button>
  </div>
</template>

<script lang="ts">
import {
  Component,
  ComponentStyle,
  ComponentStyleDefinition,
  Prop,
  Recommendation,
  ComponentConfig,
  Vue,
} from "@zoovu/runner-browser-api";
import { AdviceNavigationView, RecommendationConfiguration } from "@zoovu/runner-web-design-base";
import { CustomStore } from "../store/store";

@Component({})
export default class AdviceNavigationViewExtended extends AdviceNavigationView {
  @Prop()
  private advice: Recommendation;

  @ComponentConfig(RecommendationConfiguration)
  private configuration: RecommendationConfiguration;

  public onClickBack() {
    this.advice.navigation.previousPage();
    this.scrollToAnchor();
  }

  public onClickNext() {
    this.advice.navigation.nextPage();
    this.scrollToAnchor();
  }

  public goToPage(pageNumber: number) {
    let newPageNumber = pageNumber;
    if (pageNumber < 0) newPageNumber = 0;
    if (pageNumber >= this.advice.navigation.maxPages) {
      newPageNumber = this.advice.navigation.maxPages - 1;
    }

    this.advice.navigation.goToPage(newPageNumber);
    this.scrollToAnchor();
  }

  public get currentPageIndex(): number {
    return this.advice.currentPage.pageNumber;
  }

  public get startIndex(): number {
    if (this.currentPageIndex === 0 || this.currentPageIndex - Math.floor(this.visiblePages / 2) <= 0) {
      return 0;
    }

    if (this.currentPageIndex === this.advice.navigation.maxPages - 1) {
      return this.currentPageIndex - this.visiblePages + 1;
    }

    if (
      this.currentPageIndex - Math.floor(this.visiblePages / 2) + this.visiblePages >
      this.advice.navigation.maxPages
    ) {
      return this.advice.navigation.maxPages - this.visiblePages;
    }

    return this.currentPageIndex - Math.floor(this.visiblePages / 2);
  }

  public get visiblePages(): number {
    const visiblePages = this.configuration.numberOfNavigationPages;
    if (visiblePages > this.advice.navigation.maxPages) {
      return this.advice.navigation.maxPages;
    }
    return visiblePages;
  }

  scrollToTop() {
    const header = this.$root.$el.offsetTop;
    window.scrollTo(header, 300);
  }

  scrollToAnchor() {
    const recommendationsWrapperAnchor: Vue | Element | Vue[] | Element[] =
      CustomStore.$refs.recommendationsWrapperAnchor || this.$root.$el;
    (recommendationsWrapperAnchor as Element).scrollIntoView({ behavior: "smooth" });
  }

  @ComponentStyle()
  componentStyle: ComponentStyleDefinition;
}
</script>
