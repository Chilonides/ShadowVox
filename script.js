
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const closeButton = document.querySelector('.close-button');
  const sideMenu = document.querySelector('.side-menu');
  const menuLinks = document.querySelectorAll('.side-menu a');

  mobileMenuButton.addEventListener('click', () => {
    sideMenu.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    sideMenu.classList.remove('active');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      sideMenu.classList.remove('active');
    });
  });
});
