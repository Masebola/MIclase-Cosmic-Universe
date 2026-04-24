// flip.js — Universe flip animation helper for roster page
// The roster uses CSS transitions + class toggling. This file handles
// the animated slide between DC and Marvel panels.

function flipToUniverse(universe) {
  const dcPanel = document.getElementById('dc-roster-panel');
  const mvPanel = document.getElementById('mv-roster-panel');
  if (!dcPanel || !mvPanel) return;

  const showing = universe === 'dc' ? dcPanel : mvPanel;
  const hiding  = universe === 'dc' ? mvPanel : dcPanel;

  hiding.style.opacity  = '0';
  hiding.style.transform = 'translateX(30px)';
  setTimeout(() => { hiding.classList.add('hidden'); }, 300);

  showing.classList.remove('hidden');
  showing.style.opacity  = '0';
  showing.style.transform = 'translateX(-30px)';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      showing.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      showing.style.opacity  = '1';
      showing.style.transform = 'translateX(0)';
    });
  });
}
