document.addEventListener("DOMContentLoaded", function () {
  // ===== Hero Carousel =====
  const heroCarousel = document.querySelector('#heroCarousel');
  if (heroCarousel) {
    new bootstrap.Carousel(heroCarousel, {
      interval: 2000,
      ride: 'carousel',
      pause: false
    });
  }

  // ===== Navbar Scroll Effect =====
  const navbar = document.getElementById("mainNavbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });

  // ===== Welcome Sidebar Logic =====
  const loginBtn = document.getElementById("loginBtn");
  const sidebar = document.getElementById("userSidebar");
  const logoutBtn = document.getElementById("logoutBtn");
  const homeBtn = document.getElementById("homeBtn");
  const sidebarName = document.getElementById("sidebarName");

  const username = localStorage.getItem("loggedInUser");

  if (username && loginBtn) {
    loginBtn.textContent = `Welcome, ${username}`;
    loginBtn.href = "#";
    loginBtn.classList.remove("btn", "btn-sm", "ms-lg-3", "mt-2", "mt-lg-0");

    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      sidebar.classList.toggle("open");
      sidebarName.textContent = `Welcome, ${username}`;
    });

    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("loggedInUser");
      window.location.href = "index.html";
    });

    homeBtn.addEventListener("click", function () {
      sidebar.classList.remove("open");
    });
  }
});


  // ===== Sticky Navbar Scroll Effect =====
  const navbar = document.getElementById("mainNavbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });

  // ===== Show Logged-In Username in Navbar =====
  const loginBtn = document.getElementById("loginBtn");
  const username = localStorage.getItem("loggedInUser");

  if (username && loginBtn) {
    loginBtn.textContent = `Welcome, ${username}`;
    loginBtn.href = "#"; // Or profile page
    loginBtn.classList.remove("btn", "btn-sm", "ms-lg-3", "mt-2", "mt-lg-0"); // Optional: make plain text
  }

  // ===== Project Filter (Tabs #1) =====
  document.querySelectorAll('#projectFilter a').forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelectorAll('#projectFilter a').forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');
      const cards = document.querySelectorAll('.project-card');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        card.parentElement.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
      });
    });
  });

  // ===== Project Tabs (Buttons #2) =====
  const tabButtons = document.querySelectorAll('#projectTabs button');
  const projectItems = document.querySelectorAll('.project-item');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.textContent.trim().toLowerCase();

      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');
        item.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
      });
    });
  });
// ===== Bootstrap Collapse Close Function (for toggling navbar) =====
function closeNavbar() {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse.classList.contains('show')) {
    new bootstrap.Collapse(navbarCollapse, { toggle: true });
  }
}

const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Opportunities don't happen. You create them.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Don't be afraid to give up the good to go for the great."
];
let quoteIndex = 0;

function cycleQuotes() {
  const quoteText = document.getElementById("quoteText");
  quoteText.classList.add("fade-out");
  setTimeout(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteText.textContent = quotes[quoteIndex];
    quoteText.classList.remove("fade-out");
  }, 500);
}
setInterval(cycleQuotes, 4000);

const expandBtn = document.getElementById("expandBtn");
const contactLeft = document.getElementById("contactLeft");

expandBtn.addEventListener("click", function () {
  if (contactLeft.classList.contains("expanded")) {
    contactLeft.classList.remove("expanded");
    expandBtn.textContent = "Read More";
  } else {
    contactLeft.classList.add("expanded");
    expandBtn.textContent = "Minimize This";
  }
});
