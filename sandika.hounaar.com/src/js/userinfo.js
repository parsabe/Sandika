document.addEventListener('DOMContentLoaded', function () {
  // Event delegation (works for dynamic content too)
  document.addEventListener('click', function (ev) {
    var card = ev.target.closest('.all-users');
    if (!card) return;

    var anonId = card.dataset.anonId;
    if (!anonId) {
      console.error('Missing data-anon-id on clicked card');
      return;
    }

    hideAllSections();
    // show a tiny placeholder while loading (optional)
    var target = document.getElementById('user-info-section');
    if (target) target.innerHTML = '<div class="text-muted p-2">Loading…</div>';

    fetch('/src/php/userinfo.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'anon_id=' + encodeURIComponent(anonId)
    })
    .then(function (res) { return res.text(); })
    .then(function (html) {
      var box = document.getElementById('user-info-section');
      if (!box) return;
      box.innerHTML = html;
      box.style.display = 'block';
    })
    .catch(function (err) {
      console.error(err);
      var box = document.getElementById('user-info-section');
      if (box) {
        box.innerHTML = '<div class="alert alert-danger">Could not load user info.</div>';
        box.style.display = 'block';
      }
    });
  });

  function hideAllSections() {
    var ids = ['none', 'profile', 'family', 'rules'];
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
  }
});
