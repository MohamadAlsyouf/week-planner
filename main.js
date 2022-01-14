var $addEntryBtn = document.querySelector('.add-entry-btn');
var $views = document.querySelectorAll('.view-container');
function openForm() {
  swapViews('add-form');
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

$addEntryBtn.addEventListener('click', openForm);
