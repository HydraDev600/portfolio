const cartCount = document.querySelector('#cartCount');
const toast = document.querySelector('#toast');
let cart = 0;

document.querySelectorAll('.add').forEach((button) => {
  button.addEventListener('click', () => {
    cart += 1;
    cartCount.textContent = cart;
    toast.querySelector('span').textContent = button.dataset.dish;
    toast.classList.add('show');
    window.clearTimeout(window.toastTimer);
    window.toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2200);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
