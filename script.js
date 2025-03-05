// Función para detectar cuando un proyecto entra en pantalla y animarlo
document.addEventListener("scroll", function () {
    let projects = document.querySelectorAll(".project");

    projects.forEach((project) => {
        let position = project.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            project.style.opacity = 1;
            project.style.transform = "translateY(0)";
        }
    });
});
