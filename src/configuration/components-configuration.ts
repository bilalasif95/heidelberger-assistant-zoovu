import {
    AnswersConfiguration,
    ColorsConfiguration,
    ComponentsConfiguration as BaseComponentsConfiguration,
    FontsConfiguration,
    QuestionConfiguration,
    RecommendationConfiguration,
    AnimationsAndTransitionsConfiguration
} from "@zoovu/runner-web-design-base";
import {CustomizedStandardTextsConfiguration} from "./customized-standard-texts";

/**
 * @additionalProperties false
 */
export class ComponentsConfiguration extends BaseComponentsConfiguration {
    public questionConfiguration?: QuestionConfiguration = new QuestionConfiguration();
    public colors?: ColorsConfiguration = new ColorsConfiguration();
    public answersConfiguration?: AnswersConfiguration = new AnswersConfiguration();
    public fonts?: FontsConfiguration = new FontsConfiguration();
    public standardTexts?: CustomizedStandardTextsConfiguration = new CustomizedStandardTextsConfiguration();
    public recommendationSettings: RecommendationConfiguration = new RecommendationConfiguration();
    public animationsAndTransitionsConfiguration: AnimationsAndTransitionsConfiguration = new AnimationsAndTransitionsConfiguration();
}
