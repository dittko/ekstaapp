document.addEventListener('DOMContentLoaded', function() {
  // Funkcja do przewijania strony do sekcji Ekstraklasa po kliknięciu przycisku "Dowiedz się więcej"
  document.querySelector('.btn-more').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#ekstraklasa-info').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
