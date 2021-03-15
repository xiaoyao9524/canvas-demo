import '@babel/polyfill';
import "./scss/reset.scss";
import "./scss/index.scss";

const canvas = document.querySelector('#canvas');

canvas.width = 1024;
canvas.height = 768;

const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(700, 700);
ctx.lineTo(100, 700);
ctx.lineTo(100, 100);
ctx.closePath();

ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(700, 600);
ctx.closePath();

ctx.strokeStyle = 'black';
ctx.stroke();

/* 画线 */
/*
ctx.lineWidth = 5;
ctx.strokeStyle = '#005588';
ctx.stroke();
*/

/** 填充颜色 */
/*
ctx.fillStyle = 'rgb(2, 100, 30)';
ctx.fill();
//  为三角形绘制边框
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.stroke();
*/
