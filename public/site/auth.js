// Demo-only local account flow. Do not use for real identity data or payments.
(()=>{const f=document.getElementById('f');if(!f)return;f.addEventListener('submit',e=>{e.preventDefault();const m=document.getElementById('m');if(m)m.textContent='Demo only: account creation is not connected to a secure backend yet.'})})();
