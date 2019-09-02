import {CreateWebDesignClass, ComponentRegistry} from "@zoovu/runner-browser-api";
import {ComponentRegistryFactory, StyleRegistryFactory} from "@zoovu/runner-web-design-base";
import AdvisorViewExtended from "./components/advisor.vue";
import ChoiceAnswerViewExtended from "./components/choice-answer.vue";
import ProductComparisonSelectorViewExtended from "./components/product-comparison-selector.vue";
import ProductRecommendationViewExtended from "./components/product-recommendation.vue";
import AdviceViewExtended from "./components/advice.vue";
import SortViewExtended from "./components/sort.vue";
import PaletteElement from "../zoovu-design-system/guideline/components/palette.vue";
import QuestionHeadViewExtended from "./components/question-head.vue";
import AdviceNavigationViewExtended from "./components/advice-navigation.vue";
import styles from "./styles";
import { AutoForwardPlugin } from "@zoovu/runner-web-design-base/src/plugins";

declare const __WEB_DESIGN__VERSION__: string;
declare const __WEB_DESIGN__GIT_COMMIT_HASH__: string;
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
    Modal: styles.ModalStyle,
    SortView: styles.SortViewStyle,
    SortViewExtended: styles.SortViewStyle,
    QuestionValidationMessageView: styles.QuestionValidationMessageStyle,
    PageView: styles.PageStyle,
    AdvisorSectionView: {container: {}},
    TopProductView: styles.TopProductStyle,
    TextQuestionView: styles.TextQuestionViewStyle,
    BrandingView: styles.BrandingStyle,
    QuestionHeadView: styles.QuestionHeadStyle
};

const rootContainerStyle = styles.RootContainerStyle;
const styleRegistry =  StyleRegistryFactory.createStyleRegistry(componentStyles, rootContainerStyle);
const WebDesignClass = CreateWebDesignClass({
    webDesignName: "legato",
    AdvisorView: componentRegistry.getComponent("AdvisorView"),
    componentRegistry,
    styleRegistry,
    plugins: [new AutoForwardPlugin()],
    versionDescriptor: {
        version: __WEB_DESIGN__VERSION__,
        git: {
            branch: __WEB_DESIGN__GIT_BRANCH__,
            commitHash: __WEB_DESIGN__GIT_COMMIT_HASH__
        }
    }
});
export default WebDesignClass;
