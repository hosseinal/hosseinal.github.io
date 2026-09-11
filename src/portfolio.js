const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://hosseinal.github.io/',
  title: 'Software Engineer.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Hossein Albakri',
  role: 'Software Engineer',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'Hossein is a software engineer passionate about computer science and always eager to learn and explore new opportunities. He has professional experience in backend development and C++, with additional knowledge of CUDA programming and a strong interest in distributed systems.',
  resume: 'https://www.linkedin.com/in/hosseinalbakri/',
  social: {
    linkedin: 'https://www.linkedin.com/in/hosseinalbakri/',
    github: 'https://github.com/hosseinal',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Sparse Comoutation',
    description:
      'A sparse computation library for CUDA and C++ for sparse matrix matrix and matrix vector multiplication on CUDA.',
    stack: ['C++', 'CUDA', 'Python'],
    sourceCode: 'https://github.com/hosseinal/sparse-computation',
    image: 'sparse.png',
  },
  {
    name: 'Agentic AI',
    description:
      'A agentic AI framework for chating with AI agents. Include example of function tool calling and RAG.',
    stack: ['Python', 'PyTorch', 'Redis', 'FastAPI', 'LangChain', 'OpenAI', 'RAG'],
    sourceCode: 'https://github.com/hosseinal/AgenticAI',
    image: 'agentic.png',
  },
  {
    name: 'URL Shortener',
    description:
      'A URL shortener built with Go and PostgreSQL for storing URLs and generating short URLs. It use Redis for caching and rate limiting.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'CI/CD'],
    sourceCode: 'https://github.com/hosseinal/url-shortener',
    image: 'url-shortener.png',
  },
  {
    name: 'Sterassen With OpenMP',
    description:
      'A parallel implementation of the Stassen algorithm with OpenMP for matrix multiplication.',
    stack: ['C++', 'OpenMP'],
    sourceCode: 'https://github.com/hosseinal/stassen-with-openmp',
    image: 'stassen.png',
  },
  {
    name: 'Fraud Detection',
    description:
      'A fraud detection system built with Python and Pandas for detecting fraudulent transactions.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'numpy'],
    sourceCode: 'https://github.com/hosseinal/fraud-detection',
    image: 'fraud.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C++',
  'CUDA',
  'Python',
  'Go',
  'Pandas',
  'Scikit-learn',
  'numpy',
  'OpenMP',
  'Redis',
  'FastAPI',
  'LangChain',
  'OpenAI',
  'RAG',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hosseinalbakri3@gmail.com',
}

export { header, about, projects, skills, contact }
