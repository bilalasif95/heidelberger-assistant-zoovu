<template>
  <div :id="question.mid + '-wrapper'" :class="componentStyle.container" tabindex="-1">
    <!--:style="answerWrapperStyle"-->
    <component :is="questionHeadView" :question="question"></component>
    <div class="search">
      <label class="search__label">{{ $t("searchbox-label") }}</label>
      <input
        v-model="search"
        type="text"
        class="search__input"
        :placeholder="$t('searchbox-placeholder')"
        @keydown="exactMatch = false"
        @keydown.enter="search ? (exactMatch = true) : false"
      />
      <div class="search__button" @click="search ? (exactMatch = true) : false">
        <span class="search__icon">
          <svg
            width="22px"
            height="23px"
            viewBox="0 0 22 23"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="heidelberg_search-changes"
                transform="translate(-1024.000000, -226.000000)"
                fill="#979797"
                fill-rule="nonzero"
              >
                <g id="Group-3" transform="translate(763.000000, 194.500000)">
                  <g id="Group-2" transform="translate(0.000000, 20.000000)">
                    <path
                      id=""
                      d="M269.513,25.786 C270.499005,25.786 271.407663,25.5395025 272.239,25.0465 C273.070337,24.5534975 273.727664,23.8913375 274.211,23.06 C274.694336,22.2286625 274.936,21.3200049 274.936,20.334 C274.936,19.3479951 274.694336,18.4393375 274.211,17.608 C273.727664,16.7766625 273.070337,16.1193357 272.239,15.636 C271.407663,15.1526642 270.499005,14.911 269.513,14.911 C268.526995,14.911 267.618337,15.1526642 266.787,15.636 C265.955663,16.1193357 265.293502,16.7766625 264.8005,17.608 C264.307498,18.4393375 264.061,19.3479951 264.061,20.334 C264.061,21.3200049 264.307498,22.2286625 264.8005,23.06 C265.293502,23.8913375 265.955663,24.5534975 266.787,25.0465 C267.618337,25.5395025 268.526995,25.786 269.513,25.786 Z M276.763,25.786 L282.766,31.789 L280.939,33.616 L274.936,27.584 L274.936,26.627 L274.588,26.308 C273.91133,26.9073363 273.133171,27.3664984 272.2535,27.6855 C271.373829,28.0045016 270.460338,28.164 269.513,28.164 C268.082326,28.164 266.762839,27.8160035 265.5545,27.12 C264.346161,26.4239965 263.394003,25.4863392 262.698,24.307 C261.982663,23.0889939 261.625,21.7646738 261.625,20.334 C261.625,18.9033262 261.97783,17.5838394 262.6835,16.3755 C263.38917,15.1671606 264.346161,14.2150035 265.5545,13.519 C266.762839,12.8229965 268.082326,12.475 269.513,12.475 C270.943674,12.475 272.267994,12.8326631 273.486,13.548 C274.665339,14.2440035 275.598163,15.1913273 276.2845,16.39 C276.970837,17.5886727 277.314,18.9033262 277.314,20.334 C277.314,21.3006715 277.154502,22.2238289 276.8355,23.1035 C276.516498,23.9831711 276.057336,24.7613299 275.458,25.438 L275.777,25.786 L276.763,25.786 Z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </span>
        {{ $t("searchbox-button") }}
      </div>
    </div>

    <div class="cards-wrapper">
      <div
        v-for="(answer, index) in filteredList"
        :key="index"
        class="card"
        :class="{ card__selected: answer.selected == 'true' }"
        :style="{ backgroundColor: answer.hexCode }"
        @click="onSelect(answer)"
        @mouseenter="answer.hasInfoText = 'true'"
        @mouseleave="answer.hasInfoText = 'false'"
      >
        <div class="card__mobile-text">{{ answer.name }}</div>
        <transition name="fade">
          <span v-if="answer.hasInfoText === 'true'" class="card__hover" @click="onSelect(colorAnswer)">
            <div class="card__hover-color" :style="{ backgroundColor: answer.hexCode }"></div>
            <div class="card__hover-text">{{ answer.name }}</div>
          </span>
        </transition>
      </div>
      <div v-if="Object.entries(filteredList).length === 0 && !loading" class="">
        {{ $t("searchbox-no-results") }}
      </div>
      <div v-if="loading" class="">{{ $t("searchbox-loading") }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Advisor,
  Component,
  ComponentStyle,
  ComponentStyleDefinition,
  InjectComponent,
  Prop,
  RangeQuestion,
  Vue,
  VueComponent,
} from "@zoovu/runner-browser-api";

import axios from "axios";

interface ColorAnswer {
  hexCode: string;
  colorType: string;
  text: string;
  hexMapping: string;
  name: string;
  hasInfoText: string;
  selected: string;
}

@Component({})
export default class ColorPickerQuestionView extends Vue {
  @ComponentStyle()
  componentStyle: ComponentStyleDefinition;

  @InjectComponent("QuestionHeadView")
  questionHeadView: VueComponent;

  @Prop()
  private question: RangeQuestion;

  @Prop()
  private advisor: Advisor;

  private search = "";

  public exactMatch = false;

  private answers: Array<ColorAnswer> = [];

  private loading = false;

  created() {
    this.getAnswers();
  }

  get filteredList(): Array<ColorAnswer> {
    if (this.exactMatch) {
      return this.answers.filter((answer) => answer.text.toLowerCase() === this.search.toLowerCase());
    }
    return this.answers.filter((answer) => answer.text.toLowerCase().includes(this.search.toLowerCase()));
  }

  onSelect(colorAnswer) {
    /* eslint-disable no-param-reassign */
    this.answers.forEach((possibleAnswer) => {
      possibleAnswer.selected = false;
    });
    const answer = colorAnswer;
    answer.selected = true;
    this.advisor.setCustomSessionState({
      colorTypePreselected: answer.colorType.trim(),
    });
    const currentHex = this.question.lowerBoundaryValue;

    if (currentHex < answer.hexMapping) {
      this.question.setUpperBoundaryValue(Number(answer.hexMapping));
      this.question.setLowerBoundaryValue(Number(answer.hexMapping));
    } else {
      this.question.setLowerBoundaryValue(Number(answer.hexMapping));
      this.question.setUpperBoundaryValue(Number(answer.hexMapping));
    }
  }

  async getAnswers() {
    this.loading = true;
    const { locale } = this.$root.componentViewModel.localizationSettings;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const vm = this;

    axios
      .get(
        `https://zoovu-s3-upload-heidelberger.s3.eu-west-1.amazonaws.com/tmp/heidelberger/dataflow_heidelberger_${locale}.json`
      )
      .then(function (response) {
        vm.answers = response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        vm.loading = false;
      });
  }
}
</script>
<style lang="scss">
.search {
  padding-top: 25px;
  position: relative;
  &__label {
    position: absolute;
    top: 0;
    left: 0;
    color: #004178;
    font-size: 12px;
    line-height: 18px;
  }
  &__input {
    padding-left: 8px;
    width: 212px;
    display: inline-block;
    border: 1px solid #979797;
    height: 45px;
    line-height: 43px;
    z-index: 10;
    position: relative;
    background: white;
    @media screen and (min-width: 1200px) {
      padding-left: 16px;
      width: 240px;
    }
  }
  &__button {
    position: absolute;
    cursor: pointer;
    display: inline-block;
    z-index: 9;
    margin-left: -16px;
    padding: 0 10px 0 22px;
    border: 1px solid #979797;
    height: 45px;
    line-height: 43px;
    color: #979797;
    font-size: 14px;
    font-weight: bold;
    @media screen and (min-width: 1200px) {
      padding-right: 16px;
    }
  }
  &__icon {
    display: none;
    @media screen and (min-width: 1200px) {
      display: inline-block;
    }
    svg {
      margin-bottom: -7px;
    }
  }
}
.cards-wrapper {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  margin-left: -5px;
  margin-top: 20px;
  @media screen and (min-width: 1200px) {
    padding: 10px 13px;
    margin-left: 0;
    margin-top: 30px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.37);
  }
  .card {
    cursor: pointer;
    position: relative;
    margin: 5px;
    width: 76px;
    padding-top: 74px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    transition: transform 0.2s ease-in;
    @media screen and (min-width: 1200px) {
      width: 50px;
      height: 50px;
      margin: 1px;
      padding-top: 0;
      box-shadow: none;
    }
    &__selected {
      transform: scale(1.2);
      z-index: 990;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
      @media screen and (min-width: 1200px) {
        transform: scale(1.25);
      }
    }
    &__mobile-text {
      color: #004178;
      background: white;
      width: 100%;
      font-size: 12px;
      line-height: 20px;
      padding: 0 5px;
      white-space: nowrap;
      overflow: hidden;
      @media screen and (min-width: 1200px) {
        display: none;
      }
    }
    &__hover {
      position: absolute;
      z-index: 999;
      bottom: -100px;
      right: -100%;
      background: white;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    }
    &__hover-color {
      height: 76px;
      min-width: 76px;
      width: 100%;
    }
    &__hover-text {
      color: #004178;
      font-size: 12px;
      line-height: 18px;
      padding: 0 5px;
    }
  }
}
</style>
