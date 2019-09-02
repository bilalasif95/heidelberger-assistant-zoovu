<template>
    <div :id="advice.navigation.mid" :class="componentStyle.container" class="recommendation-navigation">
        <button class="navigation-back-button" v-if="advice.navigation.hasPrevious" @click="onClickBack">{{$t('message-result-back')}}</button>

        <button class="gap-button back-gap"
                v-if="startIndex > 0"
                @click="goToPage(currentPageIndex - visiblePages)"
        >...
        </button>

        <button v-for="(n, index) in visiblePages"
                class="page-button"
                :class="{'selected': startIndex + index === currentPageIndex}"
                @click="goToPage(startIndex + index)">
            {{startIndex + n}}
        </button>

        <button class="gap-button next-gap"
                v-if="startIndex + visiblePages <= advice.navigation.maxPages - 1"
                @click="goToPage(currentPageIndex + visiblePages)"
        >...
        </button>

        <button class="navigation-next-button" v-if="advice.navigation.hasNext" @click="onClickNext">{{$t('message-result-next')}}</button>
    </div>
</template>

<script lang="ts">
    import {Component, ComponentStyle, ComponentStyleDefinition, Prop, Recommendation, ComponentConfig, Vue} from "@zoovu/runner-browser-api";
    import {AdviceNavigationView, RecommendationConfiguration} from "@zoovu/runner-web-design-base";
    import { CustomStore } from '../store/store'

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
        if (pageNumber < 0) {
          pageNumber = 0;
        }

        if (pageNumber >= this.advice.navigation.maxPages) {
          pageNumber = this.advice.navigation.maxPages - 1;
        }

        this.advice.navigation.goToPage(pageNumber);
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

        if (this.currentPageIndex - Math.floor(this.visiblePages / 2) + this.visiblePages > this.advice.navigation.maxPages) {
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
        const header = this.$root.$el["offsetTop"];
        scrollTo(header, 300)
      }

      scrollToAnchor() {
        const recommendationsWrapperAnchor: Vue | Element | Vue[] | Element[] = CustomStore.$refs.recommendationsWrapperAnchor || this.$root.$el;
        (recommendationsWrapperAnchor as Element).scrollIntoView({behavior: 'smooth'});
      }

      @ComponentStyle()
      componentStyle: ComponentStyleDefinition;
    }
</script>
