// JavaScript for active navigation link highlighting and fade-in on scroll

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-item");

  // Create an Intersection Observer to watch for sections entering the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If a section is intersecting, get its ID
          const id = entry.target.id;

          // Loop through all navigation links
          navItems.forEach((item) => {
            // Check if the link's href matches the section's ID
            if (item.getAttribute("href") === `#${id}`) {
              // Add active classes to the current item
              item.classList.add("bg-purple-600", "text-white", "shadow-md");
            } else {
              // Remove active classes from other items
              item.classList.remove("bg-purple-600", "text-white", "shadow-md");
            }
          });
        }
      });
    },
    {
      // The `threshold` option determines at what percentage of the target's visibility the observer's callback should be executed.
      // A value of 0.5 means the callback will run when 50% of the section is visible.
      threshold: 0.5,
    }
  );

  // Observe each section on the page
  sections.forEach((section) => {
    observer.observe(section);
  });
});
