export const api_config = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_APP_GITHUB_KEY}`
  }
}

const technologies = [
  {
    id: 356618670,
    tech: [
      {
        id: 0,
        title: 'javascript',
        icon: 'js.svg'
      },
      {
        id: 1,
        title: 'python',
        icon: 'python.svg'
      },
      {
        id: 2,
        title: 'PostGreSql',
        icon: 'psql.svg'
      }
    ]
  },
  {
    id: 326847239,
    tech: [
      {
        id: 0,
        title: 'reactJs',
        icon: 'react.svg'
      },
      {
        id: 1,
        title: 'expressJs',
        icon: 'express.svg'
      },
      {
        id: 2,
        title: 'nodeJs',
        icon: 'nodejs.svg'
      },
      {
        id: 3,
        title: 'MongoDb',
        icon: 'mongo.svg'
      },
      {
        id: 4,
        title: 'Redux',
        icon: 'redux.svg'
      }
    ]
  },
  {
    id: 324222363,
    tech: [
      {
        id: 0,
        title: 'javascript',
        icon: 'js.svg'
      },
      {
        id: 1,
        title: 'react',
        icon: 'react.svg'
      }
    ]
  },
  {
    id: 4456,
    tech: [
      {
        id: 0,
        title: 'reactJs',
        icon: 'react.svg'
      },
      {
        id: 1,
        title: 'expressJs',
        icon: 'express.svg'
      },
      {
        id: 2,
        title: 'nodeJs',
        icon: 'nodejs.svg'
      },
      {
        id: 3,
        title: 'MongoDb',
        icon: 'mongo.svg'
      }
    ]
  }
]

function getArr(id, obj) {
  const arr = []
  obj.find(item => (item.id === id ? arr.push(item.tech) : null))
  return arr.flat()
}

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

export const projectData = (response, array) => {
  array.push({
    id: response.id,
    title: response.name,
    demo: response.homepage,
    repo: response.html_url,
    image: 'nextjs.svg', //need to et this too from api
    description: response.description,
    tech: getArr(response.id, technologies),
    updated: response.updated_at.slice(0, 10)
  })

  return array
}
