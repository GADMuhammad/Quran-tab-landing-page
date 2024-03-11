import { observeElements, sections } from "./util.js";

const labelElements = document.querySelectorAll("label");

labelElements.forEach((item) =>
  item.addEventListener("keydown", (e) => e.key === "Enter" && item.click())
);

// -----------------------

observeElements(sections);
