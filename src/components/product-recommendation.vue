<template>
  <div :id="recommendation.mid" :class="componentStyle.container" class="product">
    <div class="product-details">
      <component :is="productClickoutLinkView" class="product-name" :product="recommendation" target="_blank">
        {{ recommendation.name }}
      </component>
      <div class="product-image" :style="{ backgroundColor: recommendation.picture }">
        <component :is="productClickoutLinkView" :product="recommendation" target="_blank"> </component>
      </div>
      <div class="price-compare-wrapper">
        <div class="price">
          {{ recommendation.price.displayValue }}
        </div>
        <component :is="productComparisonSelectorView" :recommendation="recommendation"></component>
      </div>
      <div class="rating-wrapper">
        <div v-if="recommendation.properties.find((o) => o.name === 'STAR_RATING')" class="rating-image">
          <div
            class="rating-image-over"
            :style="
              'width: ' +
              (recommendation.properties.find((o) => o.name === 'STAR_RATING').rawValue.value / 5) * 100 +
              '%'
            "
          ></div>
        </div>
      </div>
      <template v-if="shouldRenderProperties">
        <p class="properties-title">{{ $t("message-compare-selected-attributes") }}</p>
        <ul class="product-properties">
          <template v-for="(property, index) in recommendation.properties">
            <li v-if="shouldRenderProperty(property)" :key="index" :class="resolveClass(property.marking)">
              <i></i>{{ property.displayValue }}
            </li>
          </template>
        </ul>
        <button
          class="product-attributes-toggle"
          :class="{ collapsed: attributesCollapsed }"
          @click="onShowMoreClicked"
        >
          {{ attributesCollapsed ? $t("message-compare-show-less") : $t("message-compare-show-more") }}
          <i></i>
        </button>
      </template>
      <div class="product-footer">
        <component :is="productClickoutLinkView" class="add-to-basket-button" :product="recommendation">
          {{ $t("message-result-go-to-product") }}
        </component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ProductRecommendationView } from "@zoovu/runner-web-design-base";

export default class ProductRecommendationViewExtended extends ProductRecommendationView {}
</script>
