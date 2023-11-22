import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LazyImageComponent extends Component {
  @tracked placeholderImage = 'img/placeholder.png';

  @action
  lazyLoad(element) {
    if (element) {
      element.onload = () => {
        console.log('element', element);
        this.placeholderImage = this.args.dataSrc;
      };
    }
  }
}
