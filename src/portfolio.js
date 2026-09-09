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
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hosseinalbakri3@gmail.com',
}

export { header, about, projects, skills, contact }
