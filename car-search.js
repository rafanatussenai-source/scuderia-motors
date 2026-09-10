// Busca de veículos - filtra os cards da grade em tempo real
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('carSearchInput');
  const carsGrid = document.getElementById('carsGrid');
  const noCarsMessage = document.getElementById('noCarsMessage');

  if (!searchInput || !carsGrid) return;

  const carCards = Array.from(carsGrid.querySelectorAll('.car-card'));

  searchInput.addEventListener('input', function () {
    const term = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    carCards.forEach(function (card) {
      const title = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
      const details = card.querySelector('.car-details') ? card.querySelector('.car-details').textContent.toLowerCase() : '';
      const price = card.querySelector('.car-price') ? card.querySelector('.car-price').textContent.toLowerCase() : '';

      const matches = term === '' ||
        title.includes(term) ||
        details.includes(term) ||
        price.includes(term);

      card.style.display = matches ? '' : 'none';
      if (matches) visibleCount++;
    });

    if (noCarsMessage) {
      noCarsMessage.hidden = visibleCount > 0;
    }
  });
});
