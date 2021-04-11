import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Profile from '../components/Profile'
import Footer from '../components/Footer'

export default function Home() {
  const profileData = {
    name: 'Arpit Nath',
    role: 'Frontend Developer',
    social: [
      'http://github.ac',
      'http://linkedIn.ac',
      'http://arpitnath42@gmail.com'
    ],
    organization: 'Innoloft Gmbh',
    bio: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim',
    imgUrl: '/profile.jpg',
    location: 'Remote',
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

  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
          crossOrigin='anonymous'
        />
        {/*@Fonts */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
        </style>
      </Head>

      <div className={styles.main}>
        <Profile profile={profileData} />
      </div>

      <Footer />
    </>
  )
}
