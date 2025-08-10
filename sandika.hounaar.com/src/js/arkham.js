document.addEventListener('DOMContentLoaded', () => {
  const show = opts => iziToast.show(opts);

  function handleResponse(msg) {
    msg = msg.trim();
    if (msg === 'Success') {
      show({
        color: 'green',
        title: 'Success',
        message: 'The Arkham Spirit Deciphered! 20 CPs added',
        position: 'bottomRight'
      });
      return true;
    }
    if ([
      'You have already solved this Arkham Spirit',
      'The answer is not correct',
      'Something went wrong updating the Arkham Deciphered status',
      'Something went wrong giving you the CPs. You need to contact the administrator'
    ].includes(msg)) {
      show({ color: 'red', title: 'Error', message: msg, position: 'topRight' });
      return false;
    }
    if (msg.startsWith('Session crashed')) {
      show({ color: 'red', title: 'Session Error', message: msg, position: 'topRight' });
      if (msg.includes('Reloading')) setTimeout(() => location.reload(), 1000);
      return false;
    }
    show({ color: 'red', title: 'Error', message: 'Unexpected server response', position: 'topRight' });
    return false;
  }

  for (let i = 1; i <= 9; i++) {
    const form = document.querySelector(`form.as${i}`);
    if (!form) continue;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const answer = form.querySelector('input[type="text"]').value.trim();
      if (!answer) {
        return show({
          color: 'red',
          title: 'Error',
          message: 'Please enter an answer first.',
          position: 'topRight'
        });
      }

      const fd = new FormData();
      fd.append('answer', answer);

      fetch('/src/php/arkham.php', {
        method: 'POST',
        credentials: 'include',
        body: fd
      })
      .then(res => res.text())
      .then(text => {
        if (handleResponse(text) && text.trim() === 'Success') {
          // play the matching audio file based on which form this was
          const audio = new Audio(`/src/audio/${i}.mp3`);
          audio.volume = 0.5;
          audio.play();
        }
      })
      .catch(() => show({
        color: 'red',
        title: 'Network Error',
        message: 'Cannot reach server.',
        position: 'bottomRight'
      }));
    });
  }
});
