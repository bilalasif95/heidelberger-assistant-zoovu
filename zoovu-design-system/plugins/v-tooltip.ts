import {VTooltip, VPopover, VClosePopover} from "v-tooltip";
// overriding default configuration
VTooltip.options.defaultOffset = "5px";
export default {
    components: {
        "v-popover": VPopover
    },
    directives: {
        "tooltip": VTooltip,
        "close-popover": VClosePopover
    }
};
