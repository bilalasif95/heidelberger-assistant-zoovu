import {ProductRecommendation} from "@zoovu/runner-browser-api";
import {
    DynamicFlowsTestSuite,
    LinearAdvisorTestSuite,
    PluginsTestSuite,
    ServerSideTrackingTestSuite,
    WYSIWYGTestSuite
} from "@zoovu/runner-web-design-base/test-cases";
import {defaultJqueryAdviceSelectors, defaultJqueryQuestionSelectors, JqueryUiDriver} from "@zoovu/runner-web-design-base/test-utils";
import {ComponentsConfiguration} from "../../src/configuration/components-configuration";
import {resolveWebDesignClass} from "./web-design-class-resolver";

const WebDesign = resolveWebDesignClass();

const uiDriverFactory = (advisorUI, containerDivId) => new JqueryUiDriver(advisorUI, containerDivId, {
    advice: {
        ...defaultJqueryAdviceSelectors,
        startCompare: (recommendationProduct: ProductRecommendation) => `#${recommendationProduct.mid} .product-compare-wrapper label`
    },
    question: {
        ...defaultJqueryQuestionSelectors,
        questionText: (question) => `#question-${question.questionProperties.aid} p`
    }
});

const webDesignName = "legato";

LinearAdvisorTestSuite(WebDesign, webDesignName, uiDriverFactory);
DynamicFlowsTestSuite(WebDesign, uiDriverFactory);
WYSIWYGTestSuite(WebDesign, uiDriverFactory, ComponentsConfiguration, {
    expectedFontFamilyWithNoConfiguration: "OpenSans, sans-serif",
    componentsConfigurationOnStart: {
        colors: {
            primaryColor: "red",
            secondaryColor: "blue"
        }
    },
    updatedComponentsConfiguration: {
        answersConfiguration: {
            showImages: false
        },
        colors: {
            primaryColor: "black",
            secondaryColor: "red"
        }
    },
    expectedFontColorOnStart: "rgb(0, 0, 102)",
    expectedFontColorAfterChange: "rgb(102, 0, 0)",
    builtInFontChosenConfiguration: {fonts: {fontType: {selected: "Arvo"}}},
    expectedBuiltInFontFamily: "Arvo, serif",
    customFontConfiguration: {
        fonts: {
            fontType: {
                userLibraryFontName: "Lora",
                userLibraryFontUrl: "https://assets-eu-runner.zoovu.com/core-js/themes/assets/fonts/serif/Lora-Regular.ttf"
            }
        }
    },
    expectedCustomFontFamily: "Lora, serif"
});
ServerSideTrackingTestSuite(WebDesign, uiDriverFactory);
PluginsTestSuite(WebDesign, webDesignName, uiDriverFactory);
