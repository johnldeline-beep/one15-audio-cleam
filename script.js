const video=document.getElementById('heroVideo');
const toggle=document.getElementById('soundToggle');
if(video&&toggle){
  toggle.addEventListener('click',()=>{
    video.muted=!video.muted;
    toggle.textContent=video.muted?'Sound On':'Sound Off';
    toggle.setAttribute('aria-pressed',String(!video.muted));
    if(video.paused) video.play().catch(()=>{});
  });
}
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

const menuToggle=document.getElementById('menuToggle');
const mobileNav=document.getElementById('mobileNav');
if(menuToggle&&mobileNav){
  const closeMenu=()=>{
    menuToggle.setAttribute('aria-expanded','false');
    menuToggle.setAttribute('aria-label','Open menu');
    mobileNav.classList.remove('open');
  };
  const openMenu=()=>{
    menuToggle.setAttribute('aria-expanded','true');
    menuToggle.setAttribute('aria-label','Close menu');
    mobileNav.classList.add('open');
  };
  menuToggle.addEventListener('click',()=>{
    const isOpen=menuToggle.getAttribute('aria-expanded')==='true';
    isOpen?closeMenu():openMenu();
  });
  mobileNav.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click',closeMenu);
  });
  document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape') closeMenu();
  });
}
