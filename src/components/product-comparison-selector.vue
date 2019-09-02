<template>
    <div :class="[{'is-selected' : recommendation.selected }, componentStyle.container]" class="product-compare-wrapper">
        <label @click="onSelectClicked()" v-if="!recommendation.selected">
            <span class="checkbox-input"></span>
            <span>{{$t('message-compare-selector-compare')}}</span>
        </label>
        <label @click="sendCompareEvent()" v-if="recommendation.selected">
            <span class="checkbox-input" @click.stop="onSelectClicked()"></span>
            <span>{{$t('message-compare-selector-start')}}</span>
        </label>
    </div>
</template>

<script lang="ts">
import {ProductComparisonSelectorView} from "@zoovu/runner-web-design-base";

export default class ProductComparisonSelectorViewExtended extends ProductComparisonSelectorView {

}
</script>
