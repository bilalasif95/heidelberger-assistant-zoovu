import BaseDesignDefault, * as BaseDesignModule from "@zoovu/theme1";
import {AdvisorWebDesignClass} from "@zoovu/runner-browser-api";

export function resolveWebDesignClass(): AdvisorWebDesignClass {
    return typeof BaseDesignDefault === "undefined"
        // for Browserify build
        ? BaseDesignModule as unknown as AdvisorWebDesignClass
        // for Webpack build
        : BaseDesignDefault;
}
