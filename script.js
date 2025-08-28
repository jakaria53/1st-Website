document.addEventListener("DOMContentLoaded", () => {
  // Sidebar toggle
  const toggleBtn = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  if(toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }

  // Login & Registration toggle
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");

  if(container && registerBtn && loginBtn) {
    registerBtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
    });
  }
});
