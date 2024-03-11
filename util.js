export const sections = document.querySelectorAll("section");

export const observeElements = (sectionElements) => {
  const options = { threshold: 0.25 };

  const callback = (entries) => {
    entries.forEach((entry) => {
      // desired code:
      if (entry.isIntersecting) entry.target.classList.add("in-view");
      if (!entry.isIntersecting) entry.target.classList.remove("in-view");
    });
  };

  const observer = new IntersectionObserver(callback, options);

  sections.forEach((section) => observer.observe(section));
};
