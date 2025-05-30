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
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !mobileMenu.contains(event.target) &&
      !mobileMenuButton.contains(event.target)
    ) {
      mobileMenu.classList.add("hidden");
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
  
        // Close mobile menu if open
        mobileMenu.classList.add("hidden");
      }
    });
  });
  
  // Active nav link indicator
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  
  window.addEventListener("scroll", () => {
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
  function clearForm() {
    setTimeout(() => {
      document.getElementById("careerForm").reset();
    }, 500); // delay allows mailto window to trigger
  }
  
  function toggleDropdown() {
    const menu = document.getElementById("servicesDropdownMenu");
    menu.classList.toggle("hidden");
  }
  
  // Optional: close dropdown if clicked outside
  window.addEventListener("click", function (e) {
    const button = document.getElementById("servicesDropdownButton");
    const menu = document.getElementById("servicesDropdownMenu");
    if (!button.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
    }
  });
  
  // Toggle dropdown function
  function toggleMobileDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle("hidden");
  }
  
  // Clear form function after submit
  function clearForm() {
    setTimeout(() => {
      document.getElementById("careerForm").reset();
    }, 100);
  }
  