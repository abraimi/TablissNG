import { defineMessages } from "react-intl";
import { Config } from "../../types";
import Wallhaven from "./Wallhaven";
import WallhavenSettings from "./WallhavenSettings";

const messages = defineMessages({
  name: {
    id: "backgrounds.Wallhaven.name",
    defaultMessage: "wallhaven.cc",
    description: "Wallhaven images",
  },
  description: {
    id: "backgrounds.Wallhaven.description",
    defaultMessage: "Random images from wallhaven",
    description: "Wallhaven images",
  },
});

const config: Config = {
  key: "background/Wallhaven",
  name: messages.name,
  description: messages.description,
  dashboardComponent: Wallhaven,
  settingsComponent: WallhavenSettings,
  supportsBackdrop: true,
};

export default config;
