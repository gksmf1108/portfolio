document.addEventListener('DOMContentLoaded', function() {
  var topBtn = document.querySelector('.top_btn');
  if (topBtn) {
    topBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});