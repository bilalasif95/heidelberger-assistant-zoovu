<template>
  <div class="top-product" :class="componentStyle.container">
    <div class="image-price">
      <div class="product-image" :style="{ backgroundColor: recommendation.picture }">
        <component :is="productClickoutLinkView" :product="recommendation" target="_blank"> </component>
      </div>
      <div class="product-price">
        {{ recommendation.price.displayValue }}
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
    </div>
    <div class="product-details">
      <component :is="productClickoutLinkView" class="product-name" :product="recommendation" target="_blank">
        {{ recommendation.name }}
      </component>
      <template v-if="shouldRenderProperties">
        <p class="properties-title">{{ $t("message-compare-selected-attributes") }}</p>
        <ul class="product-properties">
          <template v-for="(property, index) in recommendation.properties">
            <li :key="index" :class="resolveClass(property.marking)"><i></i>{{ property.displayValue }}</li>
          </template>
        </ul>
      </template>
      <div class="compare-wrapper">
        <component :is="productComparisonSelectorView" :recommendation="recommendation"></component>
      </div>
      <div class="product-footer">
        <component :is="productClickoutLinkView" class="add-to-basket-button" :product="recommendation">
          {{ $t("message-result-go-to-product") }}
        </component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  InjectComponent,
  VueComponent,
  Marking,
  ProductProperty,
  ComponentStyle,
  ComponentStyleDefinition,
} from "@zoovu/runner-browser-api";
import { TopProductView } from "@zoovu/runner-web-design-base";

@Component({})
export default class TopProductViewExtended extends TopProductView {
  @Prop()
  private recommendation;

  @ComponentStyle()
  componentStyle: ComponentStyleDefinition;

  @InjectComponent("ProductComparisonSelectorView")
  productComparisonSelectorView: VueComponent;

  @InjectComponent("ProductClickoutLinkView")
  productClickoutLinkView: VueComponent;

  private attributesCollapsed = false;

  public onShowMoreClicked() {
    this.attributesCollapsed = !this.attributesCollapsed;
  }

  public get shouldRenderProperties(): boolean {
    return this.recommendation.properties.length > 0;
  }

  public shouldRenderProperty(property: ProductProperty) {
    return this.attributesCollapsed || property.marking !== Marking.NEUTRAL;
  }
}
</script>
