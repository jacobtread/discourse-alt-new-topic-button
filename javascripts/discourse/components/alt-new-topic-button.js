/* global settings */

import Component from "@glimmer/component";
import { cached } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class AltNewTopicButton extends Component {
  // Cached parsing of the alternative link data
  @cached
  get alternativeLinks() {
    return JSON.parse(settings.alternative_links);
  }

  // Obtain the button data for the current page
  @cached
  get buttonData() {
    const category = this.args.outletArgs.category;

    if (category === undefined) {
      return undefined;
    }

    return this.alternativeLinks.find(
      (link) => link.category === category.slug
    );
  }

  // Handle whether the button should be shown
  get showButton() {
    return this.buttonData !== undefined;
  }

  // Retrieve the icon for the button
  get icon() {
    return this.buttonData.icon.length > 0 ? this.buttonData.icon : "plus";
  }

  /// Retrieve the text for the button
  get label() {
    return this.buttonData.text.length > 0
      ? this.buttonData.text
      : "Alt New Topic";
  }

  /// Visit the URL specified by the topic
  @action
  goToNewTopic() {
    window.location.href = this.buttonData.url;
  }
}
