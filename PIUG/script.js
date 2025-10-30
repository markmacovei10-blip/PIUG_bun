/* script.js complet */
document.addEventListener('DOMContentLoaded', ()=>{

  // --- hamburger toggle ---
  const ham = document.querySelector('.hamburger');
  const navlinks = document.querySelector('.nav-links');
  if(ham){
    ham.addEventListener('click', ()=> navlinks.classList.toggle('show'));
  }

  // --- search logic: cautare in tot containerul ---
  const searchInput = document.getElementById('site-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const container = document.querySelector('.container');
      const elements = container ? container.children : [];
      Array.from(elements).forEach(el => {
        const text = el.innerText.toLowerCase();
        el.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  // --- carousel simplu slideshow ---
  let idx = 0;
  const slides = document.querySelectorAll('.carousel img');
  if(slides.length){
    slides.forEach((s,i)=> s.style.display = i===0 ? 'block' : 'none'); // init display
    setInterval(()=>{
      slides[idx].style.display='none';
      idx = (idx+1)%slides.length;
      slides[idx].style.display='block';
    },2800);
  }

  // --- scroll up / down ---
  const up = document.querySelector('.up-btn');
  const down = document.querySelector('.down-btn');
  up?.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));
  down?.addEventListener('click', ()=> window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'}));

  // --- help button ---
  const help = document.querySelector('.help-btn');
  help?.addEventListener('click', ()=> alert('Ai nevoie de ajutor? Contactează Primăria la 0254-111-123 sau trimite un e-mail.'));

  // --- dark/light toggle ---
  const toggle = document.getElementById('theme-toggle');
  toggle?.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    toggle.innerText = document.body.classList.contains('dark') ? 'Light' : 'Dark';
  });

  // --- contact form validation ---
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = form.querySelector('input[name="email"]').value.trim();
      const phone = form.querySelector('input[name="phone"]').value.trim();
      const name = form.querySelector('input[name="name"]').value.trim();
      const msg = form.querySelector('textarea[name="message"]').value.trim();

      function validEmail(em){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em); }
      function validPhone(ph){ return /^(\+?\d{7,15})$/.test(ph.replace(/\s+/g,'')); }

      if(!name){ alert('Completează numele.'); return; }
      if(!validEmail(email)){ alert('Adaugă un email valid.'); return; }
      if(!validPhone(phone)){ alert('Adaugă un număr de telefon valid (ex +40721xxx...).'); return; }
      if(!msg){ alert('Scrie un mesaj.'); return; }

      alert('Mulțumim! Mesajul a fost trimis (simulat).');
      form.reset();
    });
  }

});
