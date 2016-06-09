
import { Plugin } from '../_base/_plugin';

export class CardMargins extends Plugin {

  static get snippets() {
    return [`
snippet cardmargins
\tcardmargins = \${1:left}, \${2:right}, \${3:top}, \${4:bottom}
    `];
  }

  static operate(args, state, scope) {
    super.operate(args, state, scope);

    const { top, left, right, bottom } = args;

    state.options.card['margin-top'] = super.combineForUnit(top, state);
    state.options.card['margin-left'] = super.combineForUnit(left, state);
    state.options.card['margin-right'] = super.combineForUnit(right, state);
    state.options.card['margin-bottom'] = super.combineForUnit(bottom, state);
  }

}