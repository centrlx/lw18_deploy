document.addEventListener("DOMContentLoaded", () => {
  const skills = ["HTML", "CSS", "JavaScript", "GitHub", "GitHub Pages"];
  const list = document.getElementById("skills-list");

  if (!list) {
    return;
  }

  renderSkills(skills, list);
});

function renderSkills(data, container) {
  container.innerHTML = "";

  data.forEach((skill) => {
    const item = document.createElement("li");
    item.textContent = skill;
    container.appendChild(item);
  });
}
