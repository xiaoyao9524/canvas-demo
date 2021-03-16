import '@babel/polyfill';
import './scss/reset.scss';
import './scss/index.scss';
import digit from './digit';
import { render } from 'art-template';

const WINDOW_WIDTH = 1024;
const WINDOW_HEIGHT = 768;

const canvas = document.querySelector('#canvas');

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;

const ctx = canvas.getContext('2d');

render(ctx);

function render(ctx) {
  let hours = 12;
  let minutes = 34;
  let seconds = 56;

  renderDigit(0, 0, parseInt(hours / 10), ctx);
}

function renderDigit(x, y, num, ctx) {
  ctx.fillStyle = 'rgb(0, 102, 153)';

  for (let i = 0; i < digit[num]; i++) {
    const item = digit[num];
    for (let j = 0; j < item[i].length;j++) {
      if  (digit[num][i][j] === 1) {
        // 绘制圆球
        ctx.beginPath();
        ctx.arc();
        ctx.closePath();
        ctx.fill();
      }
    }
  }
}
