var $addEntryBtn = document.querySelector('.add-entry-btn');
var $views = document.querySelectorAll('.view-container');
var $exitForm = document.querySelector('.exit-the-form');

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
