window.onload = function () {
  fetch(
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects",
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (projects) {
      const orderedProjects = projects.sort(function (a, b) {
        return Number(a.uuid) - Number(b.uuid);
      });

      const selectedProjects = orderedProjects.slice(0, 3);
      const cards = document.querySelectorAll("#recent-projects .item-card");

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
          link.href = "404.html";
        }
      });
    });
};
