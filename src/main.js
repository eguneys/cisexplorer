import ChessMd from 'chessmd';
import content from './content';

export function app(element, options) {

  ChessMd(element, {
    content
  });

}
