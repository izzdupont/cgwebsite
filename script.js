document.getElementById('y').textContent = new Date().getFullYear();

// Very simple demo handler (no backend). Replace with Web3Forms/EmailJS when ready.
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const out = `Thanks, ${data.name}! We'll reach out at ${data.email} within 1 business day.`;
    document.getElementById('formStatus').textContent = out;
    form.reset();
  });
}
