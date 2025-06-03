// Tailwind config
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#1a56db",
        secondary: "#0e4c92",
        accent: "#00a8e8",
        light: "#f0f7ff",
      },
    },
  },
};

// DOM Ready
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function (e) {
      e.stopPropagation();
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("show");
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      mobileMenu &&
      !mobileMenu.contains(e.target) &&
      mobileMenuButton &&
      !mobileMenuButton.contains(e.target)
    ) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("show");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
          mobileMenu.classList.remove("show");
        }
      }
    });
  });

  // Active nav link indicator
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-nav");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active-nav");
      }
    });
  });
});

// Clear form function
function clearForm() {
  setTimeout(() => {
    const form = document.getElementById("careerForm");
    if (form) form.reset();
  }, 500);
}

// Mobile dropdown toggle function
function toggleMobileDropdown(id) {
  const dropdown = document.getElementById(id);
  if (dropdown) {
    dropdown.classList.toggle("hidden");
    dropdown.classList.toggle("mobile-dropdown");
    dropdown.classList.toggle("open");
  }
}

//<script>
//   // Mobile menu toggle
//   const mobileMenuButton = document.getElementById("mobile-menu-button");
//   const mobileMenu = document.getElementById("mobile-menu");

//   mobileMenuButton.addEventListener("click", () => {
//     mobileMenu.classList.toggle("hidden");
//   });

//   // Toggle mobile dropdown menu
//   function toggleMobileDropdown(id) {
//     const dropdown = document.getElementById(id);
//     dropdown.classList.toggle("hidden");
//   }

//   // Example form submission (replace with your logic)
//   document
//     .getElementById("careerForm")
//     .addEventListener("submit", function (e) {
//       e.preventDefault();
//       alert("Thank you for submitting your details! We will contact you soon.");
//       this.reset();
//     });
// </script>

const menuButton = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");
const icon = document.getElementById("menu-icon");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

// Close menu when link is clicked (optional but user-friendly)
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});
