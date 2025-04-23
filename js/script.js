document.addEventListener('DOMContentLoaded', function () {
    // Carrega projetos
    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="btn-link">
                        <i class="fab fa-github"></i> Código
                    </a>
                    <a href="${project.showProject}" target="_blank" class="btn-link">
                        <i class="fas fa-external-link-alt"></i> Visualizar Projeto
                    </a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});

emailjs.init('sQYUTJvYCXRjTzXOh');