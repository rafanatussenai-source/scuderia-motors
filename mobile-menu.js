document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');
 
  if (!toggle || !navList) return;
 
  toggle.addEventListener('click', function () {
    navList.classList.toggle('active');
  });
 
  // Fecha o menu ao clicar em um link
  navList.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navList.classList.remove('active');
    });
  });
});