import globals from "./global-variables";

export const CheckboxStyle = {
    padding: "5px",
    display: "none",
    alignItems: "center",
    marginRight: "15px",
    textAlign: "center",
    content: "''",
    width: "16px",
    height: "16px",
    background: (configuration) => `${globals.customerSprite(configuration)} no-repeat 0px -172px`
};

export const CheckboxStyleSelected = {
    ...CheckboxStyle,
    background: (configuration) => `${globals.customerSprite(configuration)} no-repeat -20px -172px`
};