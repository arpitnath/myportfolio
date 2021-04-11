export const profileData = response => {
  return {
    name: response.name,
    role: 'Frontend Developer',
    status: response.hireable,
    social: [
      {
        id: 0,
        title: 'Github',
        url: 'https://github.com/arpitnath',
        icon: 'github.svg'
      },
      {
        id: 1,
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/arpit-nath-38280a173/',
        icon: 'linkedin.svg'
      },
      {
        id: 2,
        title: 'Gmail',
        url: 'mailto: http://arpitnath42@gmail.com',
        icon: 'gmail.svg'
      }
    ],
    organization: response.company,
    location: response.location,
    bio: response.bio,
    imgUrl: response.avatar_url,
    resume: {
      resumeQRCode: 'resumeqr.svg',
      resumeUrl: 'https://qrgo.page.link/RZWai'
    },
    skills: [
      { title: 'ReactJS', icon: 'react.svg' },
      { title: 'Redux', icon: 'redux.svg' },
      { title: 'NextJS', icon: 'nextjs.svg' },
      { title: 'ExpressJS', icon: 'express.svg' },
      { title: 'NodeJS', icon: 'nodejs.svg' },
      { title: 'JavaScript', icon: 'js.svg' },
      { title: 'python', icon: 'python.svg' },
      { title: 'MongoDb', icon: 'mongo.svg' },
      { title: 'PostGreSql', icon: 'psql.svg' },
      { title: 'Html5', icon: 'html.svg' },
      { title: 'css3', icon: 'css.svg' },
      { title: 'styled components', icon: 'styled.svg' }
    ],
    skills2: [
      { title: 'Git', icon: 'git.svg' },
      { title: 'NPM', icon: 'npm.svg' },
      { title: 'yarn', icon: 'yarn.svg' },
      { title: 'EsLint', icon: 'eslint.svg' },
      { title: 'Prettier', icon: 'prettier.svg' },
      { title: 'TypeScript', icon: 'ts.svg' },
      { title: 'Sass', icon: 'sass.svg' },
      { title: 'Redis', icon: 'redis.svg' },
      { title: 'Django', icon: 'django.svg' },
      { title: 'Webpack', icon: 'wbp.svg' },
      { title: 'Babel', icon: 'babel.svg' },
      { title: 'Docker', icon: 'docker.svg' },
      { title: 'Jest', icon: 'jest.svg' },
      { title: 'Heroku', icon: 'heroku.svg' },
      { title: 'Netlify', icon: 'netlify.svg' }
    ]
  }
}
