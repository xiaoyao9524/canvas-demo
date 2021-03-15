import '@babel/polyfill';
import './scss/reset.scss';
import './scss/index.scss';

const canvas = document.querySelector('#canvas');

canvas.width = 800;
canvas.height = 800;

const ctx = canvas.getContext('2d');

const tangram = [
  {
    p: [
      { x: 0, y: 0 },
      { x: 800, y: 0 },
      { x: 400, y: 400 },
    ],
    color: '#caff67',
  },
  {
    p: [
      { x: 0, y: 0 },
      { x: 400, y: 400 },
      { x: 0, y: 800 },
    ],
    color: '#67becf',
  },
  {
    p: [
      { x: 800, y: 0 },
      { x: 800, y: 400 },
      { x: 600, y: 600 },
      { x: 600, y: 200 },
    ],
    color: '#ef3d61',
  },
  {
    p: [
      { x: 600, y: 200 },
      { x: 600, y: 600 },
      { x: 400, y: 400 },
    ],
    color: '#f9f51a',
  },
  {
    p: [
      { x: 400, y: 400 },
      { x: 600, y: 600 },
      { x: 400, y: 800 },
      { x: 200, y: 600 },
    ],
    color: '#a594c0',
  },
  {
    p: [
      { x: 200, y: 600 },
      { x: 400, y: 800 },
      { x: 0, y: 800 },
    ],
    color: '#fa8ecc',
  },
  {
    p: [
      { x: 800, y: 400 },
      { x: 800, y: 800 },
      { x: 400, y: 800 },
    ],
    color: '#f6ca29',
  },
];

for (let item of tangram) {
  const { p, color } = item;
  const [p1, ...otherP] = p;
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  for (let item of otherP) {
    ctx.lineTo(item.x, item.y);
  }

  ctx.closePath();

  ctx.fillStyle = color;
  ctx.fill();

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;
  ctx.stroke();
}
