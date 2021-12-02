import globals from "./global-variables";

export const RadioStyle = {
  position: "relative",
  width: "15px",
  height: "16px",
  minWidth: "15px",
  minHeight: "16px",
  display: "none",
  alignItems: "center",
  textAlign: "center",
  background: (configuration) => `${globals.customerSprite(configuration)} no-repeat 0 -192px`,
};

export const RadioStyleSelected = {
  ...RadioStyle,
  background: (configuration) => `${globals.customerSprite(configuration)} no-repeat -20px -192px`,
};
