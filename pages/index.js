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
    imgUrl: '/profile.jpg'
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
