// add delayed functionality here
function loadChat() {
  const s1 = document.createElement('script');
  const s0 = document.getElementsByTagName('script')[0];
  s1.src = 'https://embed.tawk.to/6786efa4825083258e05083e/1ihjhg70t';
  s1.setAttribute('crossorigin', '*');
  s1.async = true;
  s0.parentNode.insertBefore(s1, s0);
  document.body.appendChild(s1);
}
loadChat();
