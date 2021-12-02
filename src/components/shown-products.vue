<template>
  <div :class="componentStyle.container" class="shown-products-table">
    <table>
      <thead>
        <tr>
          <td></td>
          <th v-for="product in shownProducts">
            <div :id="product.mid" class="product-header">
              <div v-if="shownProducts.length > 1" class="remove-button-container">
                <i class="remove-icon" @click="shownProductRemoved(product)"></i>
              </div>
              <div class="product-image">
                <component :is="productClickoutLinkView" :product="product" target="_blank">
                  <!-- <img :src="product.picture" :alt="product.name"> -->
                  <div class="product-custom-image" :style="{ backgroundColor: product.picture }"></div>
                </component>
              </div>
              <div class="product-name">
                <component :is="productClickoutLinkView" :product="product" target="_blank">
                  {{ product.name }}
                </component>
              </div>
              <div class="product-price">{{ product.price.displayValue }}</div>
            </div>
          </th>
        </tr>
      </thead>
      <template v-for="group in propertyGroups">
        <component :is="propertyGroupView" :group="group" :shown-products="shownProducts"></component>
      </template>
    </table>
  </div>
</template>

<script lang="ts">
import {
  ComparisonProduct,
  Component,
  ComponentStyle,
  ComponentStyleDefinition,
  InjectComponent,
  ProductPropertyGroup,
  Prop,
  Vue,
  VueComponent,
} from "@zoovu/runner-browser-api";
import { ShownProductsView } from "@zoovu/runner-web-design-base";

@Component({})
export default class ShownProductsViewExtended extends ShownProductsView {
  @Prop()
  private shownProducts: ComparisonProduct[];

  @ComponentStyle()
  componentStyle: ComponentStyleDefinition;

  @Prop()
  private propertyGroups: ReadonlyArray<ProductPropertyGroup>;

  @InjectComponent("PropertyGroupView")
  private propertyGroupView: VueComponent;

  @InjectComponent("ProductClickoutLinkView")
  private productClickoutLinkView: VueComponent;

  public shownProductRemoved(product) {
    this.shownProducts.splice(this.shownProducts.lastIndexOf(product), 1);
    this.$emit("shown-product-removed", product);
  }
}
</script>
<style lang="scss">
.product-image .product-custom-image {
  width: 100%;
  padding-bottom: 100%;
}
</style>
