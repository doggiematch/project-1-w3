window.onload = function () {
  fetch(
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects",
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (projects) {
      const project = projects.find(function (p) {
        return p.uuid === "1";
      });

      if (!project) {
        alert("Project not found");
        return;
      }

      document.getElementById("project-name").textContent = project.name;
      document.getElementById("project-description").textContent =
        project.description;
      document.getElementById("project-completed_on").textContent =
        project.completed_on;
      document.getElementById("project-image").src = project.image;
      document.getElementById("project-content").textContent = project.content;
    });
};
