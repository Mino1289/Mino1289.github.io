/**
 * Configuration du Portfolio
 * 
 */

const CONFIG = {
    // Votre nom d'utilisateur GitHub
    githubUsername: 'Mino1289',

    // Nombre maximum de repos à afficher dans "Tous les projets"
    maxRepos: 50,

    // Repos à exclure (par exemple, le repo du portfolio lui-même)
    excludedRepos: [
        'Mino1289.github.io',
        'Mino1289' // Le repo de profil GitHub
    ],

    // Projets mis en avant (featured)
    // Ces projets seront affichés en premier avec une mise en avant spéciale
    // Ajoutez le nom du repo et optionnellement une description personnalisée
    featuredProjects: [
        {
            name: 'MI7_seg_impaint_deepfake',
            customDescription: 'Solution complète de détection et reconnaissance, d\'effacement et d\'hypertrucage d\'humains sur des flux vidéos. Utilise des techniques avancées de deep learning pour la segmentation et l\'inpainting. Implémenté en PyTorch avec des modèles pré-entraînés et des optimisations pour le traitement vidéo en temps réel. (Segmentation, Reconnaissance Faciale, Inpainting, [Deepfake])',
            customTopics: ['Deep Learning', 'Computer Vision', 'Video Processing', 'PyTorch', 'Segmentation']
        },
        {
            name: 'CarScan',
            customDescription: 'Projet de développement d\'une application destinés au professionnels de la vente de voiture usagés: Détections de dommage sur la carroserie, analyse d\'historique d\'entretien, prédiction de pannes futures, estimation du temps de revente, et proposition de valeure de rachat. Utilise des techniques de vision par ordinateur pour l\'analyse d\'images de voitures, et des modèles de machine learning pour les prédictions basées sur les données historiques, LLM+RAG pour l\'analyse de texte et la génération de rapports automatisés',
            customTopics: ['Computer Vision', 'Object Detection', 'Machine Learning', 'Python', 'LLM', 'RAG', 'Streamlit']
        },
        {
            name: 'SideLine-AI',
            customDescription: 'Conception de SideLine AI, une pipeline de vision par ordinateur sophistiquée qui automatise l\'analyse tactique du hockey sur glace en combinant la segmentation d\'instances via YOLO26 et le suivi multi-objets par ByteTrack. Le système assure une compréhension profonde du jeu grâce à la classification automatique des équipes et l\'identification des joueurs par OCR, tout en garantissant une précision spatiale optimale via une cartographie 2D stabilisée par la détection de points clés structurels de la patinoire. Ce projet transforme ainsi des flux vidéo bruts en données analytiques normalisées, surmontant l\'absence de données annotées par une approche méthodologique rigoureuse.',
            customTopics: ['Computer Vision', 'Object Detection', 'Instance Segmentation', 'Machine Learning', 'Multi-Object Tracking', 'OCR', 'Python', 'YOLO26', 'ByteTrack', 'K-Means', 'RANSAC']
        },
        {
            name: 'Hackathon_CIT_UQAC',
            customDescription: 'Projet développé lors d\'un hackathon de 24 heures visant à créer un dashboard interactif pour la visualisation de données en temps réel et un chatbot intelligent pour l\'assistance aux utilisateurs connecté à la base de donnée.',
            customTopics: ['Data Visualization', 'Chatbot', 'APIs', 'Python', 'Streamlit', 'LLM', 'AI Agents']
        },
        {
            name: 'TSP_Little',
            customDescription: 'Implémentation de l\'algorithme de Little pour résoudre le problème du voyageur de commerce de manière optimale. Utilise la méthode de branch and bound pour minimiser les coûts de déplacement. Implémentation en C avec parallélisation de la découverte de branche avec OpenMP. (basé sur le projet de la Matière IT45, mais plus poussé.)',
            customTopics: ['Algorithms', 'Branch and Bound', 'C', 'Optimization', 'OpenMP']
        },
        {
            name: 'MNIST',
            customDescription: 'Implémentation complète d\'un classificateur pour le dataset MNIST. Comprend un Perceptron Multicouche (MLP) et un Réseau de Neurones Convolutif (CNN) avec visualisation des résultats. Première approche du deep learning et de la vision par ordinateur.',
            customTopics: ['Machine Learning', 'Neural Networks', 'CNN', 'Python', 'Deep Learning']
        },
        {
            name: 'lp25-project',
            customDescription: 'Projet de développement d\'un analyseur d\'email en C, parallélisé avec fork, pour extraire des informations clés telles que les adresses email et construire des statistiques sur les expéditeurs.',
            customTopics: ['C', 'Email Parsing', 'Parallel Programming', 'Fork']
        },
        {
            name: 'Upsilon',
            customDescription: 'Contribution au développement de Upsilon, un logiciel tiers pour calculatrice graphique Numworks, ajoutant de nouvelles fonctionnalités et améliorations. Co-créateur de l\'application Liseuse pour Numworks, supportant des commandes partielles LaTeX.',
            customTopics: ['C++', 'Embedded Systems', 'Calculator']
        },
        {
            name: 'TuringMachine',
            customDescription: 'Implémentation du jeu de société Turing Machine en Java. Le but du jeu est de déterminer une combinaison secrète en utilisant des concepts de machines de Turing. Comprend une interface graphique simple pour jouer contre des adversaires locaux. (Matière AP4B)',
            customTopics: ['Java', 'Automata Theory', 'Simulation', 'Computer Science']
        },
        {
            name: 'Kareer',
            customDescription: 'Un site d\'offres d\'emploi multi-entreprises, côté RH et côté demandeurs d\'emploi (Matière WE4B)',
            customTopics: ['Web Development', 'Job Portal', 'Human Resources', 'Angular']
        },
    ],

    // Mapping des couleurs des langages
    languageColors: {
        'Python': '#3572A5',
        'JavaScript': '#f1e05a',
        'TypeScript': '#3178c6',
        'Java': '#b07219',
        'C': '#555555',
        'C++': '#f34b7d',
        'PHP': '#4F5D95',
        'Vue': '#41b883',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Jupyter Notebook': '#DA5B0B',
        'Shell': '#89e051'
    },

    // Projets externes (organisations, collaborations)
    // Ces projets sont ajoutés manuellement car ils ne sont pas dans votre profil GitHub
    externalProjects: [
        {
            name: 'DE50 AI Training',
            description: 'Plateforme d\'entraînement de modèles IA (MLP) pour des tâches de classification et regression, intégrant FastAPI et PyTorch pour le backend, et React pour le frontend. Permet aux utilisateurs de créer, entraîner et déployer des modèles d\'IA personnalisés via une interface web adapté au utilisateurs non-technique.',
            language: 'Python',
            topics: ['FastAPI', 'PyTorch', 'React', 'AI Training', 'Classification', 'Regression'],
            repos: [
                { name: 'ai-training-backend', url: 'https://github.com/DE50-AI-Training/ai-training-backend', role: 'Développeur principal' },
                { name: 'ai-training-webapp', url: 'https://github.com/DE50-AI-Training/ai-training-webapp', role: 'Contributeur' }
            ],
            stargazers_count: 0,
            forks_count: 0,
            isExternal: true
        }
    ]
};
