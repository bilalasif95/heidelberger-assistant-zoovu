import {
  Advisor,
  AdvisorUI,
  AdvisorWebDesignPlugin,
  QuestionType
} from "@zoovu/runner-browser-api";

export class DoubleSliderAutoForwardPlugin implements AdvisorWebDesignPlugin {
  private advisor: Advisor;

  private advisorUi: AdvisorUI;

  public async beforeMount(advisor: Advisor): Promise<void> {
    this.advisor = advisor;
  }

  public async afterMount(advisorUi: AdvisorUI): Promise<void> {
    this.advisorUi = advisorUi;

    this.advisor.onGlobalEvent(
        "RangeQuestionModel.setLowerBoundaryValue:afterActionSession",
        (event) => {
          this.advisor.advisorNavigation.next();
        }
    );
  }
}
