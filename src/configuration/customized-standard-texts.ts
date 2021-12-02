import { ComponentConfigurationClass } from "@zoovu/runner-browser-api";
import {
  StandardTextsConfiguration,
  ValuesConfigurationConstructor,
  ConfigurationValues,
} from "@zoovu/runner-web-design-base";
import customizedValuesConfigurationProvider from "./values/values-configuration-provider";

/**
 * @additionalProperties false
 */
@ValuesConfigurationConstructor(ConfigurationValues.StandardTexts, customizedValuesConfigurationProvider)
@ComponentConfigurationClass("standardTexts")
export class CustomizedStandardTextsConfiguration extends StandardTextsConfiguration {}
