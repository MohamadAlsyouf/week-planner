/* global data */
/* exported data */
var $addEntryBtn = document.querySelector('.add-entry-btn');
var $views = document.querySelectorAll('.view-container');
var $exitForm = document.querySelector('.exit-the-form');
var $getChoreInfo = document.querySelector('#get-chore');

function dataEntry() {

}

function grabFormInfo(event) {
  event.preventDefault();
  var getId = data.nextChoreId;
  data.nextChoreId++;

  var getDay = $getChoreInfo.elements.day.value;
  var getTime = $getChoreInfo.elements.time.value;
  var getMessage = $getChoreInfo.elements.message.value;
  var theChore = {
    day: getDay,
    time: getTime,
    message: getMessage,
    id: getId
  };
  data.chores.unshift(theChore);
  $getChoreInfo.reset();
  swapViews('home-page');
}
function openForm() {
  swapViews('add-form');
}

function closeForm() {
  swapViews('home-page');
}

function swapViews(view) {
  for (var i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === view) {
      $views[i].classList.remove('hidden');
    } else {
      $views[i].classList.add('hidden');
    }
  }
}

$exitForm.addEventListener('click', closeForm);
$addEntryBtn.addEventListener('click', openForm);
$getChoreInfo.addEventListener('submit', grabFormInfo);
