// ===================================================================
// THEME B - AI RESEARCH PORTFOLIO
// Dev Charan Sai P - Interactive JavaScript
// ===================================================================

// ===================================================================
// DATA MODELS
// ===================================================================

// Featured Projects Data (for home page rail)
const featuredProjects = [
  {
    id: 'tech-stack-advisor',
    category: 'Personal Project',
    title: 'Stackwise - Tech Stack Architecture Advisor',
    date: 'December 2025',
    summary: 'A project-brief advisor that proposes a technology stack, architecture trade-offs, and an implementation roadmap.',
    tags: ['llm', 'gen-ai', 'architecture', 'streamlit', 'deployed'],
    tech: 'Python, Streamlit, Gemini API, google-genai',
    links: {
      github: 'https://github.com/DevCharanSaiP/techstack-advisory.agent',
      demo: 'https://stackwise.streamlit.app/'
    }
  },
  {
    id: 'diabetic-retinopathy-patent',
    category: 'Patent',
    title: 'AI System for Diabetic Retinopathy Detection',
    date: 'August 2024',
    summary: 'Federated learning system using Mask R-CNN for privacy-preserving medical diagnostics',
    tags: ['patent', 'federated-learning', 'computer-vision', 'medical-ai'],
    tech: 'Python, TensorFlow, Mask R-CNN, PySyft'
  },
  {
    id: 'prompt-playground',
    category: 'Personal Project',
    title: 'PromptLab - Prompt Engineering Playground',
    date: 'December 2025',
    summary: 'A playground for generating prompt variants, comparing their responses on the same input, and refining a prompt.',
    tags: ['llm', 'gen-ai', 'prompt-engineering', 'streamlit', 'deployed'],
    tech: 'Python, Streamlit, Gemini API, google-genai',
    links: {
      github: 'https://github.com/DevCharanSaiP/prompt-playground.agent',
      demo: 'https://play-promptlab.streamlit.app/'
    }
  },
  {
    id: 'synthetic-ecg',
    category: 'Academic Project',
    title: 'Synthetic ECG Signal Generation with Diffusion Models',
    date: 'April 2025',
    summary: 'Probabilistic diffusion model generating realistic synthetic ECG signals from MIT-BIH dataset',
    tags: ['gen-ai', 'medical-ai', 'deep-learning'],
    tech: 'Python, PyTorch, Diffusion Models',
    links: {
      github: 'https://github.com/DevCharanSaiP/Synthetic-ECG-using-Probabilistic-Diffusion-Models'
    }
  },
  {
    id: 'skin-lesion-federated',
    category: 'Academic Project',
    title: 'Collaborative AI Model for Skin Lesion Classification',
    date: 'May 2025',
    summary: 'Federated learning system for privacy-preserving skin lesion classification and segmentation',
    tags: ['federated-learning', 'deep-learning', 'computer-vision', 'medical-ai'],
    tech: 'Python, PyTorch, PySyft, OpenCV'
  }
];

// All Projects Data (for projects page)
const allProjects = {
  academic: [
    {
      id: 'detectron2-segmentation',
      title: 'Panoptic Image Segmentation Using Detectron2',
      role: 'Project Lead',
      organization: 'VIT Bhopal University',
      date: 'November 2023',
      summary: 'Explored Detectron2 pretrained models across 4 vision tasks, evaluating performance on 400 images',
      description: 'Led a project exploring panoptic image segmentation using Detectron2, focusing on evaluating pretrained models across multiple computer vision tasks. The study involved testing 10 images per class to analyze model performance and generalization. As part of a broader Detectron2 exploration, over 100 images were used to assess accuracy and consistency. The project covered all four core tasks supported by Detectron2—object detection, instance segmentation, keypoint detection, and panoptic segmentation—culminating in results generated from more than 400 processed images.',
      tags: ['deep-learning', 'computer-vision'],
      tech: 'Python, PyTorch, Detectron2, OpenCV, NumPy, Matplotlib'
    },
    {
      id: 'human-activity-recognition',
      title: 'Human Activity Recognition Using 2D CNNs',
      role: 'Project Lead',
      organization: 'VIT Bhopal University',
      date: 'April 2024',
      summary: 'A 2D CNN-based model classifying human activities using accelerometer sensor data',
      description: 'Led the development of a Human Activity Recognition system leveraging accelerometer sensor data to classify activities such as walking, sitting, and jogging. Designed and implemented a robust data pipeline including preprocessing, segmentation, and feature engineering of time-series data. Built and trained a 2D Convolutional Neural Network (CNN) model to effectively capture spatial-temporal patterns, achieving reliable classification performance.',
      tags: ['deep-learning', 'machine-learning'],
      tech: 'Python, TensorFlow, Keras, NumPy, Pandas, Scikit-learn',
      links: {
        github: 'https://github.com/DevCharanSaiP/Human-Activity-Recognition_2D-CNN'
      }
    },
    {
      id: 'synthetic-ecg',
      title: 'Synthetic ECG Signal Generation with Diffusion Models',
      role: 'Generative AI Engineer',
      organization: 'VIT Bhopal University',
      date: 'April 2025',
      summary: 'Built a probabilistic diffusion model to generate realistic synthetic ECG signals',
      description: 'Developed a generative AI system using probabilistic diffusion models to synthesize realistic ECG signals trained on the MIT-BIH Arrhythmia dataset. The project focused on learning the underlying distribution of cardiac waveforms and generating high-quality synthetic signals that preserve temporal and morphological characteristics of real ECG data. Implemented comprehensive data preprocessing pipelines and evaluated generated outputs using statistical similarity metrics.',
      tags: ['gen-ai', 'medical-ai', 'deep-learning'],
      tech: 'Python, PyTorch, NumPy, Pandas, Matplotlib, SciPy',
      links: {
        github: 'https://github.com/DevCharanSaiP/Synthetic-ECG-using-Probabilistic-Diffusion-Models'
      }
    },
    {
      id: 'skin-lesion-federated',
      title: 'Collaborative AI Model for Skin Lesion Classification',
      role: 'Project Lead',
      organization: 'VIT Bhopal University',
      date: 'May 2025',
      summary: 'Built a federated deep learning system for privacy-preserving skin lesion classification',
      description: 'Led the development of a collaborative AI system for skin lesion classification and segmentation in a decentralized healthcare environment using the HAM10000 dataset. Implemented a federated learning framework that enables multiple institutions to train a shared model without exchanging sensitive patient data, ensuring privacy and regulatory compliance. Designed deep learning architectures for both image classification and segmentation to accurately identify and localize skin lesions.',
      tags: ['federated-learning', 'deep-learning', 'computer-vision', 'medical-ai'],
      tech: 'Python, PyTorch, PySyft, OpenCV, Scikit-learn'
    }
  ],
  personal: [
    {
      id: 'ai-ml-algorithms',
      title: 'Artificial Intelligence ML/DL Algorithms & Models',
      date: 'May 2025',
      summary: 'Comprehensive collection of ML and DL algorithms implemented from scratch',
      description: 'Developed a structured repository of Jupyter notebooks implementing a wide range of machine learning and deep learning algorithms from scratch. The project covers supervised, unsupervised, and probabilistic learning techniques including regression, classification, clustering, and dimensionality reduction methods. Additionally implemented deep learning architectures like CNNs, RNNs, LSTMs, GANs, and Autoencoders with step-by-step explanations.',
      tags: ['machine-learning', 'deep-learning'],
      tech: 'Python, NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, PyTorch',
      links: {
        github: 'https://github.com/DevCharanSaiP/Artificial-Intelligence'
      }
    },
    {
      id: 'reinforcement-learning',
      title: 'Reinforcement Learning Algorithms',
      date: 'May 2025',
      summary: 'Hands-on collection of RL implementations across classic control environments',
      description: 'Developed a comprehensive repository of reinforcement learning implementations covering both value-based and policy-based methods. The project demonstrates core RL algorithms including Deep Q-Networks (DQN), DDPG, Q-Learning, SARSA, and Dynamic Programming through practical environments such as CartPole-v1, Pendulum-v1, FrozenLake-v1, LunarLander-v2, and a custom Grid World.',
      tags: ['reinforcement-learning', 'machine-learning'],
      tech: 'Python, NumPy, Matplotlib, OpenAI Gym, PyTorch',
      links: {
        github: 'https://github.com/DevCharanSaiP/Reinforcement-Learning-Algorithms'
      }
    },
    {
      id: 'spellbook-agent',
      title: 'SpellBook Agent',
      role: 'Deployed',
      date: 'December 2025',
      summary: 'Interactive AI web app generating creative fantasy spells using LLMs',
      description: 'Developed Spellbook Agent, an AI-powered web application that generates imaginative fantasy spells based on user inputs such as magic type, difficulty level, mood, and custom ideas. Built with Python and Gradio with custom CSS styling. Integrated Hugging Face\'s hosted LLM Inference API to enable real-time text generation without requiring user authentication.',
      tags: ['llm', 'agentic-ai', 'gen-ai', 'deployed'],
      tech: 'Python, Gradio, Hugging Face Transformers, HTML/CSS',
      links: {
        github: 'https://github.com/DevCharanSaiP/spellbook_agent',
        demo: 'https://huggingface.co/spaces/devcharansaip/spellbook_agent'
      }
    },
    {
      id: 'tech-stack-advisor',
      title: 'Stackwise — Tech Stack Architecture Advisor',
      role: 'Deployed',
      date: 'December 2025',
      summary: 'Turns a project brief and technical constraints into a structured stack and architecture recommendation.',
      description: 'Stackwise collects a project brief and context including application type, budget, expected scale, project stage, team experience, deployment preference, availability needs and priorities. Optional constraints cover languages, frontend, database, storage, integrations, AI/ML, security and compliance, and technologies to avoid. It sends this information to Gemini and presents a primary recommendation with trade-offs and risks, an implementation roadmap, alternatives and open questions; the recommendation can be downloaded as Markdown. Recommendations are decision support, not verified cost estimates, security reviews, compliance assessments or load tests.',
      tags: ['llm', 'gen-ai', 'architecture', 'streamlit', 'deployed'],
      tech: 'Python, Streamlit, Gemini API, google-genai',
      links: {
        github: 'https://github.com/DevCharanSaiP/techstack-advisory.agent',
        demo: 'https://stackwise.streamlit.app/'
      }
    },
    {
      id: 'prompt-playground',
      title: 'PromptLab — Prompt Engineering Playground',
      role: 'Deployed',
      date: 'December 2025',
      summary: 'Generates prompt variants, compares their outputs on the same input, and offers an optimized prompt recommendation.',
      description: 'PromptLab generates variants using seven patterns: Zero-shot, Few-shot, Chain-of-Thought-style, Role-Based, Structured Output, Reverse Prompting and Socratic. Users can review and edit variants, run selected prompts against the same sample input, and compare the results side by side. The app can also recommend an optimized prompt and download individual results, comparisons or the recommended prompt. Its Chain-of-Thought-style pattern requests careful task processing with a concise rationale or verifiable summary, not hidden private reasoning. A single sample is not a statistically reliable benchmark, and the optimized prompt is a model-generated recommendation rather than a guaranteed optimum.',
      tags: ['llm', 'gen-ai', 'prompt-engineering', 'streamlit', 'deployed'],
      tech: 'Python, Streamlit, Gemini API, google-genai',
      links: {
        github: 'https://github.com/DevCharanSaiP/prompt-playground.agent',
        demo: 'https://play-promptlab.streamlit.app/'
      }
    }
  ],
  patents: [
    {
      id: 'diabetic-retinopathy-patent',
      title: 'AI System for Diabetic Retinopathy Detection using Federated Learning',
      date: 'August 2024',
      summary: 'A federated AI system using Mask R-CNN for privacy-preserving diabetic retinopathy detection',
      description: 'Designed and developed an AI-based diagnostic system for detecting diabetic retinopathy using a federated learning approach combined with Mask R-CNN for image segmentation and classification. The system enables multiple healthcare institutions to collaboratively train a robust deep learning model without sharing sensitive patient data, ensuring privacy and regulatory compliance. The federated setup allows decentralized training and aggregation of model updates, making it suitable for real-world healthcare deployment.',
      tags: ['patent', 'federated-learning', 'deep-learning', 'computer-vision', 'medical-ai'],
      tech: 'Python, TensorFlow/PyTorch, Mask R-CNN, OpenCV, PySyft'
    },
    {
      id: 'smart-life-jacket',
      title: 'A Smart Life Jacket System',
      date: 'May 2024',
      summary: 'IoT-enabled smart life jacket detecting drowning and transmitting emergency alerts',
      description: 'Engineered a Smart Life Jacket System designed to enhance water safety through real-time monitoring and automated emergency response. The device integrates multiple sensors including water detection, pulse rate, and blood oxygen (SpO₂) sensors to continuously assess the wearer\'s condition. Upon detecting abnormal patterns indicative of drowning or distress, the system triggers instant alerts via a GSM module and satellite communication for reliable long-range data transmission. Built using Arduino Uno and embedded C.',
      tags: ['patent', 'iot'],
      tech: 'Arduino Uno, Embedded C, GSM Module, IoT Sensors, Satellite Communication'
    }
  ]
};

// Certificates Data
const certificates = {
  featured: [
    {
      id: 'make-agentic-ai-work-for-you',
      title: 'Make Agentic AI Work for You',
      issuer: 'IBM SkillsBuild',
      date: 'May 2026',
      credlyUrl: 'https://www.credly.com/badges/7db6fa11-bf4c-4af8-978a-181bc4555bb5/public_url',
      type: 'badge'
    },
    {
      id: 'generative-ai-essentials',
      title: 'Generative AI Essentials: Using LLMs to Work with Data',
      issuer: 'IBM SkillsBuild',
      date: 'May 2026',
      credlyUrl: 'https://www.credly.com/badges/837061e6-2cb6-44fa-98ae-9d0d5d1ca279/public_url',
      type: 'badge'
    },
    {
      id: 'rag-enhanced-ai-outputs',
      title: 'Retrieval-Augmented Generation for Enhanced AI Outputs',
      issuer: 'IBM SkillsBuild',
      date: 'May 2026',
      credlyUrl: 'https://www.credly.com/badges/c9cb9827-b9cf-4d84-af67-34b05dbabfec/public_url',
      type: 'badge'
    },
    {
      id: 'ibm-ai-engineering',
      title: 'IBM AI Engineering Professional',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credentialId: '7GVZ6KTYDC3N',
      verifyUrl: 'https://coursera.org/verify/professional-cert/7GVZ6KTYDC3N',
      pdfPath: 'doc/certificates/IBM-AI-Engineering-Professional-Certificate-Coursera.pdf'
    },
    {
      id: 'ml-python-ibm',
      title: 'Machine Learning with Python',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credentialId: 'FREBG6SKDQAY',
      verifyUrl: 'https://coursera.org/verify/FREBG6SKDQAY',
      pdfPath: 'doc/certificates/IBM-s-Machine-Learning-with-Python-Coursera.pdf'
    },
    {
      id: 'tensorflow-ibm',
      title: 'Building Deep Learning Models with TensorFlow',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credentialId: '4G8HZVMTXETU',
      verifyUrl: 'https://coursera.org/verify/4G8HZVMTXETU',
      pdfPath: 'doc/certificates/IBM-s-Building-Deep-Learning-Models-with-Tensorflow-Coursera.pdf'
    }
  ],
  all: [
    // IBM AI Engineering series
    {
      id: 'deep-learning-intro',
      title: 'Introduction to Deep Learning & Neural Networks',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credentialId: 'ER545CCTL43U',
      verifyUrl: 'https://coursera.org/verify/ER545CCTL43U'
    },
    {
      id: 'cv-image-processing',
      title: 'Introduction to Computer Vision and Image Processing',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credentialId: 'F95N2NBS3LJV',
      verifyUrl: 'https://coursera.org/verify/F95N2NBS3LJV'
    },
    {
      id: 'pytorch-ibm',
      title: 'Deep Neural Networks with PyTorch',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credentialId: 'LPYBPA9CZRSF',
      verifyUrl: 'https://coursera.org/verify/LPYBPA9CZRSF'
    },
    {
      id: 'ai-capstone',
      title: 'AI Capstone Project with Deep Learning',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credentialId: 'E73ARD8B4YQS',
      verifyUrl: 'https://coursera.org/verify/E73ARD8B4YQS'
    },
    // Other certifications
    {
      id: 'cv-vityarthi',
      title: 'Computer Vision',
      issuer: 'VITyarthi',
      date: 'December 2024'
    },
    {
      id: 'excel-linkedin',
      title: 'Learning Excel 2021',
      issuer: 'LinkedIn Learning',
      date: 'October 2022',
      credentialId: 'AU7nZMAhVrdTYircHMUXKs-gfvS5'
    },
    {
      id: 'ml-freecodecamp',
      title: 'Machine Learning with Python',
      issuer: 'FreeCodeCamp',
      date: 'April 2025'
    },
    {
      id: 'matlab-onramp',
      title: 'MATLAB Onramp',
      issuer: 'MathWorks',
      date: 'September 2022'
    },
    {
      id: 'simulink-onramp',
      title: 'Simulink Onramp',
      issuer: 'MathWorks',
      date: 'October 2022'
    },
    {
      id: 'privacy-security-nptel',
      title: 'Privacy and Security in Online Social Media',
      issuer: 'IIIT Hyderabad via NPTEL',
      date: 'April 2024',
      credentialId: 'NPTEL24CS04S115290082630624343',
      verifyUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS04S115290082630624343'
    },
    {
      id: 'personality-dev',
      title: 'Advanced Personality Development',
      issuer: 'BizGurukul',
      date: 'June 2022'
    },
    {
      id: 'speaking-linkedin',
      title: 'Speaking Confidently and Effectively',
      issuer: 'LinkedIn Learning',
      date: 'March 2023',
      credentialId: 'Adq2ZvtuQ-jeGd9-gUictl03Wtz6'
    }
  ],
  badges: [
    {
      id: 'aws-certified-cloud-practitioner',
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services Training and Certification',
      date: 'May 2026',
      credlyUrl: 'https://www.credly.com/badges/8ae6a44b-c2e8-46fd-abcf-bf2869ec18d6/public_url'
    },
    {
      id: 'aws-re-start-graduate',
      title: 'AWS re/Start Graduate',
      issuer: 'Amazon Web Services Training and Certification',
      date: 'May 2026',
      credlyUrl: 'https://www.credly.com/badges/662b0049-6828-4abe-abfb-f3de21559dae/public_url'
    },
    {
      id: 'rag-enhanced-ai-outputs',
      title: 'Retrieval-Augmented Generation for Enhanced AI Outputs',
      issuer: 'IBM SkillsBuild',
      date: 'May 2026',
      credlyUrl: 'https://www.credly.com/badges/c9cb9827-b9cf-4d84-af67-34b05dbabfec/public_url'
    },
    {
      id: 'generative-ai-essentials',
      title: 'Generative AI Essentials: Using LLMs to Work with Data',
      issuer: 'IBM SkillsBuild',
      date: 'May 2026',
      credlyUrl: 'https://www.credly.com/badges/837061e6-2cb6-44fa-98ae-9d0d5d1ca279/public_url'
    },
    {
      id: 'getting-started-generative-ai',
      title: 'Getting Started with Generative AI',
      issuer: 'IBM SkillsBuild',
      date: 'May 2026',
      credlyUrl: 'https://www.credly.com/badges/3140dad1-4b9e-44de-800a-f3fa1150fd12/public_url'
    },
    {
      id: 'make-agentic-ai-work-for-you',
      title: 'Make Agentic AI Work for You',
      issuer: 'IBM SkillsBuild',
      date: 'May 2026',
      credlyUrl: 'https://www.credly.com/badges/7db6fa11-bf4c-4af8-978a-181bc4555bb5/public_url'
    },
    {
      id: 'ml-python-credly',
      title: 'Machine Learning with Python',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credlyUrl: 'https://www.credly.com/badges/48fafc15-1e2c-47eb-9b22-096e7708fdba'
    },
    {
      id: 'ai-fundamentals-ibm',
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'June 2025',
      credlyUrl: 'https://www.credly.com/badges/cc4b0d6f-4c45-4264-87b9-6d21fe682d63'
    },
    {
      id: 'data-fundamentals-ibm',
      title: 'Data Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'June 2025',
      credlyUrl: 'https://www.credly.com/badges/80822e8d-d105-46b6-986c-348ee0e401ee'
    },
    {
      id: 'getting-started-data',
      title: 'Getting Started with Data',
      issuer: 'IBM SkillsBuild',
      date: 'May 2025',
      credlyUrl: 'https://www.credly.com/badges/a3d2012a-04de-483d-a309-2994278be367'
    },
    {
      id: 'vertex-ai-prompt',
      title: 'Prompt Design in Vertex AI Skill Badge',
      issuer: 'Google Cloud',
      date: 'March 2025',
      credlyUrl: 'https://www.credly.com/badges/219e515c-5adf-463a-9dc5-f83a19d4b20a'
    }
  ]
};


// ===================================================================
// THEME MANAGER
// ===================================================================

class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.themeIcon = document.getElementById('theme-icon');
    this.html = document.documentElement;
    
    this.init();
  }

  init() {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const systemPreference = colorScheme.matches ? 'dark' : 'light';
    const savedTheme = localStorage.getItem('theme');
    this.setTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : systemPreference, false);

    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    colorScheme.addEventListener('change', event => {
      if (!localStorage.getItem('theme')) this.setTheme(event.matches ? 'dark' : 'light', false);
    });
  }

  setTheme(theme, persist = true) {
    this.html.setAttribute('data-theme', theme);
    this.updateIcon(theme);
    if (persist) localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    const currentTheme = this.html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  updateIcon(theme) {
    if (this.themeIcon) {
      this.themeIcon.innerHTML = theme === 'dark'
        ? '<path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z"></path>'
        : '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path>';
    }
    if (this.themeToggle) {
      this.themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    }
  }
}

// ===================================================================
// MOBILE NAVIGATION
// ===================================================================

class MobileNavigation {
  constructor() {
    this.navToggle = document.getElementById('nav-toggle');
    this.navMenu = document.getElementById('nav-menu');
    this.navLinks = document.querySelectorAll('.nav-link');
    
    this.init();
  }

  init() {
    if (!this.navToggle || !this.navMenu) return;
    this.setResponsiveState();
    this.navToggle.addEventListener('click', () => this.toggleMenu());
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
    document.addEventListener('click', (e) => {
      if (e.target instanceof Element && !e.target.closest('.nav-shell') && !this.navMenu.hidden) {
        this.closeMenu();
      }
    });
    window.addEventListener('resize', () => this.setResponsiveState());
  }

  toggleMenu() {
    const open = this.navMenu.hidden;
    this.navMenu.hidden = !open;
    this.navToggle.setAttribute('aria-expanded', String(open));
    this.navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }

  closeMenu() {
    if (window.matchMedia('(max-width: 760px)').matches) {
      this.navMenu.hidden = true;
      this.navToggle.setAttribute('aria-expanded', 'false');
      this.navToggle.setAttribute('aria-label', 'Open navigation');
    }
  }

  setResponsiveState() {
    const isMobile = window.matchMedia('(max-width: 760px)').matches;
    this.navMenu.hidden = isMobile;
    this.navToggle.setAttribute('aria-expanded', 'false');
    this.navToggle.setAttribute('aria-label', 'Open navigation');
  }
}

// ===================================================================
// FEATURED PROJECTS
// ===================================================================

class FeaturedProjectsRenderer {
  constructor() {
    this.railContainer = document.getElementById('featured-projects-grid');
    
    if (this.railContainer) {
      this.init();
    }
  }

  init() {
    this.renderProjects();
  }

  renderProjects() {
    const html = featuredProjects.map(project => `
      <article class="featured-project-card">
        <div class="project-card-meta"><span class="project-kind">${project.category}</span><span>${project.date}</span></div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <p class="project-tech">${project.tech}</p>
        <div class="project-card-footer">
          <a class="project-open" href="projects.html?project=${encodeURIComponent(project.id)}">Read project details <span aria-hidden="true">→</span></a>
          ${project.links && project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer">Repository <span aria-hidden="true">↗</span></a>` : ''}
          ${project.links && project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer">Demo <span aria-hidden="true">↗</span></a>` : ''}
        </div>
      </article>
    `).join('');
    this.railContainer.innerHTML = html;
  }
}

// ===================================================================
// PROJECTS PAGE
// ===================================================================

class ProjectsPage {
  constructor() {
    this.academicGrid = document.getElementById('academic-grid');
    this.personalGrid = document.getElementById('personal-grid');
    this.patentsGrid = document.getElementById('patents-grid');
    this.filterChips = document.querySelectorAll('.filter-chip');
    this.searchInput = document.getElementById('project-search');
    this.results = document.getElementById('project-results');
    this.emptyState = document.getElementById('project-empty');
    this.categories = document.querySelectorAll('[data-project-category]');
    this.modal = document.getElementById('project-modal');
    this.modalContent = document.getElementById('modal-content');
    this.modalClose = document.getElementById('modal-close');
    this.modalBackdrop = document.getElementById('modal-backdrop');

    if (this.academicGrid) this.init();
  }

  init() {
    this.renderProjects();
    this.setupFilters();
    this.setupModal();
    this.filterProjects();
    this.openFromURL();
  }

  renderProjects() {
    const groups = [
      [this.academicGrid, allProjects.academic],
      [this.personalGrid, allProjects.personal],
      [this.patentsGrid, allProjects.patents]
    ];
    groups.forEach(([grid, projects]) => {
      if (grid) grid.innerHTML = projects.map(project => this.createProjectCard(project)).join('');
    });

    document.querySelectorAll('[data-project-id]').forEach(button => {
      button.addEventListener('click', () => this.openProjectModal(button.dataset.projectId, button));
    });
  }

  createProjectCard(project) {
    const tags = project.tags.map(tag => `<span class="tag-chip">${tag.replace(/-/g, ' ')}</span>`).join('');
    const searchableText = [project.title, project.summary, project.description, project.tech, project.date, ...(project.tags || [])]
      .join(' ').toLowerCase();
    const links = project.links || {};
    return `
      <article class="project-compact-card" data-tags="${project.tags.join(' ')}" data-search="${searchableText.replace(/"/g, '&quot;')}">
        <div class="project-meta">
          <span class="project-role">${project.role || project.organization || 'Project'}</span>
          <span>${project.date}</span>
        </div>
        <h3 class="project-compact-title">${project.title}</h3>
        ${project.organization ? `<p class="project-org">${project.organization}</p>` : ''}
        <p class="project-summary">${project.summary}</p>
        <div class="project-tags">${tags}</div>
        <p class="project-tech-list">${project.tech}</p>
        <div class="project-card-footer">
          <button class="project-open" type="button" data-project-id="${project.id}">View project details <span aria-hidden="true">→</span></button>
          ${links.github ? `<a class="project-open" href="${links.github}" target="_blank" rel="noopener noreferrer">Repository <span aria-hidden="true">↗</span></a>` : ''}
          ${links.demo ? `<a class="project-open" href="${links.demo}" target="_blank" rel="noopener noreferrer">Demo <span aria-hidden="true">↗</span></a>` : ''}
        </div>
      </article>
    `;
  }

  setupFilters() {
    this.filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        this.filterChips.forEach(c => {
          c.classList.remove('active');
          c.setAttribute('aria-pressed', 'false');
        });
        chip.classList.add('active');
        chip.setAttribute('aria-pressed', 'true');
        this.filterProjects();
      });
    });
    if (this.searchInput) this.searchInput.addEventListener('input', () => this.filterProjects());
  }

  filterProjects() {
    const filter = document.querySelector('.filter-chip.active')?.dataset.filter || 'all';
    const query = this.searchInput?.value.trim().toLowerCase() || '';
    let visibleCount = 0;
    document.querySelectorAll('.project-compact-card').forEach(card => {
      const tags = (card.dataset.tags || '').split(' ');
      const matchesFilter = filter === 'all' || tags.includes(filter);
      const matchesSearch = !query || (card.dataset.search || '').includes(query);
      const visible = matchesFilter && matchesSearch;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    this.categories.forEach(category => {
      category.hidden = !category.querySelector('.project-compact-card:not([hidden])');
    });
    if (this.results) {
      this.results.textContent = `${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'} shown`;
    }
    if (this.emptyState) this.emptyState.hidden = visibleCount > 0;
  }

  setupModal() {
    if (this.modalClose) this.modalClose.addEventListener('click', () => this.closeModal());
    if (this.modalBackdrop) this.modalBackdrop.addEventListener('click', () => this.closeModal());
    document.addEventListener('keydown', (e) => {
      if (this.modal.hidden) return;
      if (e.key === 'Escape') this.closeModal();
      if (e.key === 'Tab') this.trapFocus(e);
    });
  }

  trapFocus(event) {
    const focusable = [...this.modal.querySelectorAll('a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])')]
      .filter(element => !element.hidden);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  openFromURL() {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
    if (projectId) this.openProjectModal(projectId);
  }

  openProjectModal(projectId, trigger = document.activeElement) {
    const project = Object.values(allProjects).flat().find(item => item.id === projectId);
    if (!project) return;
    this.lastTrigger = trigger;
    const tags = project.tags.map(tag => `<span class="tag-chip">${tag.replace(/-/g, ' ')}</span>`).join('');
    const links = project.links || {};
    const linksHtml = [
      links.github ? `<a class="modal-link" href="${links.github}" target="_blank" rel="noopener noreferrer">View repository ↗</a>` : '',
      links.demo ? `<a class="modal-link" href="${links.demo}" target="_blank" rel="noopener noreferrer">Open demo ↗</a>` : ''
    ].join('');
    this.modalContent.innerHTML = `
      <p class="eyebrow">${project.role || project.organization || 'Project'} · ${project.date}</p>
      <h2 class="modal-title" id="modal-title">${project.title}</h2>
      <div class="modal-meta">${project.organization ? `<span>${project.organization}</span>` : ''}</div>
      <div class="project-tags">${tags}</div>
      <p class="modal-description">${project.description}</p>
      <section class="modal-section"><h3 class="modal-section-title">Tools and methods</h3><p class="project-tech-list">${project.tech}</p></section>
      ${linksHtml ? `<div class="modal-links">${linksHtml}</div>` : ''}
    `;
    this.modal.hidden = false;
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    this.modalClose.focus();
  }

  closeModal() {
    this.modal.hidden = true;
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (this.lastTrigger instanceof HTMLElement) this.lastTrigger.focus();
  }
}

// Certificate Preview Mapping
const certificatePreviewMap = {
  'ibm-ai-engineering': 'doc/certificates/IBM-AI-Engineering-Professional-Certificate-Coursera.pdf',
  'ml-python-ibm': 'doc/certificates/IBM-s-Machine-Learning-with-Python-Coursera.pdf',
  'opencv-bootcamp': 'doc/certificates/OpenCV-Bootcamp.pdf',
  'tensorflow-ibm': 'doc/certificates/IBM-s-Building-Deep-Learning-Models-with-Tensorflow-Coursera.pdf',
  'deep-learning-intro': 'doc/certificates/IBM-s-Introduction-to-Deep-Learning-&-Neural-Networks-with-Keras-Coursera.pdf',
  'cv-image-processing': 'doc/certificates/IBM-s-Introduction-to-Computer-Vision-and-Image-Processing-Coursera.pdf',
  'pytorch-ibm': 'doc/certificates/IBM-s-Deep-Neural-Networks-with-PyTorch-Coursera.pdf',
  'ai-capstone': 'doc/certificates/IBM-s-AI-Capestone-Project-with-Deep-Learning-Coursera.pdf',
  'cv-vityarthi': 'doc/certificates/Computer Vision by VITyarthi.png',
  'excel-linkedin': 'doc/certificates/Learning Excel 2021 - Linkedin.pdf',
  'ml-freecodecamp': 'doc/certificates/Machine Learning with Python FreeCodeCamp.pdf',
  'matlab-onramp': 'doc/certificates/MATLAB Onramp - MathWorks.pdf',
  'simulink-onramp': 'doc/certificates/Simulink Onramp - MathWorks.pdf',
  'privacy-security-nptel': 'doc/certificates/Privacy and Security in Online Social Media.pdf',
  'personality-dev': 'doc/certificates/Advanced Personality Development - Bizgurukul.pdf',
  'speaking-linkedin': 'doc/certificates/Speaking Confidently and Effectively - Linkedin.pdf',
  'ml-python-credly': 'doc/badges/machine-learning-with-python.png',
  'ai-fundamentals-ibm': 'doc/badges/artificial-intelligence-fundamentals.png',
  'data-fundamentals-ibm': 'doc/badges/data-fundamentals.png',
  'getting-started-data': 'doc/badges/getting-started-with-data.png',
  'vertex-ai-prompt': 'doc/badges/prompt-design-in-vertex-ai-skill-badge.png',
  'aws-certified-cloud-practitioner': 'doc/badges/aws-certified-cloud-practitioner.png',
  'aws-re-start-graduate': 'doc/badges/aws-re-start-graduate.png',
  'rag-enhanced-ai-outputs': 'doc/badges/retrieval-augmented-generation-for-enhanced-ai-output.png',
  'generative-ai-essentials': 'doc/badges/generative-ai-essentials-using-llms-to-work-with-data.png',
  'getting-started-generative-ai': 'doc/badges/getting-started-with-generative-ai.png',
  'make-agentic-ai-work-for-you': 'doc/badges/make-agentic-ai-work-for-you.png'
};

function getCertificatePreview(certId) {
  return certificatePreviewMap[certId] || '';
}

// ===================================================================
// CERTIFICATES PAGE
// ===================================================================

class CertificatesPage {
  constructor() {
    this.featuredGrid = document.getElementById('featured-certs-grid');
    this.certsGrid = document.getElementById('certs-grid');
    this.badgesGrid = document.getElementById('badges-grid');
    this.modal = document.getElementById('cert-modal');
    this.modalContent = document.getElementById('cert-modal-content');
    this.modalClose = document.getElementById('cert-modal-close');
    this.modalBackdrop = document.getElementById('cert-modal-backdrop');
    
    if (this.featuredGrid) {
      this.init();
    }
  }

  init() {
    this.renderFeaturedCerts();
    this.renderAllCerts();
    this.renderBadges();
    this.setupModal();
  }

  renderFeaturedCerts() {
    if (this.featuredGrid) {
      this.featuredGrid.innerHTML = certificates.featured.map(cert => this.createCertCard(cert, true)).join('');
    }
  }

  renderAllCerts() {
    if (this.certsGrid) {
      this.certsGrid.innerHTML = certificates.all.map(cert => this.createCertCard(cert, false)).join('');
    }
  }

  renderBadges() {
    if (this.badgesGrid) {
      this.badgesGrid.innerHTML = certificates.badges.map(badge => this.createBadgeCard(badge)).join('');
    }
  }

  createCertCard(cert, isFeatured) {
    const previewPath = getCertificatePreview(cert.id);
    const actions = [];
    if (this.modal && previewPath) {
      actions.push(`<button class="cert-action-btn" type="button" data-cert-preview="${cert.id}">Preview document</button>`);
    } else if (isFeatured) {
      actions.push('<a class="cert-action-btn" href="certifications.html">Credential archive</a>');
    }
    if (cert.verifyUrl) actions.push(`<a class="cert-action-btn" href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer">Verify ↗</a>`);
    if (cert.credlyUrl) actions.push(`<a class="cert-action-btn" href="${cert.credlyUrl}" target="_blank" rel="noopener noreferrer">View badge ↗</a>`);
    return `
      <article class="cert-doc-card">
        <h3 class="cert-doc-title">${cert.title}</h3>
        <p class="cert-doc-issuer">${cert.issuer}</p>
        <p class="cert-doc-date">${cert.date}</p>
        ${cert.credentialId ? `<p class="cert-doc-id">Credential ID: ${cert.credentialId}</p>` : ''}
        ${actions.length ? `<div class="cert-doc-actions">${actions.join('')}</div>` : ''}
      </article>
    `;
  }

  createBadgeCard(badge) {
    const imagePath = getCertificatePreview(badge.id);
    return `
      <article class="badge-card">
        ${imagePath ? `<img class="badge-image" src="${imagePath}" alt="" loading="lazy">` : ''}
        <h3 class="badge-title">${badge.title}</h3>
        <p class="badge-issuer">${badge.issuer}</p>
        <p class="badge-date">${badge.date}</p>
        <a href="${badge.credlyUrl}" target="_blank" rel="noopener noreferrer" class="badge-link">
          View badge ↗
        </a>
      </article>
    `;
  }

  setupModal() {
    if (this.modalClose) this.modalClose.addEventListener('click', () => this.closeModal());
    if (this.modalBackdrop) this.modalBackdrop.addEventListener('click', () => this.closeModal());
    document.querySelectorAll('[data-cert-preview]').forEach(button => {
      button.addEventListener('click', () => this.openPreview(button.dataset.certPreview, button));
    });
    document.addEventListener('keydown', (e) => {
      if (!this.modal || this.modal.hidden) return;
      if (e.key === 'Escape') this.closeModal();
      if (e.key === 'Tab') this.trapFocus(e);
    });
  }

  openPreview(certId, trigger) {
    const certificate = [...certificates.featured, ...certificates.all].find(cert => cert.id === certId);
    const previewPath = getCertificatePreview(certId);
    if (!certificate || !previewPath || !this.modal || !this.modalContent) return;
    this.lastTrigger = trigger;
    const isImage = /\.(png|jpe?g)$/i.test(previewPath);
    this.modalContent.innerHTML = `
      <p class="eyebrow">${certificate.issuer} · ${certificate.date}</p>
      <h2 class="modal-title" id="cert-modal-title">${certificate.title}</h2>
      ${isImage
        ? `<img class="credential-preview-image" src="${previewPath}" alt="${certificate.title} certificate">`
        : `<iframe class="credential-preview-frame" src="${previewPath}" title="${certificate.title} certificate document"></iframe>`}
      <div class="modal-links"><a class="modal-link" href="${previewPath}" target="_blank" rel="noopener noreferrer">Open document in a new tab ↗</a>
        ${certificate.verifyUrl ? `<a class="modal-link" href="${certificate.verifyUrl}" target="_blank" rel="noopener noreferrer">Verify credential ↗</a>` : ''}
      </div>
    `;
    this.modal.hidden = false;
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    this.modalClose.focus();
  }

  trapFocus(event) {
    const focusable = [...this.modal.querySelectorAll('a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])')];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.hidden = true;
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (this.lastTrigger instanceof HTMLElement) this.lastTrigger.focus();
  }
}

// ===================================================================
// INITIALIZATION
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  new MobileNavigation();
  if (document.getElementById('featured-projects-grid')) new FeaturedProjectsRenderer();
  if (document.getElementById('academic-grid')) new ProjectsPage();
  if (document.getElementById('featured-certs-grid')) new CertificatesPage();
  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());
});
