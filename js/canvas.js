(function() {

  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');

  //свойства
  ctx.fillStyle = 'red';  // цвет заливки
  ctx.strokeStyle = '#000'; // цвет обводки
  ctx.lineWigth = '5';

  // методы канваса
  //  ctx.strokeRect(0,0,100,100);

  //var image = new Image();
  //image.src = 'https://pixabay.com/static/uploads/photo/2016/08/12/20/54/paprika-1589670_960_720.jpg';
  //ctx.DrawImage(image,0,0);
   //
  //  ctx.clearRect(0,0,50,50);
   //
  //  ctx.font = '14px Arial';
  //  ctx.fillText('Привет это супе длиннющий текст который должен не поместиться в строку', 50, 50);

  ctx.beginPath();
  ctx.arc(100,100,50,0, Math.PI * 2 );

  //ctx.arc(150,150,30,0,);
  ctx.closePath();

  ctx.stroke();
  ctx.fill();



})();
