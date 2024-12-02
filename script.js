const projects = [
    {
        id: 1,
        title: "Proyecto 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-xXOTfLGd5WRf7u_UOYkFGKqPDZsi9lHnw&s",
        description: "Descripción detallada del Proyecto 1.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },
    {
        id: 2,
        title: "Proyecto 2",
        image: "https://i.pcmag.com/imagery/reviews/05GF8sMpHfawiyKgGnrgf7X-8.fit_scale.size_760x427.v1665503374.jpg",
        description: "Descripción detallada del Proyecto 2.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },

    {
        id: 1,
        title: "Proyecto 3",
        image: "https://www.pixartprinting.it/blog/wp-content/uploads/2022/12/figma_logo.png",
        description: "Descripción detallada del Proyecto 3.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },
    {
        id: 2,
        title: "Proyecto 4",
        image: "https://www.pixartprinting.it/blog/wp-content/uploads/2022/12/figma_logo.png",
        description: "Descripción detallada del Proyecto 4.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },
    {
        id: 1,
        title: "Proyecto 5",
        image: "https://i.pcmag.com/imagery/reviews/05GF8sMpHfawiyKgGnrgf7X-8.fit_scale.size_760x427.v1665503374.jpg",
        description: "Descripción detallada del Proyecto 5.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },
    {
        id: 2,
        title: "Proyecto 6",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-xXOTfLGd5WRf7u_UOYkFGKqPDZsi9lHnw&s",
        description: "Descripción detallada del Proyecto 6.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },
    {
        id: 1,
        title: "Proyecto 7",
        image: "https://pbs.twimg.com/profile_images/1735429515541938176/zOO1N7Su_400x400.jpg",
        description: "Descripción detallada del Proyecto 7.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },
    {
        id: 2,
        title: "Proyecto 8",
        image: "https://additioapp.com/wp-content/uploads/2022/08/google-classroom-2-1024x943.png",
        description: "Descripción detallada del Proyecto 8.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },
    {
        id: 1,
        title: "Proyecto 9",
        image: "https://beecrowd.com/wp-content/uploads/2024/04/2022-08-18-GitHub.jpg",
        description: "Descripción detallada del Proyecto 9.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },
    {
        id: 2,
        title: "Proyecto 10",
        image: "https://additioapp.com/wp-content/uploads/2022/08/google-classroom-2-1024x943.png",
        description: "Descripción detallada del Proyecto 10.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },
    {
        id: 1,
        title: "Proyecto 11",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_omKE_2EaoWHgNs3FtxoREHFvv-Q7mvfsJw&s",
        description: "Descripción detallada del Proyecto 11.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },
    {
        id: 2,
        title: "Proyecto 12",
        image: "https://cdn6.aptoide.com/imgs/9/7/9/9798f8d36ceb13c024595c2c0410158a_fgraphic.png",
        description: "Descripción detallada del Proyecto 12.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },

    {
        id: 1,
        title: "Proyecto 13",
        image: "https://pbs.twimg.com/profile_images/1735429515541938176/zOO1N7Su_400x400.jpg",
        description: "Descripción detallada del Proyecto 13.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },

    {
        id: 2,
        title: "Proyecto 14",
        image: "https://8404115.fs1.hubspotusercontent-na1.net/hubfs/8404115/google_analytics_logo.jpg",
        description: "Descripción detallada del Proyecto 14.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },

    {
        id: 1,
        title: "Proyecto 15",
        image: "https://blog.agenciaecole.com/wp-content/uploads/2022/07/Google-Seach-Console.png",
        description: "Descripción detallada del Proyecto 15.",
        link: "https://sites.google.com/view/morenosalvador/inicio"
    },
    
];

const projectsGrid = document.getElementById('projectsGrid');
const modal = document.getElementById('projectModal');
const closeButton = document.getElementsByClassName('close-button')[0];
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalLink = document.getElementById('modalLink');

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
    `;
    card.addEventListener('click', () => openModal(project));
    return card;
}

function openModal(project) {
    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalDescription.textContent = project.description;
    modalLink.href = project.link;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

projects.forEach(project => {
    const card = createProjectCard(project);
    projectsGrid.appendChild(card);
});

closeButton.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Inicializar los iconos de Feather
feather.replace();

