export const scrollToDiv = (divId) => {
  if (!divId) return;
  
  const targetElement = document.getElementById(divId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth", // Optional: for smooth scrolling animation
      block: "start", // Optional: align the top of the element with the top of the viewport
    });
  }
};
