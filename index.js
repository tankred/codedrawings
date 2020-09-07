const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')

// Write "Awesome!"
ctx.font = '30px Impact'
ctx.rotate(0.1)
ctx.fillText('Awesome!', 50, 100)

// Draw line under text
var text = ctx.measureText('Awesome!')
ctx.strokeStyle = 'rgba(0,0,0,0.5)'
ctx.beginPath()
ctx.lineTo(50, 102)
ctx.lineTo(50 + text.width, 102)
ctx.stroke()

// // Draw cat with lime helmet
// loadImage('examples/images/lime-cat.jpg').then((image) => {
//   ctx.drawImage(image, 50, 0, 70, 70)
// 
//   console.log('<img src="' + canvas.toDataURL() + '" />')
// })
// 
// 
// module.exports = function (context) {
//     // get the Node or Browser canvas
//     var canvas = context.canvas;
//     var width = canvas.width / 2;
//     var height = canvas.height / 2;
// 
//     // draw a red circle
//     var radius = 100;
//     context.fillStyle = 'red';
//     context.beginPath();
//     context.arc(width, height, radius, 0, Math.PI * 2, false);
//     context.fill();
// } 
// 
