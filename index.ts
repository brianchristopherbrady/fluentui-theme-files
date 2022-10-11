import { webDarkTheme as fluentWebDarkTheme, webLightTheme as fluentWebLightTheme, createDarkTheme, createLightTheme } from "@fluentui/react-components";

const tridentBrandColorRamp = {
    "10":"#000000",
    "20":"#011800",
    "30":"#002700",
    "40":"#00360c",
    "50":"#004612",
    "60":"#005618",
    "70":"#00671f",
    "80":"#007826",
    "90":"#218935",
    "100":"#3e9949",
    "110":"#59a85e",
    "120":"#73b776",
    "130":"#8ec68f",
    "140":"#aad5a9",
    "150":"#c6e4c5",
    "160":"#e2f2e2"
};

const tridentDarkTheme = createDarkTheme(tridentBrandColorRamp);
const tridentLightTheme = createLightTheme(tridentBrandColorRamp);

export const webDarkTheme = tridentDarkTheme;
export const webLightTheme = tridentLightTheme;

module.exports = webDarkTheme;
module.exports = webLightTheme;
