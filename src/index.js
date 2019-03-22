import _ from 'lodash';
import foo from './foo.js'
import bar from './bar.js'

const webpackAndBabel = () => {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML += `<br>${foo()}`;
  element.innerHTML += `<br>${bar()}`;
  return element;
}

document.body.appendChild(webpackAndBabel());