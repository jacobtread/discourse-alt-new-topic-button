import { withPluginApi } from "discourse/lib/plugin-api";
import AltNewTopicButton from "../components/alt-new-topic-button";

export default {
  name: "alt-new-topic-attach",
  initialize() {
    withPluginApi("0.8", (api) => {
      api.renderInOutlet("after-create-topic-button", AltNewTopicButton);
    });
  },
};
