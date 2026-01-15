/**
 * Application principale du Portfolio
 * Gère le chargement des repos GitHub et l'affichage dynamique
 */

class Portfolio {
    constructor() {
        this.repos = [];
        this.featuredRepos = [];
        this.allRepos = [];
        this.init();
    }

    async init() {
        this.setupTheme();
        this.setupNavigation();
        this.setupModal();
        await this.loadRepos();
    }

    // ===== Theme Toggle =====
    setupTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');

        // Appliquer le thème sauvegardé ou la préférence système
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (prefersDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
            });
        }

        // Écouter les changements de préférence système
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });
    }

    // ===== Navigation =====
    setupNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Fermer le menu mobile lors du clic sur un lien
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Animation du navbar au scroll
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
            
            lastScroll = currentScroll;
        });
    }

    // ===== Modal =====
    setupModal() {
        const modal = document.getElementById('project-modal');
        const closeBtn = modal.querySelector('.modal-close');

        closeBtn.addEventListener('click', () => this.closeModal());

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    openModal(repo) {
        const modal = document.getElementById('project-modal');
        const modalBody = document.getElementById('modal-body');
        
        // Trouver la config du projet si elle existe
        const projectConfig = CONFIG.featuredProjects.find(p => p.name === repo.name);
        const description = projectConfig?.customDescription || repo.description || (window.i18n ? window.i18n.t('modal.noDesc') : 'Aucune description disponible.');
        const topics = projectConfig?.customTopics || repo.topics || [];

        // Fonction helper pour les traductions
        const t = (key) => window.i18n ? window.i18n.t(key) : key;

        modalBody.innerHTML = `
            <div class="modal-header">
                <h3 class="modal-title">${repo.name}</h3>
                <p class="modal-subtitle">${t('modal.updated')} ${this.formatDate(repo.updated_at)}</p>
            </div>

            <div class="modal-section">
                <h4>${t('modal.description')}</h4>
                <p class="modal-description">${description}</p>
            </div>

            ${topics.length > 0 ? `
            <div class="modal-section">
                <h4>${t('modal.technologies')}</h4>
                <div class="modal-topics">
                    ${topics.map(topic => `<span class="modal-topic">${topic}</span>`).join('')}
                </div>
            </div>
            ` : ''}

            <div class="modal-section">
                <h4>${t('modal.stats')}</h4>
                <div class="modal-info">
                    <div class="modal-info-item">
                        <span class="modal-info-value">${repo.stargazers_count}</span>
                        <span class="modal-info-label">${t('modal.stars')}</span>
                    </div>
                    <div class="modal-info-item">
                        <span class="modal-info-value">${repo.forks_count}</span>
                        <span class="modal-info-label">${t('modal.forks')}</span>
                    </div>
                    <div class="modal-info-item">
                        <span class="modal-info-value">${repo.language || 'N/A'}</span>
                        <span class="modal-info-label">${t('modal.language')}</span>
                    </div>
                    <div class="modal-info-item">
                        <span class="modal-info-value">${repo.size} KB</span>
                        <span class="modal-info-label">${t('modal.size')}</span>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>${t('modal.links')}</h4>
                <div class="modal-links">
                    <a href="${repo.html_url}" target="_blank" class="modal-link primary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        ${t('modal.github')}
                    </a>
                    ${repo.homepage ? `
                    <a href="${repo.homepage}" target="_blank" class="modal-link secondary">
                        🌐 ${t('modal.website')}
                    </a>
                    ` : ''}
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('project-modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    openExternalModal(project) {
        const modal = document.getElementById('project-modal');
        const modalBody = document.getElementById('modal-body');
        
        const t = (key) => window.i18n ? window.i18n.t(key) : key;

        modalBody.innerHTML = `
            <div class="modal-header">
                <h3 class="modal-title">${project.name}</h3>
                <span class="external-badge-modal">🏢 Projet en groupe</span>
            </div>

            <div class="modal-section">
                <h4>${t('modal.description')}</h4>
                <p class="modal-description">${project.description}</p>
            </div>

            <div class="modal-section">
                <h4>${t('modal.technologies')}</h4>
                <div class="modal-topics">
                    ${project.topics.map(topic => `<span class="modal-topic">${topic}</span>`).join('')}
                </div>
            </div>

            <div class="modal-section">
                <h4>📂 Repositories</h4>
                <div class="external-repos-list">
                    ${project.repos.map(r => `
                        <a href="${r.url}" target="_blank" class="external-repo-card">
                            <div class="external-repo-info">
                                <span class="external-repo-name">📁 ${r.name}</span>
                                <span class="external-repo-role">${r.role}</span>
                            </div>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // ===== Load Repos =====
    async loadRepos() {
        try {
            const response = await fetch(
                `https://api.github.com/users/${CONFIG.githubUsername}/repos?per_page=${CONFIG.maxRepos}&sort=updated`
            );

            if (!response.ok) {
                throw new Error('Erreur lors du chargement des repos');
            }

            this.repos = await response.json();
            
            // Filtrer les repos exclus et les forks (optionnel)
            this.repos = this.repos.filter(repo => 
                !CONFIG.excludedRepos.includes(repo.name)
            );

            // Mettre à jour le compteur
            const repoCount = document.getElementById('repo-count');
            if (repoCount) {
                repoCount.textContent = this.repos.length + '+';
            }

            // Séparer les featured et les autres
            const featuredNames = CONFIG.featuredProjects.map(p => p.name);
            this.featuredRepos = this.repos.filter(repo => featuredNames.includes(repo.name));
            this.allRepos = this.repos;

            // Ajouter les projets externes
            if (CONFIG.externalProjects) {
                this.featuredRepos = [...this.featuredRepos, ...CONFIG.externalProjects];
            }

            // Trier les featured selon l'ordre de config
            this.featuredRepos.sort((a, b) => {
                const aIndex = featuredNames.indexOf(a.name);
                const bIndex = featuredNames.indexOf(b.name);
                // Les projets externes vont à la fin si pas dans featuredProjects
                return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
            });

            this.renderProjects();

        } catch (error) {
            console.error('Erreur:', error);
            this.showError();
        }
    }

    renderProjects() {
        const featuredGrid = document.getElementById('featured-projects');

        // Render featured projects
        if (this.featuredRepos.length > 0) {
            featuredGrid.innerHTML = this.featuredRepos.map(repo => 
                this.createProjectCard(repo)
            ).join('');
        } else {
            featuredGrid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📁</div>
                    <p>Aucun projet mis en avant pour le moment.</p>
                </div>
            `;
        }

        // Ajouter les event listeners pour les cartes
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                // Vérifier si c'est un projet externe
                const externalName = card.dataset.external;
                if (externalName) {
                    const externalProject = CONFIG.externalProjects.find(p => p.name === externalName);
                    if (externalProject) {
                        this.openExternalModal(externalProject);
                    }
                    return;
                }

                const repoName = card.dataset.repo;
                const repo = this.repos.find(r => r.name === repoName);
                if (repo) {
                    this.openModal(repo);
                }
            });
        });
    }

    createProjectCard(repo) {
        // Gérer les projets externes différemment
        if (repo.isExternal) {
            return this.createExternalProjectCard(repo);
        }

        const projectConfig = CONFIG.featuredProjects.find(p => p.name === repo.name);
        const description = projectConfig?.customDescription || repo.description || 'Aucune description disponible.';
        const languageColor = CONFIG.languageColors[repo.language] || '#858585';

        return `
            <article class="project-card" data-repo="${repo.name}">
                <div class="project-header">
                    <h3 class="project-title">${repo.name}</h3>
                    <p class="project-description">${description}</p>
                </div>
                <div class="project-meta">
                    ${repo.language ? `
                    <div class="project-language">
                        <span class="language-dot" style="background-color: ${languageColor}"></span>
                        ${repo.language}
                    </div>
                    ` : '<div></div>'}
                    <div class="project-stats">
                        <span class="project-stat">
                            ⭐ ${repo.stargazers_count}
                        </span>
                        <span class="project-stat">
                            🔱 ${repo.forks_count}
                        </span>
                    </div>
                </div>
            </article>
        `;
    }

    createExternalProjectCard(project) {
        const languageColor = CONFIG.languageColors[project.language] || '#858585';

        return `
            <article class="project-card project-card-external" data-external="${project.name}">
                <div class="project-header">
                    <div class="project-title-row">
                        <h3 class="project-title">${project.name}</h3>
                        <span class="external-badge">🏢 Projet Multi-repo</span>
                    </div>
                    <p class="project-description">${project.description}</p>
                </div>
                <div class="project-repos">
                    ${project.repos.map(r => `
                        <a href="${r.url}" target="_blank" class="external-repo-link" onclick="event.stopPropagation();">
                            📁 ${r.name} <span class="repo-role">(${r.role})</span>
                        </a>
                    `).join('')}
                </div>
                <div class="project-meta">
                    ${project.language ? `
                    <div class="project-language">
                        <span class="language-dot" style="background-color: ${languageColor}"></span>
                        ${project.language}
                    </div>
                    ` : '<div></div>'}
                    <div class="project-topics">
                        ${project.topics.slice(0, 3).map(t => `<span class="topic-tag">${t}</span>`).join('')}
                    </div>
                </div>
            </article>
        `;
    }

    showError() {
        const errorHtml = `
            <div class="empty-state">
                <div class="empty-state-icon">⚠️</div>
                <p>Impossible de charger les projets. Veuillez réessayer plus tard.</p>
            </div>
        `;
        
        document.getElementById('featured-projects').innerHTML = errorHtml;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const locale = window.i18n ? (window.i18n.getLang() === 'en' ? 'en-US' : 'fr-FR') : 'fr-FR';
        return date.toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

// Initialiser l'application quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    window.portfolio = new Portfolio();
});
