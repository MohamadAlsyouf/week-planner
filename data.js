/* exported data */
var data = {
  views: 'ice-cream',
  chores: [],
  editing: null,
  nextChoreId: 1
};

var previousdataJSON = localStorage.getItem('store-chores');

if (previousdataJSON !== null) {

  data = JSON.parse(previousdataJSON);
}

function before(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('store-chores', dataJSON);
}

window.addEventListener('beforeunload', before);
