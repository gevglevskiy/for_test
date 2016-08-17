(function() {

//var buttons = document.getElementsByTagName('button');

var testFunc = function (e) {
  alert('Создали документ');
};

var changeColor = function (e) {

  eventsObj.preventDefault(e);


  var elem = eventsObj.getTarget(e),
  colorData = elem.getAttribute('data-color');

  if (colorData) {
    if (e.type === 'click') {
      document.body.className = '';
    } else if (e.type === 'mouseover') {
      document.body.className = colorData;
    }
  }
};

eventsObj.addEvent(document,'click', changeColor);
eventsObj.addEvent(document,'mouseover', changeColor);

// for (var i = 0, len = buttons.length; i < len; i++) {
//
//  //buttons[i].addEventListener('click', changeColor, false);  // модель событий в ie
//
//   eventsObj.addEvent(buttons[i],'click', changeColor);  // кроссбраузерная модель
//   //eventsObj.removeEvent(buttons[i],'click', changeColor);  // кроссбраузерная модель
//
// }

})();
