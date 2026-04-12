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

      const otherProjects = projects
        .filter(function (p) {
          return p.uuid !== "1"; // Esto filtra los otros proyectos porque son diferentes al 1, gracias a !==
        })
        // con esto, nos traemos el orden ascendente de la api
        .sort(function (a, b) {
          return Number(a.uuid) - Number(b.uuid);
        });

      const selectedProjects = otherProjects.slice(0, 3);
      const cards = document.querySelectorAll("#other-projects .item-card");

      selectedProjects.forEach(function (project, index) {
        const card = cards[index];

        const img = card.querySelector("img");
        const title = card.querySelector("h3");
        const desc = card.querySelector("p");
        const link = card.querySelector("a");

        img.src = project.image;
        title.textContent = project.name;
        desc.textContent = project.description;

        if (project.uuid === "1") {
          link.href = "projects/1.html";
        } else {
          link.href = "../404.html";
        }
      });
    });
};
