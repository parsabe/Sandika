document.addEventListener('DOMContentLoaded', () => {
  const show = opts => iziToast.show(opts);

  function handle(msg) {
    msg = msg.trim();
    if (msg === 'Success') {
      return show({ color:'green', title:'Success', message:'Riddle solved! 15 CPs added', position:'topRight' });
    }
    // all failure cases map to msg itself
    if ([
      'You have already solved this riddle',
      'No answer submitted',
      'The answer is not correct',
      'Riddle not found',
      'Something is blocking the server for solving the Riddles',
      'Something went wrong updating the Riddles status'
    ].includes(msg)) {
      return show({ color:'red', title:'Error', message:msg, position:'topRight' });
    }
    if (msg === 'Session time out' || msg === 'Session crashed. Reloading now') {
      show({ color:'red', title:'Session Error', message:msg, position:'topRight' });
      if (msg.startsWith('Session crashed')) setTimeout(()=>location.reload(),1000);
      return;
    }
    // fallback
    show({ color:'red', title:'Error', message:'Unexpected server response', position:'topRight' });
  }

  for (let i=1; i<=20; i++) {
    const form = document.querySelector(`form.riddle${i}`);
    if (!form) continue;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const ans = form.querySelector('input[type=text]').value.trim();
      if (!ans) return show({ color:'red', title:'Error', message:'Please enter an answer first.', position:'topRight' });

      const fd = new FormData();
      fd.append('riddle_id', i);
      fd.append('answer', ans);

      const xhr = new XMLHttpRequest();
      xhr.open('POST','/src/php/riddles.php',true);
      xhr.withCredentials = true;       // 🔑 send cookies
      xhr.onload = () => {
        if (xhr.status===200) handle(xhr.responseText);
        else show({ color:'red', title:'Error', message:`Server error ${xhr.status}`, position:'topRight' });
      };
      xhr.onerror = () => show({ color:'red', title:'Network Error', message:'Cannot reach server.', position:'topRight' });
      xhr.send(fd);
    });
  }
});
