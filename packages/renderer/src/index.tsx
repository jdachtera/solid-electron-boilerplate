import { render } from 'solid-js/web';
import { App } from './App';

const container = document.getElementById('root');

if (container) {
  render(() => <App />, container);
} else {
  alert('Why did you remove the container?');
}
