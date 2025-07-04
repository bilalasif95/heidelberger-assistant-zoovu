import { CreateWebDesignClass, ComponentRegistry, Advisor, ChoiceQuestion } from "@zoovu/runner-browser-api";
import { ComponentRegistryFactory, StyleRegistryFactory } from "@zoovu/runner-web-design-base";
import PaletteElement from "@zoovu/design-system/src/guideline/components/palette.vue";
import { AutoForwardPlugin } from "@zoovu/runner-web-design-base/src/plugins";
import AdvisorViewExtended from "./components/advisor.vue";
import ChoiceAnswerViewExtended from "./components/choice-answer.vue";
import ProductComparisonSelectorViewExtended from "./components/product-comparison-selector.vue";
import ProductRecommendationViewExtended from "./components/product-recommendation.vue";
import AdviceViewExtended from "./components/advice.vue";
import SortViewExtended from "./components/sort.vue";
import QuestionHeadViewExtended from "./components/question-head.vue";
import AdviceNavigationViewExtended from "./components/advice-navigation.vue";
import ColorPickerQuestionView from "./components/color-picker-question.vue";
import PageViewExtended from "./components/page.vue";
import QuestionnaireViewExtended from "./components/questionnaire.vue";
import ChoiceQuestionViewExtended from "./components/choice-question.vue";
import TopProductViewExtended from "./components/top-product.vue";
import ShownProductsViewExtended from "./components/shown-products.vue";
import StartOverButtonViewExtended from "@/components/start-over-button.vue";
import styles from "./styles";
import { DoubleSliderAutoForwardPlugin } from "./plugins/double-slider-autoforward";
/* eslint-disable no-underscore-dangle */
declare const __WEB_DESIGN__VERSION__: string;
/* eslint-disable no-underscore-dangle */
declare const __WEB_DESIGN__GIT_COMMIT_HASH__: string;
/* eslint-disable no-underscore-dangle */
declare const __WEB_DESIGN__GIT_BRANCH__: string;

const componentRegistry: ComponentRegistry = ComponentRegistryFactory.createComponentRegistry();
componentRegistry.addOrOverrideComponent("AdvisorView", AdvisorViewExtended);
componentRegistry.addOrOverrideComponent("AdvisorView", AdvisorViewExtended);
componentRegistry.addOrOverrideComponent("ChoiceAnswerView", ChoiceAnswerViewExtended);
componentRegistry.addOrOverrideComponent("QuestionHeadView", QuestionHeadViewExtended);
componentRegistry.addOrOverrideComponent("ProductComparisonSelectorView", ProductComparisonSelectorViewExtended);
componentRegistry.addOrOverrideComponent("ProductRecommendationView", ProductRecommendationViewExtended);
componentRegistry.addOrOverrideComponent("PaletteElement", PaletteElement);
componentRegistry.addOrOverrideComponent("AdviceNavigationView", AdviceNavigationViewExtended);
componentRegistry.addOrOverrideComponent("AdviceView", AdviceViewExtended);
componentRegistry.addOrOverrideComponent("SortView", SortViewExtended);
componentRegistry.addOrOverrideComponent("ColorPickerQuestionView", ColorPickerQuestionView);
componentRegistry.addOrOverrideComponent("PageView", PageViewExtended);
componentRegistry.addOrOverrideComponent("QuestionnaireView", QuestionnaireViewExtended);
componentRegistry.addOrOverrideComponent("ChoiceQuestionView", ChoiceQuestionViewExtended);
componentRegistry.addOrOverrideComponent("TopProductView", TopProductViewExtended);
componentRegistry.addOrOverrideComponent("ShownProductsView", ShownProductsViewExtended);
componentRegistry.addOrOverrideComponent("StartOverButtonView", StartOverButtonViewExtended);

const componentStyles = {
  AdvisorView: styles.AdvisorViewStyle,
  AdviceView: styles.AdviceViewStyle,
  AdviceViewExtended: styles.AdviceViewStyle,
  AdviceNavigationView: styles.AdviceNavigationStyle,
  AdviceNavigationViewExtended: styles.AdviceNavigationStyle,
  CheckboxAnswerView: styles.CheckboxAnswerStyle,
  ChoiceAnswerView: styles.ChoiceAnswerStyle,
  ChoiceQuestionView: styles.ChoiceQuestionStyle,
  DropDownQuestionView: styles.DropDownQuestionStyle,
  PageSelectorView: styles.PageSelectorStyle,
  PagesNavigationView: styles.PagesNavigationStyle,
  ProductRecommendationView: styles.ProductRecommendationViewStyle,
  QuestionnaireView: styles.QuestionnaireStyle,
  RadioButtonAnswerView: styles.RadioButtonAnswerStyle,
  RangeQuestionView: styles.RangeQuestionStyle,
  Slider: styles.SliderStyle,
  SliderQuestionView: styles.SliderQuestionStyle,
  StartOverButtonView: styles.StartOverButtonStyle,
  AlternativeProductsView: styles.AlternativeProductsStyle,
  ComparisonView: styles.ComparisonViewStyle,
  ComparisonTableView: styles.ComparisonTableStyle,
  ProductComparisonSelectorView: styles.ProductComparisonSelectorStyle,
  ShownProductsView: styles.ShownProductsStyle,
  ShownProductsViewExtended: styles.ShownProductsStyle,
  Modal: styles.ModalStyle,
  SortView: styles.SortViewStyle,
  SortViewExtended: styles.SortViewStyle,
  QuestionValidationMessageView: styles.QuestionValidationMessageStyle,
  PageView: styles.PageStyle,
  PageViewExtended: styles.PageStyle,
  AdvisorSectionView: { container: {} },
  TopProductView: styles.TopProductStyle,
  TopProductViewExtended: styles.TopProductStyle,
  TextQuestionView: styles.TextQuestionViewStyle,
  BrandingView: styles.BrandingStyle,
  QuestionHeadView: styles.QuestionHeadStyle,
  ColorPickerQuestionView: styles.ColorPickerQuestionStyle,
};

const rootContainerStyle = styles.RootContainerStyle;
const styleRegistry = StyleRegistryFactory.createStyleRegistry(componentStyles, rootContainerStyle);
const WebDesignClass = CreateWebDesignClass({
  webDesignName: "legato",
  AdvisorView: componentRegistry.getComponent("AdvisorView"),
  componentRegistry,
  styleRegistry,
  plugins: [AutoForwardPlugin, DoubleSliderAutoForwardPlugin],
  versionDescriptor: {
    version: __WEB_DESIGN__VERSION__,
    git: {
      branch: __WEB_DESIGN__GIT_BRANCH__,
      commitHash: __WEB_DESIGN__GIT_COMMIT_HASH__,
    },
  },
});
export default WebDesignClass;
