/**
 * Système de traduction i18n
 */

const translations = {
    fr: {
        // Navigation
        'nav.about': 'À propos',
        'nav.experience': 'Expérience',
        'nav.skills': 'Compétences',
        'nav.projects': 'Projets',
        'nav.contact': 'Contact',

        // Hero
        'hero.title': 'Etudiant Ingénieur Logiciel & IA',
        'hero.subtitle': 'En recherche d\'un stage de fin d\'étude en ingénierie logicielle et IA à partir de Septembre 2026',
        'hero.cta': 'Voir mes projets',

        // About
        'about.title': 'À propos',
        'about.p1': 'Étudiant ingénieur en dernière année à l\'UTBM, actuellement en maîtrise en Intelligence Artificielle à l\'UQAC (Université du Québec à Chicoutimi). Spécialisé en ingénierie logicielle et intelligence artificielle, avec une expérience en vision par ordinateur et génération d\'images synthétiques.',
        'about.p2': 'Mon parcours international (France, Slovénie, Belgique, Canada) m\'a permis d\'acquérir des compétences variées allant du développement bas niveau en C/C++ au développement web puis au deep learning avec PyTorch, en passant par la programmation parallèle (OpenMP, MPI, CUDA).',
        'about.info.school': 'UTBM + UQAC',
        'about.info.location': 'Chicoutimi, Québec',
        'about.info.languages': 'Français, Anglais C1',
        'about.info.internship': 'Stage Septembre 2026',
        'about.stats.projects': 'Projets',
        'about.stats.internship': 'Mois de stage',
        'about.stats.countries': 'Pays',

        // Experience
        'exp.title': 'Expérience & Formation',
        'exp.uqac.title': 'Maîtrise en Informatique, spé. IA',
        'exp.uqac.company': 'Université du Québec à Chicoutimi (UQAC), Canada',
        'exp.uqac.desc.main': 'Spécialisation en Intelligence Artificielle. Machine Learning, Deep Learning, Big Data, Vision artificielle. Programmation parallèle (OpenMP, MPI, OpenCL). Projet séminaire IA,',
        'exp.uqac.hackathon': 'Hackathon CIT×UQAC (2ème place)',
        'exp.jcd.title': 'Stagiaire Ingénieur Logiciel & IA',
        'exp.jcd.company': 'John Cockerill Defense, Loncin, Belgique',
        'exp.jcd.desc': 'Génération d\'images synthétiques et augmentation de données. Utilisation de modèles d\'IA générative et de détection. Automatisation des tâches de génération, d\'annotation et de description. Benchmark des performances et conception d\'algorithmes d\'estimation.',
        'exp.utbm.br.title': 'Ingénieur Informatique, filière Développement, filière IA',
        'exp.utbm.br.company': '🎓 UTBM, Belfort, France',
        'exp.utbm.br.desc': 'Programmation objet, bases de données, développement web. Ingénierie et qualité logicielle, Java entreprise. Informatique théorique classique et quantique, recherche opérationnelle, optimisation.',
        'exp.utbm.tc.title': 'Tronc Commun',
        'exp.utbm.tc.company': '🎓 UTBM, Belfort, France',
        'exp.utbm.tc.desc': 'Fondamentaux de l\'informatique : algorithmique, structures de données, programmation impérative. Algèbre, analyse, probabilités et statistiques. Introduction aux systèmes informatiques, réseaux et bases de données.', 
        'exp.slovenia.title': 'Semestre d\'étude en Slovénie',
        'exp.slovenia.company': '🎓 FAMNIT, University of Primorska, Koper',
        'exp.slovenia.desc': 'Cours dispensés en anglais : mathématiques, informatique, analyse de données. Travaux dirigés et projets en équipe, communication technique en anglais.',

        // Skills
        'skills.title': 'Compétences',
        'skills.languages': 'Langages',
        'skills.ai': 'IA & Machine Learning',
        'skills.hpc': 'Parallélisme & HPC',
        'skills.tools': 'Outils & Frameworks',

        // Projects
        'projects.title': 'Projets',
        'projects.featured': '⭐ Mis en avant',
        'projects.all': 'Tous les projets',
        'projects.loading': 'Chargement des projets...',

        // Contact
        'contact.title': 'Contact',
        'contact.text': 'Intéressé par mon profil ? N\'hésitez pas à me contacter !',

        // Footer
        'footer.rights': '© 2026 Mino1289. Tous droits réservés.',
        'footer.note': 'Ce portfolio se met à jour automatiquement via l\'API GitHub.',

        // Modal
        'modal.description': '📝 Description',
        'modal.technologies': '🏷️ Technologies',
        'modal.stats': '📊 Statistiques',
        'modal.links': '🔗 Liens',
        'modal.github': 'Voir sur GitHub',
        'modal.website': 'Site Web',
        'modal.stars': '⭐ Stars',
        'modal.forks': '🔱 Forks',
        'modal.language': '💻 Langage',
        'modal.size': '📦 Taille',
        'modal.updated': 'Mis à jour le',
        'modal.noDesc': 'Aucune description disponible.',

        // Tags
        'tag.generativeAI': 'IA Générative',
        'tag.english': 'Anglais',
        'tag.algorithms': 'Algorithmique',
        'tag.fundamentals': 'Fondamentaux',
        'tag.compSci': 'Science informatique'
    },
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero
        'hero.title': 'Software & AI Engineering Student',
        'hero.subtitle': 'Looking for a final year internship in software engineering and AI starting September 2026',
        'hero.cta': 'View my projects',

        // About
        'about.title': 'About',
        'about.p1': 'Final year engineering student at UTBM, currently pursuing a Master\'s in Artificial Intelligence at UQAC (Université du Québec à Chicoutimi). Specialized in software engineering and artificial intelligence, with experience in computer vision and synthetic image generation.',
        'about.p2': 'My international background (France, Slovenia, Belgium, Canada) has allowed me to acquire diverse skills ranging from low-level C/C++ development to web development and then to deep learning with PyTorch, including parallel programming (OpenMP, MPI, CUDA).',
        'about.info.school': 'UTBM + UQAC',
        'about.info.location': 'Chicoutimi, Quebec',
        'about.info.languages': 'French, English C1',
        'about.info.internship': 'Internship Sept. 2026',
        'about.stats.projects': 'Projects',
        'about.stats.internship': 'Months internship',
        'about.stats.countries': 'Countries',

        // Experience
        'exp.title': 'Experience & Education',
        'exp.uqac.title': 'Master\'s in Computer Science, AI spec.',
        'exp.uqac.company': 'Université du Québec à Chicoutimi (UQAC), Canada',
        'exp.uqac.desc.main': 'Specialization in Artificial Intelligence. Machine Learning, Deep Learning, Big Data, Computer Vision. Parallel programming (OpenMP, MPI, OpenCL). AI seminar project,',
        'exp.uqac.hackathon': 'CIT×UQAC Hackathon (2nd place)',
        'exp.jcd.title': 'Software & AI Engineering Intern',
        'exp.jcd.company': 'John Cockerill Defense, Loncin, Belgium',
        'exp.jcd.desc': 'Synthetic image generation and data augmentation. Use of generative AI and detection models. Automation of generation, annotation and description tasks. Performance benchmarking and estimation algorithm design.',
        'exp.utbm.br.title': 'Computer Engineering, Development & AI tracks',
        'exp.utbm.br.company': '🎓 UTBM, Belfort, France',
        'exp.utbm.br.desc': 'Object-oriented programming, databases, web development. Software engineering and quality, enterprise Java. Classical and quantum theoretical computer science, operations research, optimization.',
        'exp.utbm.tc.title': 'Common Core',
        'exp.utbm.tc.company': '🎓 UTBM, Belfort, France',
        'exp.utbm.tc.desc': 'Computer science fundamentals: algorithms, data structures, imperative programming. Algebra, analysis, probability and statistics. Introduction to computer systems, networks and databases.',
        'exp.slovenia.title': 'Study semester in Slovenia',
        'exp.slovenia.company': '🎓 FAMNIT, University of Primorska, Koper',
        'exp.slovenia.desc': 'Courses taught in English: mathematics, computer science, data analysis. Group projects and tutorials, technical communication in English.',

        // Skills
        'skills.title': 'Skills',
        'skills.languages': 'Languages',
        'skills.ai': 'AI & Machine Learning',
        'skills.hpc': 'Parallelism & HPC',
        'skills.tools': 'Tools & Frameworks',

        // Projects
        'projects.title': 'Projects',
        'projects.featured': '⭐ Featured',
        'projects.all': 'All projects',
        'projects.loading': 'Loading projects...',

        // Contact
        'contact.title': 'Contact',
        'contact.text': 'Interested in my profile? Feel free to contact me!',

        // Footer
        'footer.rights': '© 2026 Mino1289. All rights reserved.',
        'footer.note': 'This portfolio updates automatically via the GitHub API.',

        // Modal
        'modal.description': '📝 Description',
        'modal.technologies': '🏷️ Technologies',
        'modal.stats': '📊 Statistics',
        'modal.links': '🔗 Links',
        'modal.github': 'View on GitHub',
        'modal.website': 'Website',
        'modal.stars': '⭐ Stars',
        'modal.forks': '🔱 Forks',
        'modal.language': '💻 Language',
        'modal.size': '📦 Size',
        'modal.updated': 'Updated on',
        'modal.noDesc': 'No description available.',

        // Tags
        'tag.generativeAI': 'Generative AI',
        'tag.english': 'English',
        'tag.algorithms': 'Algorithms',
        'tag.fundamentals': 'Fundamentals',
        'tag.compSci': 'Computer Science'
    }
};

class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'fr';
        this.init();
    }

    init() {
        // Appliquer la langue sauvegardée
        document.documentElement.lang = this.currentLang;
        this.updateContent();
        this.setupToggle();
    }

    setupToggle() {
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
            this.updateToggleButton();
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
        localStorage.setItem('lang', this.currentLang);
        document.documentElement.lang = this.currentLang;
        this.updateContent();
        this.updateToggleButton();
        
        // Recharger les projets pour mettre à jour les descriptions
        if (window.portfolio) {
            window.portfolio.renderProjects();
        }
    }

    updateToggleButton() {
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.textContent = this.currentLang === 'fr' ? 'EN' : 'FR';
            langToggle.setAttribute('aria-label', this.currentLang === 'fr' ? 'Switch to English' : 'Passer en français');
        }
    }

    t(key) {
        return translations[this.currentLang][key] || key;
    }

    updateContent() {
        // Mettre à jour tous les éléments avec data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[this.currentLang][key]) {
                el.textContent = translations[this.currentLang][key];
            }
        });

        // Mettre à jour les attributs avec data-i18n-attr
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[this.currentLang][key]) {
                el.placeholder = translations[this.currentLang][key];
            }
        });
    }

    getLang() {
        return this.currentLang;
    }
}

// Instance globale
let i18n;
document.addEventListener('DOMContentLoaded', () => {
    i18n = new I18n();
    window.i18n = i18n;
});
