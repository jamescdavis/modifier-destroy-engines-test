import Component from '@glimmer/component';

export default class BarComponent extends Component {
  onResize() {
    console.log('resized');
  }
}
