const EMAILJS_PUBLIC_KEY = 'u9JTo2FV-pJCOdAN6';
const EMAILJS_SERVICE_ID = 'service_w08t4da';
const EMAILJS_TEMPLATE_ID = 'template_8242d7g';
 
document.addEventListener('DOMContentLoaded', function () {
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
 
  const form = document.getElementById('contactForm');
  const messageBox = document.getElementById('formMessage');
 
  if (!form || !messageBox) return;
 
  form.addEventListener('submit', function (event) {
    event.preventDefault();
 
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
 
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
      .then(function () {
        messageBox.textContent = 'Mensagem enviada com sucesso! Você receberá um e-mail de confirmação em instantes.';
        messageBox.classList.remove('error');
        messageBox.classList.add('show', 'success');
        form.reset();
      })
      .catch(function (error) {
        messageBox.textContent = 'Não foi possível enviar sua mensagem agora. Tente novamente ou fale conosco por telefone.';
        messageBox.classList.remove('success');
        messageBox.classList.add('show', 'error');
        console.error('Erro ao enviar via EmailJS:', error);
      })
      .finally(function () {
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar Mensagem';
      });
  });
});
 