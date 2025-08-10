<?php include_once 'src/php/header.php'?>

<title>Reset Password - Sandika</title>
<body>

<div class="container py-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card shadow-lg">
        <div class="card-body p-4 text-center">
          <img src="/src/pics/logo.jpg" width="100" alt="Sandika Logo">
          <h3 class="mt-3">Reset Your Password</h3>
          <p class="text-muted">Enter your new password below.</p>

          <form id="resetPasswordForm" class="mt-3">
            <input type="hidden" name="token" id="resetToken">

            <div class="mb-3 text-start">
              <label class="form-label" for="new_password">New Password</label>
              <input type="password" class="form-control" id="new_password" name="new_password" required>
            </div>

            <div class="mb-3 text-start">
              <label class="form-label" for="r_new_password">Repeat New Password</label>
              <input type="password" class="form-control" id="r_new_password" name="r_new_password" required>
            </div>

            <button type="submit" class="btn btn-primary w-100" id="resetPassBtn">Update Password</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<?php include_once 'src/php/footer.php'?>

<script>
  // Auto-fill token from URL
  const urlParams = new URLSearchParams(window.location.search);
  document.getElementById('resetToken').value = urlParams.get('token');
</script>
</body>
</html>
