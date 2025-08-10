document.addEventListener('DOMContentLoaded', () => {
  // ─── Helpers ────────────────────────────────────────────────────────────────
  const showToast = opts => iziToast.show(opts);
  const toastError = (message, title = 'Error') => showToast({
    color: 'red',
    title,
    message,
    position: 'bottomCenter',
    timeout: 5000,
    theme: 'dark',
    icon: 'bi bi-exclamation-triangle',
    titleColor: '#580000',
    iconColor: '#580000'
  });
  const toastSuccess = (message, title = 'Success') => showToast({
    color: 'green',
    title,
    message,
    position: 'bottomCenter',
    timeout: 5000,
    theme: 'dark',
    icon: 'bi bi-check',
    titleColor: '#004719',
    iconColor: '#004719'
  });

  function ajaxForm(formSelector, url, handlers, useCredentials = true) {
    const form = document.querySelector(formSelector);
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      if (useCredentials) xhr.withCredentials = true;
      xhr.onload = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status !== 200) {
          return toastError(`Server error: ${xhr.status}`);
        }
        const msg = xhr.responseText.trim();
        (handlers[msg] || handlers._)(msg);
      };
      xhr.onerror = () => toastError('Network error. Check your connection.');
      xhr.send(fd);
    });
  }

  // ─── Login ──────────────────────────────────────────────────────────────────
  ajaxForm('.loginForm', '/src/php/login.php', {
    'success': () => window.location.href = 'https://sandika.hounaar.com/portal/',
    'An error occurred during login.': msg => toastError(msg),
    'Invalid username or password.': msg => toastError(msg),
    'Username or password is not correct.': msg => toastError(msg),
    '_': () => toastError('Something blocked the servers from logging in.')
  });

  // ─── Signup ─────────────────────────────────────────────────────────────────
  ajaxForm('.signupForm', '/src/php/signup.php', {
    'success': () => window.location.href = 'https://sandika.hounaar.com/portal/',
    'Missing required fields': msg => toastError(msg),
    'Username already exists': msg => toastError(msg),
    'Email already in use': msg => toastError(msg),
    'Something is blocking the servers from registering': msg => toastError(msg),
    'Password must be at least 8 characters long, contain uppercase, lowercase, digit, and a special character.':
      msg => toastError(msg, 'Weak Password'),
    '_': () => toastError('Unexpected server response.')
  });

  // ─── Forgot Password ───────────────────────────────────────────────────────
  ajaxForm('.fpassForm', '/src/php/forgotpass.php', {
    'success': () => window.location.href = '/forgotpass/',
    'Username not found.': () => toastError(
      'Username not found. Contact <a href="mailto:info@sandika.com">info@sandika.com</a>'
    ),
    '_': () => toastError('Something went wrong')
  });

  // ─── Update Info ───────────────────────────────────────────────────────────
  ajaxForm('.updateForm', '/src/php/updateinfo.php', {
    'success': () => toastSuccess('Information updated. Reload to see changes'),
    'Username or already exists. Use another ones.': msg => toastError(msg),
    'Invalid website URL': msg => toastError(msg),
    'There was a problem updating your info': msg => toastError(msg),
    '_': () => toastError('Updating information failed.')
  });

  // ─── Monetize ──────────────────────────────────────────────────────────────
  ajaxForm('.monetization', '/src/php/monetize.php', {
    'success': msg => toastSuccess('Information updated successfully.'),
    'There was a problem updating your monetize info': msg => toastError(msg),
    'User not found': msg => toastError(msg),
    'The BTC or ETH address is not valid': msg => toastError(msg),
    '_': () => toastError('Something went wrong updating monetization.')
  });

  // ─── Upgrade Password ──────────────────────────────────────────────────────
  ajaxForm('.upgrade_pass_form', '/src/php/upgrade_pass.php', {
    'success': msg => toastSuccess('Password updated successfully.'),
    'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&)':
      msg => toastError(msg),
    'Something is blocking the servers from updating password': msg => toastError(msg),
    'No user found :(. refrshing now': msg => { toastError(msg); setTimeout(() => location.reload(), 500); },
    'The passwords must be matched': msg => toastError(msg),
    '_': () => toastError('Password update failed.')
  });

  // ─── Post Story ────────────────────────────────────────────────────────────
  ajaxForm('.poststoryForm', '/src/php/story.php', {
    'success': msg => toastSuccess('Your story has been posted successfully.'),
    'Something is blocking the server from posting your story': msg => toastError(msg),
    'User crashed, reload the webpage': msg => toastError(msg),
    'Session Crashed. Reload now': msg => { toastError(msg); setTimeout(() => location.reload(), 500); },
    '_': () => toastError('Posting the story failed.')
  });

  // ─── ROT Cipher ─────────────────────────────────────────────────────────────
  const rotForm = document.querySelector('.rotForm');
  const cipherd = document.querySelector('.cipherd');
  if (rotForm && cipherd) {
    rotForm.addEventListener('submit', e => {
      e.preventDefault();
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/src/php/rot.php', true);
      xhr.withCredentials = true;
      xhr.onload = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status !== 200) {
          return toastError(`Server error: ${xhr.status}`);
        }
        const data = xhr.responseText;
        if (data === 'Converting txt failed') {
          toastError('Converting txt failed');
        } else {
          cipherd.style.display = 'block';
          cipherd.textContent = data;
        }
      };
      xhr.onerror = () => toastError('Network error. Check your connection.');
      xhr.send(new FormData(rotForm));
    });
  }

  // ─── Git Insight ────────────────────────────────────────────────────────────
  ajaxForm('.gitForm', '/src/php/git.php', {
    'Success. 15 CP added': msg => toastSuccess('The git info was added. 15 CPs awarded.'),
    'Success. 5 CP added':  msg => toastSuccess('The git info was added. 5 CPs awarded.'),
    'You need to update your GitHub account first': msg => toastError(msg),
    'Something went wrong adding the 15 CPs': msg => toastError(msg),
    'There was a problem posting the Git insight': msg => toastError(msg),
    'Something went wrong adding the 5 CPs': msg => toastError(msg),
    'Please enter a valid GitHub link': msg => toastError(msg),
    'User info crashed. Reloading now...': msg => { toastError(msg); setTimeout(() => location.reload(), 500); },
    'Session hijacked. Try again later...': msg => toastError(msg),
    '_': () => toastError('Something is blocking the servers.')
  });

  // ─── Reset Password ─────────────────────────────────────────────────────────
  const resetForm = document.getElementById('resetPasswordForm');
  if (resetForm) {
    resetForm.addEventListener('submit', e => {
      e.preventDefault();
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/src/php/reset_password.php', true);
      xhr.withCredentials = true;
      xhr.onload = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status !== 200) {
          return toastError(`Server error: ${xhr.status}`);
        }
        const msg = xhr.responseText.trim();
        switch (msg) {
          case 'success':
            iziToast.success({
              title: 'Success',
              message: 'Your password has been updated successfully.',
              position: 'bottomCenter',
              timeout: 4000,
            });
            break;
          case 'Passwords do not match':
          case 'Invalid or expired token':
          case 'Token expired':
            iziToast.error({
              title: 'Error',
              message: msg,
              position: 'bottomCenter',
              timeout: 4000,
            });
            break;
          default:
            iziToast.error({
              title: 'Error',
              message: msg || 'Something went wrong. Please try again.',
              position: 'bottomRight',
              timeout: 4000,
            });
        }
      };
      xhr.onerror = () => toastError('Network error. Check your connection.');
      xhr.send(new FormData(resetForm));
    });
  }
});
