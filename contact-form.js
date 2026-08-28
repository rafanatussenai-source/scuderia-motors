const EMAILJS_PUBLIC_KEY = 'u9JTo2FV-pJCOdAN6';
const EMAILJS_SERVICE_ID = 'service_w08t4da';
const EMAILJS_TEMPLATE_ID = 'template_8242d7g'; // template que chega pra VOCÊ (loja)
const EMAILJS_CONFIRMATION_TEMPLATE_ID = 'COLOQUE_AQUI_O_ID_DO_TEMPLATE_DE_CONFIRMACAO'; // template que vai pro CLIENTE

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

    // Mostra na hora o aviso de que o email de confirmação está a caminho
    messageBox.textContent = 'Enviando sua mensagem... em breve você receberá um e-mail de confirmação.';
    messageBox.classList.remove('error', 'success');
    messageBox.classList.add('show', 'info');
 
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
      .then(function () {
        // Dispara o email de confirmação para o cliente (usa o campo user_email do form)
        return emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_CONFIRMATION_TEMPLATE_ID, form);
      })
      .then(function () {
        messageBox.textContent = 'Mensagem enviada com sucesso! Você receberá um e-mail de confirmação em instantes.';
        messageBox.classList.remove('error', 'info');
        messageBox.classList.add('show', 'success');
        form.reset();
      })
      .catch(function (error) {
        messageBox.textContent = 'Não foi possível enviar sua mensagem agora. Tente novamente ou fale conosco por telefone.';
        messageBox.classList.remove('success', 'info');
        messageBox.classList.add('show', 'error');
        console.error('Erro ao enviar via EmailJS:', error);
      })
      .finally(function () {
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar Mensagem';
      });
  });
});
