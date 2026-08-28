document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const messageBox = document.getElementById('formMessage');

  if (!form || !messageBox) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    setTimeout(function () {
      messageBox.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
      messageBox.classList.remove('error', 'info');
      messageBox.classList.add('show', 'success');
      form.reset();

      submitButton.disabled = false;
      submitButton.textContent = 'Enviar Mensagem';
    }, 900);
  });
});
